import * as THREE from "three"

const webGL_FullScreenAndResizing = () => {

    const canvas = document.querySelector(".webGl_fullScreenAndResizing")

    const scene = new THREE.Scene()

    const sizes = {
        width: window.innerWidth,
        heigth: window.innerHeight
    }

    window.addEventListener("resize", () => {
        sizes.width= window.innerWidth
        sizes.heigth= window.innerHeight
        camera.aspect = sizes.width / sizes.heigth
        camera.updateProjectionMatrix()
        renderer.setSize( sizes.width , sizes.heigth)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio , 2))
    })

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth , 0.1 , 100)
    camera.position.z = 3
    scene.add(camera)


    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial({color: "#7f00ff"})
    const Mesh = new THREE.Mesh(geometry, material)
    scene.add(Mesh)


    const renderer = new THREE.WebGLRenderer({
        canvas:canvas,
        alpha:true
    })
    renderer.setSize(sizes.width , sizes.heigth)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const cursor = {
        x: 0,
        y: 0
    }

    document.addEventListener("mousemove", (event) => {
        cursor.x = event.x / sizes.width * 0.5
        cursor.y = -(event.y / sizes.heigth * 0.5)
    })


    const fullScreenImg = document.querySelector(".fullScreenImg")

    fullScreenImg.addEventListener("click", () => {
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

        if(!fullscreenElement)
        {
            if(canvas.requestFullscreen)
            {
                canvas.requestFullscreen()
            }
            else if(canvas.webkitRequestFullscreen)
            {
                canvas.webkitRequestFullscreen()
            }
        }
    })

    window.addEventListener('dblclick', () =>{
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

        if(fullscreenElement)
        {
            if(document.exitFullscreen)
            {
                document.exitFullscreen()
            }
            else if(document.webkitExitFullscreen)
            {
                document.webkitExitFullscreen()
            }
        }
    })


    
    const tick = () => {

        camera.position.x = -cursor.x
        camera.position.y = -cursor.y
        camera.lookAt(Mesh.position)

        renderer.render(scene,camera)
        window.requestAnimationFrame(tick)
    }
    tick()



}

export default webGL_FullScreenAndResizing;