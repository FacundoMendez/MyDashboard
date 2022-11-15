import * as THREE from 'three';

const sceneTransformObjects = () => {

    const canvas = document.querySelector(".webGl_TransformObject")

    const scene = new THREE.Scene()


    /* Group */

    const group = new THREE.Group()
    scene.add(group)

    const geometry = new THREE.BoxGeometry(1,1,1)

    const material = new THREE.MeshBasicMaterial({color:"red"})

    const cube1 = new THREE.Mesh(geometry, material)
    cube1.position.x = -2
    group.add(cube1)

    const cube2 = new THREE.Mesh(geometry, material)
    cube2.position.x= 0
    group.add(cube2)
    
    const cube3 = new THREE.Mesh(geometry, material)
    cube3.position.x= 2
    group.add(cube3)

    group.rotation.y = 0.7
    group.scale.set(0.8, 1.1 , .8)
    group.position.set(.2, 0 , -.5)



    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }


    /* ayudante de ejes */

    const ejes = new THREE.AxesHelper()
    scene.add(ejes)





    /* camera */
    
    const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height)
    camera.position.z = 3
    scene.add(camera)

    const renderer = new THREE.WebGL1Renderer({
        canvas:canvas
    })

    renderer.setSize(sizes.width , sizes.height)
    renderer.render(scene, camera)



}

export default sceneTransformObjects;