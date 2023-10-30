

hamburger = document.querySelector(".hamburger");
            hamburger.onclick = function (){
                navbar = document.querySelector(".navbar");
                navbar.classList.toggle("active");
            }
            
            
            var swiper = new Swiper(".mySwiper", {
              slidesPerView: 2,
              spaceBetween: 30,
              loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                0:{
                  slidesPerView: 1,
                },
                768:{
                  slidesPerView: 2,
                },
              }
            });

         

          