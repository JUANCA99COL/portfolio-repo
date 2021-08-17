console.log('js');
$('#sec-nav').hide();
// $('.menu').hide();
$(document).ready(function(){

    $('.menu').click(function(){
      $('#sec-nav').toggle();
    });


  });


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
