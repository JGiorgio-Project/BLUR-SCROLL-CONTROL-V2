const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

let opacity = 0;
let blur = 0;
let scale = 0;

let scrollValue = 0;

window.addEventListener('wheel', function (event) {
    if(event.deltaY < 0){
        //scroll up
        if (scrollValue < 3){
            scrollValue += 1;
        }

        if (scrollValue === 1) {
            imgOut(img1);
        }

        if (scrollValue === 1){
            imgIn(img2);
        }else if (scrollValue === 2){
            imgOut(img2);
        }

        if (scrollValue === 2){
            imgIn(img3);
        }else if (scrollValue === 3){
            imgOut(img3);
        }

        if (scrollValue === 3){
            imgIn(img4);
        }

        console.log("ScrollValue = "+scrollValue+" | Opacity = "+opacity+" | Blur = "+blur+" | Scale = "+scale);
    }
    else {
        //scrollDown
        if (scrollValue > 0){
            scrollValue -= 1;
        }

        if (scrollValue === 2) {
            imgOutReverse(img4);
        }

        if (scrollValue === 2){
            imgIn(img3);
        }else if (scrollValue === 1){
            imgOutReverse(img3);
        }

        if (scrollValue === 1){
            imgIn(img2);
        }else if (scrollValue === 0){
            imgOutReverse(img2);
        }

        if (scrollValue === 0){
            imgIn(img1);
        }

        console.log("ScrollValue = "+scrollValue+" | Opacity = "+opacity+" | Blur = "+blur+" | Scale = "+scale);
    }
});

function addStyle(element, opacity, blur, scale) {
    element.style.opacity = (opacity / 10);
    element.style.filter = 'blur('+(blur / 10)+'px)';
    element.style.transform = 'scale('+(scale / 10)+')';
}

function imgOut (img) {
    opacity = 0;
    blur = 100;
    scale = 0;
    /*img.style.transition = "all 2s cubic-bezier(0.5,0,1,1)";*/
    addStyle(img, opacity, blur, scale);
}

function imgOutReverse (img) {
    opacity = 0;
    blur = 100;
    scale = 20;
    /*img.style.transition = "all 2s cubic-bezier(0.5,0,1,1)";*/
    addStyle(img, opacity, blur, scale);
}

function imgIn (img) {
    opacity = 10;
    blur = 0;
    scale = 10;
    /*img.style.transition = "all 2s cubic-bezier(0,0,0,1)";*/
    addStyle(img, opacity, blur, scale);
}