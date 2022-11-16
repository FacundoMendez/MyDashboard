import * as THREE from "three"


const webGl_cameras  = () => {

    const canvas = document.querySelector(".webGl_cameras")

    const scene = new THREE.Scene()

    const sizes = {
        width: window.innerWidth,
        heigth: window.innerHeight
    }

    window.addEventListener("resize", () => {
        sizes.width = window.innerWidth
        sizes.heigth = window.innerHeight

        camera.aspect = sizes.width / sizes.heigth
        camera.updateProjectionMatrix()

        renderer.setSize(sizes.width, sizes.heigth)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth, 0.1, 100)
    camera.position.z = 3
    scene.add(camera)

    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial({color:"#00ff55"})
    const Mesh = new THREE.Mesh(geometry, material)

    scene.add(Mesh)




    /* mouse */

    const cursor = {
        x: 0,
        y: 0
    }

    window.addEventListener("mousemove" , (event) => {
        cursor.x = event.clientX / sizes.width - 0.5
        cursor.y = -(event.clientY / sizes.heigth - 0.5)
    })




    const renderer = new THREE.WebGLRenderer({
        canvas:canvas
    })
    renderer.setSize(sizes.width , sizes.heigth)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

   /*  const clock = new THREE.Clock() */

    const tick = () => {

        /* const elapsedTime = clock.getElapsedTime() */
        /* Mesh.rotation.y = elapsedTime */

        camera.position.x = -cursor.x * 5
        camera.position.y = -cursor.y * 5

        camera.lookAt(Mesh.position)

        renderer.render(scene,camera)
        window.requestAnimationFrame(tick)

    }

    tick()
}

export default webGl_cameras;