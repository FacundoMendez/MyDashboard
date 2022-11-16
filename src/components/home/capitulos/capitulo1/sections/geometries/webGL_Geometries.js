import * as THREE from "three"


const webGL_Geometries = () => {

    const canvas = document.querySelector(".webGL_geometries")

    const scene = new THREE.Scene()

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height , 0.1 , 100)
    camera.position.z = 3
    scene.add(camera)



    window.addEventListener("resize", () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        camera.asepect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        renderer.setSize(sizes.width , sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const renderer = new THREE.WebGLRenderer({
        canvas:canvas,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2 ))


    const geometry = new THREE.BoxGeometry(1,1,1 ,10 ,10 ,10)
    const material = new THREE.MeshBasicMaterial({color:"#00ff00" , wireframe: true})
    const Mesh = new THREE.Mesh(geometry, material)
    scene.add(Mesh)


    const clock = new THREE.Clock()

    const tick = () => {

        const elapsedTime = clock.getElapsedTime()

        Mesh.rotation.y = elapsedTime

        renderer.render(scene, camera)

        window.requestAnimationFrame(tick)

    }

    tick()

}

export default webGL_Geometries;