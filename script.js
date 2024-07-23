document.addEventListener('scroll', function() {
    const homeImage = document.querySelector('#home .slide-image');
    const aboutImage = document.querySelector('#about .slide-image');
    const aboutSection = document.getElementById('about');
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (aboutPosition <= windowHeight / 2) {
        homeImage.style.opacity = '0';
        aboutImage.style.opacity = '1';
    } else {
        homeImage.style.opacity = '1';
        aboutImage.style.opacity = '0';
    }
});


document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

// About section tabs
document.querySelectorAll('.tablinks').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tabcontent').forEach(content => {
            content.style.display = 'none';
        });
        document.querySelector(`#${this.dataset.target}`).style.display = 'block';
    });
});

// Hide tab content initially
document.querySelectorAll('.tabcontent').forEach(content => {
    content.style.display = 'none';
});
