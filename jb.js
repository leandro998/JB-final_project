function menu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu_bg").classList.toggle("change_bg")
}

 
const btnMenubox1 = document.querySelector('.btn_box1');
const btnMenubox2 = document.querySelector('.btn_box2');
const btn_content_box1 = document.querySelector('.btn_content_box1')
const btn_content_box2 = document.querySelector('.btn_content_box2')
const btn_closerbox1 = document.querySelector('.btn_closebox1')
const btn_closerbox2 = document.querySelector('.btn_closebox2')
let boxOpen1 = false;
let boxOpen2 = false;

btnMenubox1.addEventListener('click', () => {
    if(boxOpen1 == false & boxOpen2 == false) {
        btn_content_box1.classList.add('btn_box1_open');
        boxOpen1 = true;
        // boxOpen2 = false;
    } 
    else if (boxOpen2 == true) {
        btn_content_box2.classList.remove('btn_box2_open');
        btn_content_box1.classList.add('btn_box1_open');
        boxOpen1 = true;
    } 
});

    
btnMenubox2.addEventListener('click', () => {
    if(boxOpen1 == false & boxOpen2 == false) {
        btn_content_box2.classList.add('btn_box2_open');
        // boxOpen1 = false;
        boxOpen2 = true;
    } 
    else if (boxOpen1 == true) {
        btn_content_box1.classList.remove('btn_box1_open');
        btn_content_box2.classList.add('btn_box2_open');
        boxOpen2 = true;
    }  
});

btn_closerbox1.addEventListener('click', () => {
    btn_content_box1.classList.remove('btn_box1_open')
}) 

btn_closerbox2.addEventListener('click', () => {
    btn_content_box2.classList.remove('btn_box2_open')
})


