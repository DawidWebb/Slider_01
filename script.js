const left = document.querySelector('.left');
const right = document.querySelector('.right');
const divImg = document.querySelector('.img');
const info = document.querySelector('h1');

const picture = [
    {img: '/img/1_small.JPG'},
    {img: '/img/2_small.JPG'},
    {img: '/img/3_small.JPG'},
    {img: '/img/4_small.JPG'},
    {img: '/img/5_small.JPG'}
]

let counter = 0;



leftSide = ()=>{

    if(counter>0){ 
        counter--;
        left.style.opacity = 1;
        right.style.opacity = 1;
        divImg.style.backgroundImage = `url(${picture[counter].img})`
    
}else if(counter===0){
    
    left.style.opacity = .5;
    counter=0
}

}
rightSide = ()=>{

    if(counter<picture.length-1){
        counter++;
        left.style.opacity = 1;
        right.style.opacity = 1;
        divImg.style.backgroundImage = `url(${picture[counter].img})`    
    
 }else if (counter===picture.length-1){
 right.style.opacity = .5;
 counter=picture.length-1
 }


}


left.addEventListener('click', leftSide)
right.addEventListener('click', rightSide)