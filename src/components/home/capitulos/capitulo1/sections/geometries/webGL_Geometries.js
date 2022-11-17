import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const webGL_Geometries = () => {

    const canvas = document.querySelector(".webGL_geometries")

    const scene = new THREE.Scene()

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


    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height , 0.1 , 1000)
    camera.position.z = 10
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
        canvas:canvas,
        alpha:true
    })

    renderer.setSize(sizes.width , sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    const group = new THREE.Group()
    group.position.y = 2
    scene.add(group)

    const material = new THREE.MeshBasicMaterial({
        color:"#00ff8f" , 
        wireframe: true , 
        side: THREE.DoubleSide
    })
    

    const geometryBox = new THREE.BoxGeometry()
    const meshBox = new THREE.Mesh(geometryBox , material)
    meshBox.position.x = 0
    group.add(meshBox)

    const geometryPlane = new THREE.PlaneGeometry(1,1,5,5)
    const meshPlane = new THREE.Mesh(geometryPlane , material)
    meshPlane.position.x = -1.5
    group.add(meshPlane)

    const geometryCircle = new THREE.CircleGeometry()
    const meshCircle = new THREE.Mesh(geometryCircle, material)
    meshCircle.position.x = -3.5
    group.add(meshCircle)

    const geometryCone = new THREE.ConeGeometry()
    const meshCone = new THREE.Mesh(geometryCone, material)
    meshCone.position.x = 2
    group.add(meshCone)

    const geometryRing = new THREE.RingGeometry()
    const meshRing = new THREE.Mesh(geometryRing, material)
    meshRing.position.x = 4.5
    group.add(meshRing)
    
    const geometryTorus = new THREE.TorusGeometry()
    const meshTorus = new THREE.Mesh(geometryTorus, material)
    meshTorus.position.x = 4.5
    meshTorus.position.y = -3
    group.add(meshTorus)
    
    const geometryTorusKnot = new THREE.TorusKnotGeometry()
    const meshTorusKnot = new THREE.Mesh(geometryTorusKnot, material)
    meshTorusKnot.position.x = .4
    meshTorusKnot.position.y = -3
    group.add(meshTorusKnot)

    const geometryDoceCahedron = new THREE.DodecahedronGeometry()
    const meshDoceCahedron = new THREE.Mesh(geometryDoceCahedron, material)
    meshDoceCahedron.position.x = -3
    meshDoceCahedron.position.y = -3
    group.add(meshDoceCahedron)

    const geometryOctahedron = new THREE.OctahedronGeometry()
    const meshOctahedron = new THREE.Mesh(geometryOctahedron, material)
    meshOctahedron.position.x = -3
    meshOctahedron.position.y = -6
    group.add(meshOctahedron)

    const geometryTetrahedron = new THREE.TetrahedronGeometry()
    const meshTetrahedron = new THREE.Mesh(geometryTetrahedron, material)
    meshTetrahedron.position.x = -.5
    meshTetrahedron.position.y = -6
    group.add(meshTetrahedron)

    const geometryIcosahedron = new THREE.IcosahedronGeometry()
    const meshIcosahedron= new THREE.Mesh(geometryIcosahedron, material)
    meshIcosahedron.position.x = 2
    meshIcosahedron.position.y = -6
    group.add(meshIcosahedron)

    const geometrySphere = new THREE.SphereGeometry()
    const meshSphere= new THREE.Mesh(geometrySphere, material)
    meshSphere.position.x = 4.7
    meshSphere.position.y = -6
    group.add(meshSphere)

    
    const geometryTube = new THREE.TubeGeometry()
    const meshTube= new THREE.Mesh(geometryTube, material)
    meshTube.position.x = -2
    meshTube.position.y = 2
    meshTube.scale.set(.7, .7 , .7)
    group.add(meshTube)


    const geometryLathe = new THREE.LatheGeometry()
    const meshLathe= new THREE.Mesh(geometryLathe, material)
    meshLathe.position.x = .5
    meshLathe.position.y = 2
    group.add(meshLathe)


    
    const geometryCylinder = new THREE.CylinderGeometry()
    const meshCylinder= new THREE.Mesh(geometryCylinder, material)
    meshCylinder.position.x = 3
    meshCylinder.position.y = 2
    group.add(meshCylinder)

    meshCylinder.addEventListener("onmouseover" , () => {
        material.color= "red"
        /* document.classList.add("hoverMesh") */
        console.log("hola")
    })



    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping= true



    const clock = new THREE.Clock()

    const tick = () => {

        const elapsedTime = clock.getElapsedTime()


        renderer.render(scene, camera)
        controls.update()
        window.requestAnimationFrame(tick)

    }

    tick()

}

export default webGL_Geometries;