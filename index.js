function breaktext(){
   const h1 = document.querySelector(".text")
const h1text = h1.textContent;


const splittedtext = h1text.split("")


let clutter = ""

splittedtext.forEach(function(e) {
   clutter += `<span>${e}</span>`
})
    
h1.innerHTML = clutter
}

breaktext()

gsap.from(".text span",{
   y:100,
   duration:0.5,
   delay:0.5,
   opacity:0,
   stagger:0.2
   
})