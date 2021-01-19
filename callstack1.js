function a (){
    b();
}
function b (){
    x();
}
function x (){
    y();
}
function y (){
    z();
}
function z (){
    console.log("Función Z");
}

setTimeout(x,0);
a();
