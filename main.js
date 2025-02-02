const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

if(navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

if(navClose)
    {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove("show-menu")
        })
    }

const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
    const navMenu = document.getElementById("nav-menu")
    //when i click on each nav link, i remove the show menu
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader()
{
    const header = document.getElementById("header")
    if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

//theme customization
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click", openThemeModal)
themeModal.addEventListener("click", closeThemeModal)

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1'))
        {
            fontSize = '12px';
        }
        else if(size.classList.contains('font-size-2'))
        {
            fontSize = '14px';
        }
        else if(size.classList.contains('font-size-3'))
        {
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size-4'))
        {
            fontSize = '18px';
        }
        //change font size of the root html element

        document.querySelector('html').style.fontSize = fontSize;
    })
})