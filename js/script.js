console.log('hello');


// ==========================================================
//	Nav Animation
// ==========================================================


  /* Open */
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


// ==========================================================
//	Nav scroll Animation
// ==========================================================

  $(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".navbar").css({"background-color":"white"});   
        }
        else{
            $(".navbar").css({"background-color":""});
        }

    })
  })


// ==========================================================
//	LOADER
// ==========================================================


  $(window).on("load",function(){
    $(".wrapper-loader").fadeOut("slow");
  });













  

