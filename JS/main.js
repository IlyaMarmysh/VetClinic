const container = document.getElementById('swiper-container');
const pagination = document.getElementById('Pagination');
if (container) {
    slider.forEach(person => {
        // Создаем элемент для каждого человека
        const sliderDiv = document.createElement('div');
        sliderDiv.className = 'swiper-slide';
        const pTag = document.createElement('p');
        const textWithNewLines = person.span;
        const formattedText = textWithNewLines.replace(/\n/g, '<br>');
        pTag.innerHTML = formattedText;
        sliderDiv.appendChild(pTag);
        const buttonTag = document.createElement('button');
        buttonTag.id = 'active-button'
        buttonTag.onclick = () => activeButton();
        buttonTag.textContent = `ЗАПИСАТЬСЯ`;
        buttonTag.className = 'header__content__button';
        sliderDiv.appendChild(buttonTag);
        sliderDiv.style.backgroundImage = `url(Image/slider/${person.image}.png)`;
        container.appendChild(sliderDiv);
        const liTag = document.createElement('li');
        liTag.className = 'pagination__ul__li';
        liTag.textContent = `${person.image}`;
        liTag.onclick = () => goToSlide(person.image - 1);
        pagination.appendChild(liTag);
    });
} else {
    console.error('Контейнер не найден');
};

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.swiper-slide');
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;

    // Удаляем класс 'active' у всех слайдов и добавляем только к текущему
    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    updatePagination();
}
function goToSlide(index) {
    showSlide(index);
}
function activeButton() {
    const activeButton = document.getElementById('active-button');
    activeButton.classList.add('active');
}
function updatePagination() {
    const dots = document.querySelectorAll('.pagination__ul__li');
    dots.forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
showSlide(currentSlide);

setInterval(nextSlide, 5000);


const cardWrapper = document.getElementById('card-wrapper');
if (cardWrapper) {
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        const cardSVG = `${card.image}`
        cardDiv.innerHTML = cardSVG;
        const cardPTag = document.createElement('p');
        cardPTag.innerText = `${card.span}`;
        cardDiv.appendChild(cardPTag);
        const cardATag = document.createElement('a');
        cardATag.innerText = `${card.h2}`;
        cardDiv.appendChild(cardATag);
        cardDiv.appendChild(cardPTag);
        cardWrapper.appendChild(cardDiv);
    });
} else {
    console.error('Контейнер не найден');
};

