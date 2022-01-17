"use strict";

var anchors = document.getElementsByTagName("a");
var burger = document.getElementById("burger");

burger.addEventListener("click", function(){
for(var x of anchors){
    x.classList.toggle("block");
}
this.classList.toggle("rotateZ");
console.log(this);
});

for( var x of anchors){
x.addEventListener("click", function(){
    for(var i = 0; i < anchors.length; i++){
            anchors[i].classList.remove("selected");
        }
        this.classList.add("selected");
    });
}




