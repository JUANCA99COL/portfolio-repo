// jquey functions 

// jquery functions 

  console.log("hello world");

  $(".sec-nav").hide();
  $( document ).ready(function() {
      console.log( "ready!" );

  $(".menu-btn").click(function(){
      // $(".sec-nav").delay( 800 );
      $(".sec-nav").toggle();
  });

  });


// ==========================================================
//	Nav scroll Animation
// ==========================================================

  $(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".navbar").css({"background-color":"black",
            
          });  

        }
        else{
            $(".navbar").css({"background-color":"",
            
          });
        }       
      })
    })


// ==========================================================
//	LOADER
// ==========================================================


  $(window).on("load",function(){
    $(".wrapper-loader").fadeOut("slow");
  });

// ==========================================================
//	HAMBURGER MENU
// ==========================================================


  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });




















  

