const container=document.querySelector('#container')
const unplasgURL='https://source.unsplash.com/random/'
const row=5

for(let i=0; i<row*3; i++){
    const img=document.createElement('img')
    img.src=`${unplasgURL}${getRandomSize()}`
    container.appendChild(img)
   
}


function getRandomSize(){
    return ` ${getRandomNr()} x ${getRandomNr()} `
}

function getRandomNr(){
    return Math.floor(Math.random()*10)+300
}