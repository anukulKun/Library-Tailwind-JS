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
document.addEventListener('DOMContentLoaded', (event) => {
    const showLoginButton = document.getElementById('.main');
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.close-btn');

    showLoginButton.addEventListener('click', () => {
        popup.style.opacity = '1';
        popup.style.pointerEvents = 'none'; // Enable pointer events
    });

    closeButton.addEventListener('click', () => {
        popup.style.opacity = '0';
        popup.style.pointerEvents = 'none'; // Disable pointer events
    });
});
