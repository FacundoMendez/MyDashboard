import * as THREE from "three";

const webGl_animations = () => {
    const canvas = document.querySelector(".webGl_animations")

    const scene = new THREE.Scene()

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const camera = new THREE.PerspectiveCamera(75 , sizes.width / sizes.height )
    camera.position.z = 3
    scene.add(camera)



    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial({color:"violet" , wireframe:true})
    const Mesh = new THREE.Mesh(geometry, material)

    scene.add(Mesh)

    /*   renderer  */

    const renderer = new THREE.WebGL1Renderer({
        canvas:canvas
    })
    renderer.setSize(sizes.width , sizes.height)




    let clock = new THREE.Clock()

    const tick = () => {

       const elapsedTime = clock.getElapsedTime()


        Mesh.rotation.y = elapsedTime


        renderer.render(scene, camera)
        window.requestAnimationFrame(tick)
    }

    tick()


}

export default webGl_animations