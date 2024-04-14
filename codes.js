var tablinks = document.getElementsByClassName("aboutme-Tabtitles-links");
var tabcontents = document.getElementsByClassName("Atab-content");
const toTop = document.querySelector(".scroll-top");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});


window.addEventListener("scroll", () =>{
   if(window.pageYOffset >100){
    toTop.classList.add("active");
   }else{
    toTop.classList.remove("active");
   }
});

const scriptURL = '';
const form = document.forms[''];

const formMsg = document.getElementById("form-msg");
formMsg.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => {
      formMsg.innerHTML = "Message sent succesfully."
      setTimeout(function() {
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(err => console.error('Error!', error.msg))
})