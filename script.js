const navbar = document.querySelector('#navbar');
const openbtn = document.querySelector('#openbtn');

openbtn.addEventListener('click', () => {
    navbar.classList.remove('hidden');
})
