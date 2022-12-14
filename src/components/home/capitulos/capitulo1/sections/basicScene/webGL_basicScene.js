import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const webGl_basicScene = () => {

    const canvas = document.querySelector(".webGl_basicScene")

    const scene = new THREE.Scene()


    /* Mesh */

    const geometry = new THREE.BoxGeometry(1, 1, 1)

    const material = new THREE.MeshBasicMaterial({color:"red"})

    const Mesh = new THREE.Mesh(geometry , material)
    scene.add(Mesh)

    /* camera */

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener("resize", () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        renderer.setSize(sizes.width , sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })



    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height , 0.1, 100 )
    camera.position.z = 3
    scene.add(camera)


    /* render */

    const renderer = new THREE.WebGL1Renderer({
        canvas:canvas,
        alpha:true
    })

    renderer.setSize(sizes.width , sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    

 
    /* controls */

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping= true


    const clock = new THREE.Clock()

    const tick = () => {
        const elapsedTime = clock.getElapsedTime()

        Mesh.rotation.y = elapsedTime

        controls.update()
        renderer.render(scene, camera)
        window.requestAnimationFrame(tick)

    }

    tick()



}

export default webGl_basicScene;