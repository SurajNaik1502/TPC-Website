let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let totalSlides = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > totalSlides - 3) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";  
    slides[slideIndex + 1].style.display = "block";  
    slides[slideIndex + 2].style.display = "block";  
    setTimeout(showSlides, 1000); // Change image every 3 seconds
}
