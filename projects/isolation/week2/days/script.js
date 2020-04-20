var i = 0,images = ["../../assets/moon-2.jpg",
                        "../../assets/home-2.jpg",
                        "../../assets/purple-2.jpg",
                        "../../assets/ok-2.jpg",
                        "../../assets/yellow-2.jpg"];
                            
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
          