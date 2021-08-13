let btnText = document.getElementById("btnText");
let bgColor = document.getElementById("bgColor");
let txtColor = document.getElementById("txtColor");
let txtTransform = document.getElementById("txtTransform");

//Padding Elements
let tPad = document.getElementById("tPad");
let rPad = document.getElementById("rPad");
let bPad = document.getElementById("bPad");
let lPad = document.getElementById("lPad");

//Radius Elements
let tlRad = document.getElementById("tlRad");
let trRad = document.getElementById("trRad");
let blRad = document.getElementById("blRad");
let brRad = document.getElementById("brRad");

let btn = document.getElementById("btn");

//Border Elements
let border = document.getElementsByName("border");
let borderInp = document.getElementById("border");

//Generate Code Button
let generateCode = document.getElementById("generateCode");

let html = document.querySelector(".html");
let css = document.querySelector(".css");

//Code
let htmlCode = document.getElementById("html-code");
let csCode = document.getElementById("css-code");

let cssCode = "";
let bColor = "";
let tColor = "";
let tTransform = "";
let tPadding = "";
let lPadding = "";
let bPadding = "";
let rPadding = "";
let tLeftRadius = "";
let tRightRadius = "";
let bLeftRadius = "";
let bRightRadius = "";
let borderProp = "";

//Listening to User Input

btnText.addEventListener('input', function(){
    btn.innerText = btnText.value;
    button = `<button>${btnText.value}</button>`;
})

//Listening to the input event and assign the user value as background color of button
//Doing the same for other input fields

bgColor.addEventListener('input', function() {
    bColor = bgColor.value;
    btn.style.backgroundColor = bgColor.value;
})

txtColor.addEventListener('input', function() {
    tColor = txtColor.value;
    btn.style.color = txtColor.value;
})

txtTransform.addEventListener('input', function() {
    tTransform = txtTransform.value;
    btn.style.textTransform = txtTransform.value;
})

tPad.addEventListener('input', function() {
    tPadding = `${tPad.value}px`;
    btn.style.paddingTop = `${tPad.value}px`;
})

rPad.addEventListener('input', function() {
    rPadding = `${rPad.value}px`;
    btn.style.paddingRight = `${rPad.value}px`;
})

bPad.addEventListener('input', function() {
    bPadding = `${bPad.value}px`;
    btn.style.paddingBottom = `${bPad.value}px`;
})

lPad.addEventListener('input', function() {
    lPadding = `${lPad.value}px`;
    btn.style.paddingLeft = `${lPad.value}px`;
})

tlRad.addEventListener('input', function() {
    tLeftRadius = `${tlRad.value}px`;
    btn.style.borderTopLeftRadius = `${tlRad.value}px`;
})

trRad.addEventListener('input', function() {
    tRightRadius = `${trRad.value}px`;
    btn.style.borderTopRightRadius = `${trRad.value}px`;
})

blRad.addEventListener('input', function() {
    bLeftRadius = `${blRad.value}px`;
    btn.style.borderBottomLeftRadius = `${blRad.value}px`;
})

brRad.addEventListener('input', function() {
    bRightRadius = `${brRad.value}px`;
    btn.style.borderBottomRightRadius = `${brRad.value}px`;
})

border[0].addEventListener('click', function(){
    borderInp.style.opacity = 1;
})

borderInp.addEventListener('input', function(){
    btn.style.border = borderInp.value;
    borderProp = borderInp.value;
})

border[1].addEventListener('click', function(){
    btn.style.border = "none";
    borderInp.style.opacity = 0;
    borderProp = "none";
})

const filterProps = (props, value) => {
    return value === "" ? "" : value === "px" ? "" :`${props}: ${value};\n`;
}

generateCode.addEventListener('click', function(){
    cssCode ="background-color: " + bColor + ";\n" +
    "color: " +`${tColor !== "" ? tColor : "#000"};\n` +
    filterProps("text-transform", tTransform) + 
    filterProps("padding-left", lPadding) + 
    filterProps("padding-bottom", bPadding) +
    filterProps("padding-right", rPadding) +
    filterProps("border-top-left-radius", tLeftRadius) +
    filterProps("border-top-right-radius", tRightRadius) +
    filterProps("border-bottom-left-radius", bLeftRadius) +
    filterProps("border-bottom-right-radius", bRightRadius) +
    filterProps("border", borderProp);
    cssCode = `button {
        ${cssCode}}`;
        html.style.opacity =1;
        css.style.opacity = 1;
        htmlCode.innerText = button;
        csCode.innerText = cssCode; 
})