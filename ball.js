//khoi tao bien de luu anh
let imgObj = null;
//goi ham init de trinh duyet khoi tao lan dau 
window.onload = init();
//tao ham khoi tao
function init(){
    imgObj = getID("myImage");
    imgObj.style.position = "absolute";
    imgObj.style.left = "50%";
    imgObj.style.transform = "translateX(-50%)"
    imgObj.style.top  = "10%";
}



function  moveRight(){
    imgObj.style.left =  parseInt(imgObj.style.left) + 1 + '%';
}
function  moveLeft(){
    imgObj.style.left =  parseInt(imgObj.style.left) -1 + '%';
}
function  moveUp(){
    imgObj.style.top =  parseInt(imgObj.style.top) - 10 + '%';
}

function  moveDown(){
    imgObj.style.top =  parseInt(imgObj.style.top) + 10 + '%';
}






function getID(id){
    return document.getElementById(id);
}