let input = document.getElementById("input")
let dotpic = document.getElementById("dotpic")
let searchpic = document.getElementById("searchpic")
let userbtn = document.getElementById("userbtn")
let searchbtn = document.getElementById("inputsearchbtn")
searchpic.onclick = () => {
    input.focus()
}
dotpic.onclick = () => {
    pass
}
searchbtn.onclick = () =>{
    location.href ='https://www.google.com/search?q='+input.value;
}
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("inputsearchbtn").click();
    }
})
userbtn.onclick = ()=>{
    location.href = "https://accounts.google.com/ServiceLogin/signinchooser?hl"
}