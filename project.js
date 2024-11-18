

const sideNavBar = document.querySelector(".sidenav")


const darkTheme = function() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#2E282A"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}

const lightTheme = function() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".dark-theme").textContent = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#0b3b7d"
    document.querySelector(".sidenav").style.backgroundColor = "#1587a1"

}

function eleHover(element) {
    element.style.backgroundColor = "lightblue";
}

function eleOut(item) {
    item.style.backgroundColor = "#DEE7E7"
}

const changeCompany = function() {
    document.querySelector("#company").textContent = "Krishna Pydipalli";
};

const normal = function() {
    document.querySelector("#company").textContent = "My Company"
}

const keyPressed = function() {
    document.querySelector("body").style.backgroundColor = "white"
}

const keyDown = function() {
    document.querySelector("body").style.backgroundColor = "red"
}

const loginButton=document.getElementById("loginBtn")
const loginModel=document.getElementById("loginSection")
const mainSection=document.querySelectorAll(".main .section")

loginButton.onclick=showLogin

function showLogin(){
	sideNavBar.style.display = "none"
	
	mainSection.forEach(function(item){
		item.style.display="none";
	})
	loginModel.style.display="block";
}

document.getElementById("closeBtn").addEventListener('click',hideLogin)
function hideLogin(){
	sideNavBar.style.display = "block"
	
	mainSection.forEach(function(item){
		item.style.display="block";
	})
	loginModel.style.display="none";
}