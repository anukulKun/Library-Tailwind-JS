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

document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".popup").classList.remove("opacity-0");
    document.querySelector(".popup").classList.add("opacity-100");
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup").classList.add("opacity-0");
    document.querySelector(".popup").classList.remove("opacity-100");
});
