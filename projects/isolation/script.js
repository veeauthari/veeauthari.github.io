var i = 0,images = ["assets/black-2.jpg",
                        "assets/white-2.jpg",
                        "assets/red-mockup-2.jpg",
                        "assets/sun-mockup-2.jpg",
                        "assets/pink-mockup-2.jpg"];
                            
          function mySlide(param)
          {
              if(param === 'next')
              {
                  i++;
                  if(i === images.length){ i = images.length - 1; }
              }else{
                  i--;
                  if(i < 0){ i = 0; }
              }
              
              document.getElementById('slide').src = images[i];
          }
          