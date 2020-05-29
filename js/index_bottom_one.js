// window.onload=function(){
var ad1=document.getElementById("ad1");
var ad2=document.getElementById("ad2");
var ad3=document.getElementById("ad3");
var ad4=document.getElementById("ad4");
var none = document.getElementsByClassName("bottom_one")[0];
var bottom_two = document.getElementsByClassName("bottom_two")[0];
var tag = getComputedStyle(none, null)["display"];
var one_a5 = document.querySelector(".bottom_one_a5");
var one_a6 = document.querySelector(".bottom_one_a6");
$(one_a5).animate({
    bottom: "-2rem"
}, 0)
$(one_a5).animate({
    bottom: "0rem"
}, 4000)
$(one_a6).animate({
    bottom: "-1.8rem"
}, 0)
$(one_a6).animate({
    bottom: "0.2rem"
}, 4000,function(){
    
})
var one_set=true;
if (tag == "block") {
    var one_img_j = document.querySelector(".bottom_one_img_j");
    var one_j1 = document.getElementsByClassName("one_j1");
    var top1 = parseInt(getComputedStyle(one_img_j, null)["top"]);
    console.log(one_j1[1].style.opacity)
    // var op1=one_j1[0].style.opacity;
    // var op2=one_j1[1].style.opacity;
    // var op3=one_j1[2].style.opacity;
    function san1() {
        if(one_set){
        var top_fu = top1;
        var op1 = 0;
        one_j1[0].style.opacity = "0.04";
        one_j1[1].style.opacity = "0.02";
        one_j1[2].style.opacity = "0.00";
        var wan1 = setInterval(() => {
            op1 += 0.002;
            top_fu -= 3;
            one_img_j.style.top = top_fu - 3 + "px";
            for (var i = 0; i < one_j1.length; i++) {
                // console.log(i)
                one_j1[i].style.opacity = Number(one_j1[i].style.opacity) + op1;
            }
            // console.log(parseInt(one_img_j.style.top))
            if (parseInt(one_img_j.style.top) <= (top1 - 100)) {
                // console.log(parseInt(one_img_j.style.top));
                clearInterval(wan1);
                san1();
            }
        }, 100);}
    }

    san1();
    
   
    window.onclick= function () {
        if(one_set){
        // none.parentNode.removeChild(none);
        none.style.display="none";
        bottom_two.style.display = "block";
        bottom_no_2();
        one_set=false;
        // ad1.setAttribute("src","MP3/1.mp3");
        // ad1.play();
        san1();
    }
    }
}


// }