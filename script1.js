const options = document.querySelector('.customize-option');
const icon = document.querySelector('.customize-icon');

//show the customize options panel clicking the A icon
icon.addEventListener('click',() => {
    options.classList.toggle('active')
})

//select all tag that can contain txt
const allEl = document.querySelectorAll('p,button,h1,h2,h3,h4,h5,h6,span,a');

function reduce(){
    allEl.forEach(el => {
        //if the current element does not have a role attribute, then proceed
        if(el.getAttribute('role') !== 'customize-page'){
            let elFont = Math.floor(parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size')));
            el.style.fontSize = (elFont - 4) + 'px'
        }
    })     
}

function large(){
    allEl.forEach(el => {
        if(el.getAttribute('role') !== "customize-page"){
            let elFont = Math.floor(parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size')));
            el.style.fontSize = (elFont + 4) + 'px'
        }
    })
}


function serif(){
    allEl.forEach(el => {
        if(el.getAttribute('role') !== 'customize-page'){
            el.style.fontFamily = 'serif';
        }
    })
}
function arial(){
    allEl.forEach(el => {
        if(el.getAttribute('role') !== 'customize-page'){
            el.style.fontFamily = 'arial';
        }
    })
}



function dark(){
    //change the body color to black
    document.getElementsByTagName('BODY')[0].style.background = '#1C1F2B'

    allEl.forEach(el => {
        if(el.getAttribute('role') !== 'customize-page'){
            //select the specific element color
           let elColor = window.getComputedStyle(el, null).getPropertyValue('color');

           //if it is black then reverse the color to white
           if(elColor === 'rgb(51, 51, 51)'){
                el.style.color = 'white'
           }
        }
    })
}

function white(){
    //reverse the body color to white
    document.getElementsByTagName('BODY')[0].style.background = '#fff'

    allEl.forEach(el => {
        if(el.getAttribute('role') !== 'customize-page'){
            //select the specific element color
           let elColor = window.getComputedStyle(el, null).getPropertyValue('color');
            
           //if it is white then reverse the color to black
            if(elColor === 'rgb(255, 255, 255)'){
                el.style.color = '#333333'
           }
        }
    })
}