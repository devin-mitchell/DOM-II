const navBar = document.querySelector('.main-navigation .nav-container')
const navLinks = document.querySelectorAll('.nav a')
const busImg = document.querySelector('.intro img')
const header2 = document.querySelectorAll('.container h2')
const pickDestDiv = document.querySelector('.content-destination')
const dest = document.querySelectorAll('.destination')
const contentDestImg = document.querySelector('.content-destinantion img')
const header4 = document.querySelectorAll('.destination h4')

Array.from(navLinks).forEach(function (links){
    links.addEventListener('mouseover', function (event){
    event.target.style.color = '#CFB41B'
    })
    links.addEventListener('mouseout', function(event) {
        event.target.style.color = '';
    })  
    links.addEventListener('click', function(event){
        event.preventDefault()
    })
})   

busImg.addEventListener('dblclick', function(event){
    if(event.target.style.borderRadius === ''){
        event.target.style.borderRadius = '50%'
    } else {
        event.target.style.borderRadius = ''
    }
})

Array.from(header2).forEach(function (h2){
    h2.addEventListener('click', function(event){
        if(event.target.style.color === ''){
            event.target.style.color = '#CFB41B'
        } else {
            event.target.style.color = ''
        } 
    })
})




Array.from(header4).forEach(function (tag){
    tag.addEventListener('select', function(event){
        event.currentTarget.style.backgroundColor ='black'
    })
})

Array.from(dest).forEach(function (div){
    div.addEventListener('mouseenter', function(event){
        event.target.style.backgroundColor = 'lightblue'
    })
    div.addEventListener('mouseleave', function(event){
        event.target.style.backgroundColor = ''
    })
    div.addEventListener('click', (e) => {
        console.log('this is a div')
        e.stopPropagation()
    })
})

document.addEventListener('wheel', function(event){
    if(event){
        document.body.style.backgroundColor = 'white'
    } 
})

window.addEventListener('resize', function(event){
    navBar.style.backgroundColor = 'lightgreen'
})

window.addEventListener('load', function(event){
    document.body.style.backgroundColor = 'lightpink'
})


const signButton = document.querySelectorAll('.destination .btn')
Array.from(signButton).forEach((but) => {
    but.addEventListener('click', (e) => {
        console.log('This is a button')
    })
})

window.addEventListener('click', (e) => {
    console.log('this is the window')
})