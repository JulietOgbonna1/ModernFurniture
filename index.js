function toggleMenu() {
    const hamburger =
    document.querySelector('.menu');
    const options =
    document.querySelector('.options');

    hamburger.classList.toggle('active')
    options.classList.toggle('active')
}