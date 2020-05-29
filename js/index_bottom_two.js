

function bottom_no_2() {

        // var dian_one = document.getElementById("dian_one");
        var a17 = document.querySelector(".bottom_two_a17");
        var a24 = document.querySelector(".bottom_two_a24");
        var a32 = document.querySelector(".bottom_two_a32");

        var a17_bottom = parseInt(getComputedStyle(a17, null)["bottom"]);
        var a24_bottom = parseInt(getComputedStyle(a24, null)["bottom"]);
        var a32_bottom = parseInt(getComputedStyle(a32, null)["bottom"]);
        var tagT=true;
        //上下浮动的三个图标
        function fu_dou_all(a, b) {
            if(tagT){
            var move = 0;
            var tag = true;
            var fu_dou = setInterval(() => {
                if (tag) {
                    move++;
                } else {
                    move--;
                }
                if (move >= 20) {
                    tag = false;
                } else if (move <= 0) {
                    tag = true;
                }
                a.style.bottom = b + move + "px";
                if(tagT==false){
                    clearInterval(fu_dou);
                }
            }, 50);
        }}

        function dian(a) {
            return document.getElementById(a);
        }
        var dian_one = dian("dian_one");
        var dian_one_width = parseInt(getComputedStyle(dian_one, null)["width"]);
        var dian_one_height = parseInt(getComputedStyle(dian_one, null)["height"]);
        var dian_one_left = parseInt(getComputedStyle(dian_one, null)["left"]);
        var dian_one_bottom = parseInt(getComputedStyle(dian_one, null)["bottom"]);

        var dian_two = dian("dian_two")
        var dian_two_width = parseInt(getComputedStyle(dian_two, null)["width"]);
        var dian_two_height = parseInt(getComputedStyle(dian_two, null)["height"]);
        var dian_two_left = parseInt(getComputedStyle(dian_two, null)["left"]);
        var dian_two_bottom = parseInt(getComputedStyle(dian_two, null)["bottom"]);

        var dian_three = dian("dian_three");
        var dian_three_width = parseInt(getComputedStyle(dian_three, null)["width"]);
        var dian_three_height = parseInt(getComputedStyle(dian_three, null)["height"]);
        var dian_three_left = parseInt(getComputedStyle(dian_three, null)["left"]);
        var dian_three_bottom = parseInt(getComputedStyle(dian_three, null)["bottom"]);

        var dian_four = dian("dian_four");
        var dian_four_width = parseInt(getComputedStyle(dian_four, null)["width"]);
        var dian_four_height = parseInt(getComputedStyle(dian_four, null)["height"]);
        var dian_four_left = parseInt(getComputedStyle(dian_four, null)["left"]);
        var dian_four_bottom = parseInt(getComputedStyle(dian_four, null)["bottom"]);
        var move_a = 0;
        var tag_a = true;

        //圆圈
        var fu_dou = setInterval(() => {
            if (tag_a) {
                move_a++;
            } else {
                move_a--;
            }
            if (move_a >= 20) {
                tag_a = false;
            } else if (move_a <= 0) {
                tag_a = true;
            }
            dian_one.style.width = dian_one_width + move_a + "px";
            dian_one.style.height = dian_one_height + move_a + "px";
            dian_one.style.left = dian_one_left - (move_a / 2) + "px";
            dian_one.style.bottom = dian_one_bottom - (move_a / 2) + "px";
            dian_two.style.width = dian_two_width + move_a + "px";
            dian_two.style.height = dian_two_height + move_a + "px";
            dian_two.style.left = dian_two_left - (move_a / 2) + "px";
            dian_two.style.bottom = dian_two_bottom - (move_a / 2) + "px";
            dian_three.style.width = dian_three_width + move_a + "px";
            dian_three.style.height = dian_three_height + move_a + "px";
            dian_three.style.left = dian_three_left - (move_a / 2) + "px";
            dian_three.style.bottom = dian_three_bottom - (move_a / 2) + "px";
            dian_four.style.width = dian_four_width + move_a + "px";
            dian_four.style.height = dian_four_height + move_a + "px";
            dian_four.style.left = dian_four_left - (move_a / 2) + "px";
            dian_four.style.bottom = dian_four_bottom - (move_a / 2) + "px";
        }, 50);

        function ac(a) {
            return document.querySelector(a);
        }
        var down = document.getElementsByClassName("down");
        var top = ac(".top");
        var bottom_two = ac(".bottom_two");
        var bottom = ac(".bottom");
        var no_1 = ac(".no_1");
        var bg_wu = ac(".bg_wu");
        var no_2 = ac(".no_2");
        var no_3 = ac(".no_3");
        var no_4 = ac(".no_4");

        // var a20 = ac(".bottom_two_a20");
        var a20 = ac(".bottom_two_a20");
        var a27 = ac(".bottom_two_a27");
        var a38 = ac(".bottom_two_a38");
        var a33 = ac(".bottom_two_a33");
        var a08 = ac(".bottom_two_a8");
        var a09 = ac(".bottom_two_a9");
        var a10 = ac(".bottom_two_a10");
        var a11 = ac(".bottom_two_a11");
        var a12 = ac(".bottom_two_a12");
        var a13 = ac(".bottom_two_a13");
        var a14 = ac(".bottom_two_a14");
        var a15 = ac(".bottom_two_a15");
        var a16 = ac(".bottom_two_a16");
        var a17 = ac(".bottom_two_a17");
        var a18 = ac(".bottom_two_a18");
        var a19 = ac(".bottom_two_a19");
        var a21 = ac(".bottom_two_a21");
        var a22 = ac(".bottom_two_a22");
        var a23 = ac(".bottom_two_a23");
        var a24 = ac(".bottom_two_a24");
        var a25 = ac(".bottom_two_a25");
        var a26 = ac(".bottom_two_a26");
        var a28 = ac(".bottom_two_a28");
        var a29 = ac(".bottom_two_a29");
        var a30 = ac(".bottom_two_a30");
        var a31 = ac(".bottom_two_a31");
        var a32 = ac(".bottom_two_a32");
        var a34 = ac(".bottom_two_a34");
        var a35 = ac(".bottom_two_a35");
        var a36 = ac(".bottom_two_a36");
        var a37 = ac(".bottom_two_a37");
        var two_p1 = ac(".bottom_two_p1");
        var two_p2 = ac(".bottom_two_p2");
        var two_p3 = ac(".bottom_two_p3");
        var two_p4 = ac(".bottom_two_p4");
        var two_p5 = ac(".bottom_two_p5");
        var two_first_p = ac(".bottom_one_first_p");

        bg_wu.style.display = "block";
        no_1.style.display = "block";
        $("#dian_one_bos").click(function(){
            $(".bottom_two_p2").css("display","block");
            $(".bottom_two_p3").css("display","none");
            $(".bottom_two_p4").css("display","none");
            $(".bottom_two_p5").css("display","none");
            $("#gz").css({
                bottom: "3.98rem",
                left: "1.5rem"
            });
        })
        $("#dian_two_bos").click(function(){
            $(".bottom_two_p2").css("display","none");
            $(".bottom_two_p3").css("display","none");
            $(".bottom_two_p4").css("display","block");
            $(".bottom_two_p5").css("display","none");
            $("#gz").css({
                bottom: "6rem",
                left: "4rem"
            });
        });
        $("#dian_three_bos").click(function(){
            $(".bottom_two_p2").css("display","none");
            $(".bottom_two_p3").css("display","none");
            $(".bottom_two_p4").css("display","none");
            $(".bottom_two_p5").css("display","block");
            $("#gz").css({
                bottom: "3.43rem",
                left: "5.38rem"
            });
        });
        function two_k(a) {
            $(a).animate({
                bottom: "-=10rem"
            }, 0)
        }

        function two(a, b, c) {
            $(a).animate({
                bottom: b
            }, 2000)
            $(a).animate({
                bottom: c
            }, 500)
        }
        function down_(a, b) {
            $(a).animate({
                bottom: b
            }, 3000)
        }
        var dian_one = document.getElementById("dian_one");

        dian_one.onclick = function () {
            ad4.play();
            ad4.loop=true;
            var tag = true;
            var tin = true;
            $(document).ready(function () {
                $("#gz").animate({
                    bottom: "1rem",
                    left: "1.75rem"

                }, 2000, "linear")

                $("#gz").animate({
                    bottom: "1.58rem",
                    left: "2.68rem"
                }, 1500, "linear")
                $("#gz").animate({
                    bottom: "2.8rem",
                    left: "0.55rem"
                }, 4000, "linear")
                $("#gz").animate({
                    bottom: "3.98rem",
                    left: "1.5rem"
                }, 1500, "linear",function(){
                    ad4.loop=false;
                    ad4.pause();
                  
                })
            })
            ac();
            setTimeout(() => {
                tag = false;
                console.log(tag);
                ac();
            }, 2000);
            setTimeout(() => {
                tag = true;
                console.log(tag);
                ac();
            }, 3500);
            setTimeout(() => {
                tag = false;
                console.log(tag);
                ac();
            }, 7500);
            setTimeout(() => {
                tag = true;
            }, 8800);
            setTimeout(() => {


                no_2.style.display = "block";
                two_k(a16);
                two_k(a17);
                two_k(a15);
                two_k(a18);
                two_k(a19);
                two_k(a21);
                two_k(a22);
                setTimeout(() => {
                    two(a16, "2.04rem", "1.84rem");
                    two(a17, "5.45rem", "5.25rem");
                    
                }, 500);
                setTimeout(() => {
                    fu_dou_all(a17, a17_bottom);
                    two(a15, "1.61rem", "1.41rem");
                    two_p1.style.display = "none";
                    two_p2.style.display = "block";
                    ad2.load();
                    ad2.play();
                }, 3000);
                setTimeout(() => {
                    two(a18, "2.03rem", "1.83rem")
                }, 3500);
                setTimeout(() => {
                    two(a19, "2.456rem", "2.256rem")
                }, 4000);
                setTimeout(() => {
                    two(a21, "2.88rem", "2.68rem");

                }, 4500);
                setTimeout(() => {

                    two(a22, "2.87rem", "2.67rem")
                }, 5000);
                setTimeout(() => {
                    dian_two.style.display = "block";
                }, 7500);
            }, 9000);

            function ac() {
                if (tag) {
                    wan1();

                    function wan1() {
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './img2/gz1.png');
                        // }, 100);
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './img2/gz2.png');
                        // }, 200);
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './img2/gz3.png');
                        // }, 300);
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './img2/gz4.png');
                        // }, 400);
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './img2/gz5.png');
                        //     if (tag == true) {
                        //         wan1();
                        //     }
                        // }, 500);
                        var a = 1;
                        var wan1 = setInterval(() => {
                            if (a > 5) {
                                a = 1;
                            }
                            $("#gz").attr('src', './img2/gz' + a + '.png');
                            a++;
                            if (tag == false) {
                                clearInterval(wan1);
                            }
                        }, 100);
                    }
                } else {
                    wan2();

                    function wan2() {
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './geizi/gz11.png');
                        // }, 100);
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './geizi/gz12.png');
                        // }, 200);
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './geizi/gz13.png');
                        // }, 300);
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './geizi/gz14.png');
                        // }, 400);
                        // setTimeout(() => {
                        //     $("#gz").attr('src', './geizi/gz15.png');
                        //     if (tag == false && tin == true) {
                        //         wan2();
                        //     }
                        // }, 500);
                        var a = 1;
                        var wan2 = setInterval(() => {
                            if (a > 5) {
                                a = 1;
                            }
                            $("#gz").attr('src', './geizi/gz1' + a + '.png');
                            a++;
                            if (tag == true) {
                                clearInterval(wan2);
                            }
                        }, 100);
                    }
                }
            }
            dian_one.parentNode.removeChild(dian_one);
            $("#dian_one_bos").css("display","block");
        };

        dian_two.onclick = function () {
            var tag = true;
            var tin = true;
            ad4.load();
                    ad4.play();
                    ad4.loop=true;
            // $(document).ready(function () {
            $("#gz").animate({
                bottom: "4.3rem",
                left: "1.02rem"

            }, 500, "linear")

            $("#gz").animate({
                bottom: "6rem",
                left: "4rem"
            }, 4000, "linear" ,
            function(){
                ad4.loop=false;
                ad4.pause();
              
            })

            // })
            ac();
            setTimeout(() => {
                tag = false;
                console.log(tag);
                ac();
            }, 500);
            setTimeout(() => {
                tin = false;
                no_3.style.display = "block";
                two_k(a23);
                two_k(a24);
                two_k(a25);
                two_k(a26);
                two_k(a28);
                two_k(a29);
                two_k(a30);
                setTimeout(() => {
                    two(a23, "3.74rem", "3.54rem");
                    two(a24, "7.04rem", "6.84rem")
                }, 500);
                setTimeout(() => {
                    fu_dou_all(a24, a24_bottom);
                    two_p2.style.display = "none";
                    two_p3.style.display = "block";
                    two(a25, "4.87rem", "4.67rem")
                    ad2.load();
                    ad2.play();
                }, 3000);
                setTimeout(() => {
                    two(a26, "0.105rem", "-0.095rem")
                }, 3500);
                setTimeout(() => {
                    two(a28, "0.57rem", "0.37rem")
                }, 4000);
                setTimeout(() => {
                    two(a29, "0.29rem", "0.09rem")
                }, 4500);
                setTimeout(() => {

                    two(a30, "0.3rem", "0.1rem")
                }, 5000);
                setTimeout(() => {
                    dian_three.style.display = "block";
                    two_p3.style.display = "none";
                    two_p4.style.display = "block";
                }, 7500);
            }, 4500);

            function ac() {
                if (tag) {
                    wan1();

                    function wan1() {
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz1.png');
                        }, 100);
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz2.png');
                        }, 200);
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz3.png');
                        }, 300);
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz4.png');
                        }, 400);
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz5.png');
                            if (tag == true) {
                                wan1();
                            }
                        }, 500);


                    }
                } else {
                    wan2();

                    function wan2() {
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz11.png');
                        }, 100);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz12.png');
                        }, 200);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz13.png');
                        }, 300);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz14.png');
                        }, 400);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz15.png');
                            if (tag == false && tin == true) {
                                wan2();
                            }
                        }, 500);
                    }
                }
            }
            dian_two.parentNode.removeChild(dian_two);
            $("#dian_two_bos").css("display","block");
        };

        dian_three.onclick = function () {
            var tag = true;
            var tin = true;
            ad4.load();
            ad4.play();
            ad4.loop=true;
            // $(document).ready(function () {
                $("#gz").animate({
                    bottom: "6rem",
                    left: "4rem"
                }, 0, "linear")
            $("#gz").animate({
                bottom: "4.8rem",
                left: "4.89rem"

            }, 1500, "linear")

            $("#gz").animate({
                bottom: "4.28rem",
                left: "3.98rem"
            }, 1500, "linear")
            $("#gz").animate({
                bottom: "3.43rem",
                left: "5.38rem"
            }, 2000, "linear",
            function(){
                ad4.loop=false;
                ad4.pause();
               
            })

            // })
            ac();
            setTimeout(() => {
                tag = false;
                console.log(tag);
                ac();
            }, 1500);
            setTimeout(() => {
                tag = true;
                console.log(tag);
                ac();
            }, 3000);
            setTimeout(() => {
                tin = false;
                no_4.style.display = "block";
                two_k(a31);
                two_k(a32);
                two_k(a34);
                two_k(a35);
                two_k(a36);
                two_k(a37);
                setTimeout(() => {
                    two(a31, "1.1rem", "0.9rem");
                    two(a32, "4.3rem", "4.1rem")
                }, 500);
                setTimeout(() => {
                    fu_dou_all(a32, a32_bottom);

                    two_p4.style.display = "none";
                    $(".bottom_two_p2").css("display","none");
                    two_p5.style.display = "block";
                    two(a34, "2.97rem", "2.77rem");
                    ad2.load();
                    ad2.play();
                }, 3000);
                setTimeout(() => {
                    two(a35, "-0.14rem", "-0.34rem")
                }, 3500);
                setTimeout(() => {
                    two(a36, "0.297rem", "0.097rem")
                }, 4000);
                setTimeout(() => {

                    two(a37, "-1.679rem", "-1.879rem")
                }, 4500);

                setTimeout(() => {
                    dian_four.style.display = "block";
                }, 7000);
            }, 4500);


            function ac() {
                if (tag) {
                    wan1();

                    function wan1() {
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz21.png');
                        }, 100);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz22.png');
                        }, 200);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz23.png');
                        }, 300);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz24.png');
                        }, 400);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz25.png');
                            if (tag == true && tin == true) {
                                wan1();
                            }
                        }, 500);
                    }
                } else {
                    wan2();

                    function wan2() {
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz31.png');
                        }, 100);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz32.png');
                        }, 200);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz33.png');
                        }, 300);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz34.png');
                        }, 400);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz35.png');
                            if (tag == false) {
                                wan2();
                            }
                        }, 500);
                    }
                }
            }
            dian_three.parentNode.removeChild(dian_three);
            $("#dian_three_bos").css("display","block");
        };

        dian_four.onclick = function () {
            var tag = true;
            var tin = true;
            ad4.load();
            ad4.play();
            // $(document).ready(function () {
                $("#gz").animate({
                    bottom: "3.43rem",
                left: "5.38rem"
    
                }, 0, "linear")
               
            $("#gz").animate({
                bottom: "2.74rem",
                left: "4.71rem"

            }, 800, "linear")

            $("#gz").animate({
                bottom: "2.28rem",
                left: "3.9rem"
            }, 1200, "linear")
            $("#gz").animate({
                bottom: "2.96rem",
                left: "3.18rem"
            }, 1500, "linear", 
            function(){
                ad4.loop=false;
                ad4.pause();
                ad3.play();
            })

            // })
            ac();
            setTimeout(() => {
                tag = false;
                console.log(tag);
                ac();
            }, 2000);
            setTimeout(() => {
                tin = false;
               
                setTimeout(() => {
                    $(a37).animate({
                        bottom: "-2.179rem"
                    }, 500)
                    $(a37).animate({
                        bottom: "-1rem"
                    }, 2000)
                    $("#gz").animate({
                        bottom: "2.66rem"
                    }, 500)
                    $("#gz").animate({
                        bottom: "3.9rem"
                    }, 2000)
                    setTimeout(() => {
                        bottom.style.backgroundPosition = "top";
                        for (var i = 0; i < down.length; i++) {
                            down_(down[i], "-6.5rem")
                        }
                    }, 1000);
                    
                    setTimeout(() => {
                        bottom_two.style.display = "none";
                        top.style.display = "block";
                        three_();
                    }, 4000);
                    tagT=false;

                }, 500);

            }, 3000);


            function ac() {
                if (tag) {
                    wan1();

                    function wan1() {
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz31.png');
                        }, 100);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz32.png');
                        }, 200);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz33.png');
                        }, 300);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz34.png');
                        }, 400);
                        setTimeout(() => {
                            $("#gz").attr('src', './geizi/gz35.png');
                            if (tag == true) {
                                wan1();
                            }
                        }, 500);

                    }
                } else {
                    wan2();

                    function wan2() {
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz2.png');
                        }, 100);
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz3.png');
                        }, 200);
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz4.png');
                        }, 300);
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz5.png');
                        }, 400);
                        setTimeout(() => {
                            $("#gz").attr('src', './img2/gz1.png');
                            if (tag == false && tin == true) {
                                wan2();
                            }
                        }, 500);
                    }
                }
            }
            dian_four.parentNode.removeChild(dian_four);
          
        };

        function one() {
            $(a20).animate({
                bottom: "-5.71rem"
            }, 0)
            $(a20).animate({
                bottom: "2rem",

            }, 3000)
            $(a27).animate({
                bottom: "-6.34rem"
            }, 0)
            $(a27).animate({
                bottom: "1.4rem",
            }, 3000)
            $(a38).animate({
                bottom: "-4.61rem"
            }, 0)
            $(a38).animate({
                bottom: "0.6rem",

            }, 3000)
            $(a33).animate({
                bottom: "-3.2rem"
            }, 0)
            $(a33).animate({
                bottom: "-0.5rem",

            }, 3000)

            $(a09).animate({
                bottom: "-6.91rem"
            }, 0)
            $(a08).animate({
                bottom: "-7.19rem"
            }, 0)
            setTimeout(() => {
                $(a08).animate({
                    bottom: "-2.99rem",
                }, 1000)
                $(a08).animate({
                    bottom: "-3.19rem",
                }, 500)
                ad2.play();
            }, 3500);

            setTimeout(() => {
                $(a09).animate({
                    bottom: "-2.71rem",
                }, 1000)
                $(a09).animate({
                    bottom: "-2.91rem",
                }, 500)
            }, 4000);

            $(a10).animate({
                bottom: "-7.36rem",
            }, 0)
            setTimeout(() => {
                $(a10).animate({
                    bottom: "-3.16rem",
                }, 1000)
                $(a10).animate({
                    bottom: "-3.36rem",
                }, 500)
            }, 4500);

            $(a11).animate({
                bottom: "-4.33rem",
            }, 0)
            setTimeout(() => {
                $(a11).animate({
                    bottom: "-0.13rem",
                }, 1000)
                $(a11).animate({
                    bottom: "-0.33rem",
                }, 500)
            }, 5000);

            $(a12).animate({
                bottom: "-3.63rem",
            }, 0)
            setTimeout(() => {
                $(a12).animate({
                    bottom: "0.57rem",
                }, 1000)
                $(a12).animate({
                    bottom: "0.37rem",
                }, 500)
            }, 5500);

            $(a13).animate({
                bottom: "-4.28rem",
            }, 0)
            setTimeout(() => {
                $(a13).animate({
                    bottom: "0.12rem",
                }, 1000)
                $(a13).animate({
                    bottom: "-0.08rem",
                }, 500)
            }, 6000);


            $(a14).animate({
                bottom: "-4.33rem",
            }, 0)

            setTimeout(() => {
                $(a14).animate({
                    bottom: "0.87rem",
                }, 1000)
                $(a14).animate({
                    bottom: "0.67rem",
                }, 500)

            }, 6200);

            setTimeout(() => {
                dian_one.style.display = "block";
                two_p1.style.display = "block";
                two_first_p.style.display = "none";
            }, 7700);
        }
        one();

        var fen_che = document.querySelector(".fc");

        function fc() {
            setTimeout(() => {
                $(fen_che).attr('src', 'img2/z18-b.png');
            }, 200);
            setTimeout(() => {
                $(fen_che).attr('src', 'img2/z18-c.png');
            }, 400);
            setTimeout(() => {
                $(fen_che).attr('src', 'img2/z18-a.png');
                if(tagT){
                fc();}
            }, 600);
        }
        fc();
        }
    
