const navLinks = document.querySelectorAll('.nav a')
const busImg = document.querySelector('.intro img')
const header2 = document.querySelectorAll('.container h2')
const pickDestDiv = document.querySelector('.content-destination')
const dest = document.querySelectorAll('.destination')


Array.from(navLinks).forEach(function (links){
    links.addEventListener('mouseover', function (event){
    event.target.style.color = '#CFB41B'
    })
    links.addEventListener('mouseout', function(event) {
        event.target.style.color = '';
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

pickDestDiv.addEventListener('click', function(event){
    event.currentTarget.style.backgroundColor ='black'
    event.currentTarget.style.color = 'gray'
})

pickDestDiv.addEventListener('dblclick', function(event){
    event.currentTarget.style.backgroundColor = 'white'
    event.currentTarget.style.color = 'black'
})


Array.from(dest).forEach(function (div){
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'lightblue'
    })
    div.addEventListener('mouseout', function(event){
        event.target.style.backgroundColor = ''
    })
})



