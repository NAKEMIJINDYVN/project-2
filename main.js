const btnElement=document.getElementsByClassName('why');
for(let value of btnElement){
    value.addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

const slide=document.querySelector('.slide');
const indeximg=0;
let interval=null


function showslide(index){
   slide.array.forEach(element => {
        element.classList.remove("")
   });

}



function prev(){

}


function next(){

}