function scrollToProjects(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
})

}


const roles = [
"Web Developer",
"MCA Student",
"JavaScript Developer",
"Programmer"
]

let i = 0
let j = 0
let current = ""
let isDeleting = false

function typeEffect(){

current = roles[i]

if(!isDeleting){
j++
}else{
j--
}

document.getElementById("typing").textContent =
current.substring(0,j)

if(!isDeleting && j === current.length){
isDeleting = true
setTimeout(typeEffect,1000)
return
}

if(isDeleting && j === 0){
isDeleting = false
i++
if(i === roles.length){
i = 0
}
}

setTimeout(typeEffect,120)

}

typeEffect()
const mode = document.getElementById("mode")

mode.addEventListener("click",function(){

document.body.classList.toggle("light")

})

window.onload = function(){
  const buttons = document.querySelectorAll(".social a");

  setTimeout(()=>{
    buttons.forEach(btn=>{
      btn.classList.add("show");
    });
  },4000);
}



