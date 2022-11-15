import VanillaTilt from "vanilla-tilt"
const move = () => {
    VanillaTilt.init(document.querySelectorAll(".box"), {
        max: 15,
        speed: 900,
        glare: true,
        "max-glare": 0.6,
    });
    
}

export default move