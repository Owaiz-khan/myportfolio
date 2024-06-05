

$(document).ready(function(){
  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $(".navbar").addClass("sticky");
      $(".navbar .logo").addClass("sticky");
      $(".menu .content").addClass("sticky");
      $(".menu-btn").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
      $(".navbar .logo").removeClass("sticky");
      $(".navbar .content").removeClass("sticky");
      $(".menu-btn").removeClass("sticky");
    }
    if(this.scrollY > 500){
       $(".scroll-up-btn").addClass("show");
    }else{
       $(".scroll-up-btn").removeClass("show");
    }
  });

  //slideup script
  $('.scroll-up-btn').click(function(){

  $('html').animate({scrollTop: 0})
  })
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  }); 

  //typing script js
  var typed = new Typed(".typing",{
    strings: ["Software Developer","Web Developer","Java Developer","Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
  })
   var typed = new Typed(".typing2", {
     strings: ["a Software Developer", "a Web Developer","a Java Developer","a Designer"],
     typeSpeed: 100,
     backSpeed: 60,
     loop: true,
   });
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 782,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:true,
        },
      },
    
          ],
  });
});

});
