const mainContent = document.querySelector('.main_content');
const thankContent = document.querySelector('.thank_content');
const rate = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate_again');

submitButton.addEventListener('click', () => {
    thankContent.classList.remove('hidden');
    mainContent.style.display = 'none';
})

rateAgain.addEventListener('click', () => {
    thankContent.classList.add('hidden');
    mainContent.style.display = 'block';
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})

