// const initSlider = () => {
//     const imageList = document.querySelector(".image-list");
//     const slideButtons = document.querySelectorAll(".side-button");

//     slideButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const direction = button.id === " prev-slide" ? -1 : 1 ;
//             const scrollAmount = imageList.clientWidth*direction;
//             imageList.scrollBy({
//                 left:scrollAmount , behaviour: "smooth"
//             });
//         });
    
        
//     });

// }

// window.addEventListener("load", initSlider);




// const check = () => {

//     document.querySelector("#show-login").addEventListener("click", () => {

//     document.querySelector(".popup").classList.remove("hidden");
//      document.querySelector(".popup").style.background = "red";

//     document.querySelector(".close-btn").addEventListener("click", () => {
//     document.querySelector(".popup").classList.add("hidden");

//     })
  
   
//     })
    

//     document.querySelector("#show-login1").addEventListener("click", () => {

        
//         document.querySelector(".popup2").classList.remove("hidden");
        
//         document.querySelector(".close-btn1").addEventListener("click", () => {
//         document.querySelector(".popup2").classList.add("hidden");
    
//         })
       
       
//         })
        

//     document.querySelector(".hello").addEventListener("click", () => {

      
      
//         document.querySelector(".popup3").classList.remove("hidden");
         
    
//         document.querySelector(".close-btn3").addEventListener("click", () => {
//         document.querySelector(".popup3").classList.add("hidden");
    
//         })
       
//         })

     
// };


// check();


document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#show-find").addEventListener("click", () => {
        document.querySelector(".popup").classList.remove("hidden");
    });
    document.querySelector(".close-btn").addEventListener("click", () => {
        document.querySelector(".popup").classList.add("hidden");
    });

    document.querySelector("#show-add").addEventListener("click", () => {
        document.querySelector(".popup2").classList.remove("hidden");
    });
    document.querySelector(".close-btn1").addEventListener("click", () => {
        document.querySelector(".popup2").classList.add("hidden");
    });

    document.querySelector(".hello").addEventListener("click", () => {
        document.querySelector(".popup3").classList.remove("hidden");
    });
    document.querySelector(".close-btn3").addEventListener("click", () => {
        document.querySelector(".popup3").classList.add("hidden");
    });
});



document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#show-find").addEventListener("click", () => {
        document.querySelector(".right_div1").classList.add("hidden");
    });
    document.querySelector("#show-find1").addEventListener("click", () => {
        document.querySelector(".right_div2").classList.add("hidden");
    });
    document.querySelector(".imma").addEventListener("click", () => {
        document.querySelector(".right_div1").classList.remove("hidden");
        
    });
    document.querySelector(".imma").addEventListener("click", () => {
        document.querySelector(".right_div2").classList.remove("hidden");
    });
    

   
});
