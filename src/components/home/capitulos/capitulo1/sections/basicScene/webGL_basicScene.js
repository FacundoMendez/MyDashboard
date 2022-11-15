import * as THREE from 'three';

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

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height  )
    camera.position.z = 3
    scene.add(camera)


    /* render */

    const renderer = new THREE.WebGL1Renderer({
        canvas:canvas,
    })

    renderer.setSize(sizes.width , sizes.height)
    renderer.render(scene, camera)


}

export default webGl_basicScene;