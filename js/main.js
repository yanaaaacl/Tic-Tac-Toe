// Кнопки для смены фонового изображения 

let topicOne = document.querySelector('.btn-topic-one');
let topicTwo = document.querySelector('.btn-topic-two');
let topicThree = document.querySelector('.btn-topic-three');
let topicFour = document.querySelector('.btn-topic-four');
let bodyies = document.body;

topicOne.addEventListener('click', function () {
    bodyies.style.backgroundImage = "url(./img/back-img-two.jpg)";
})

topicTwo.addEventListener('click', function () {
    bodyies.style.backgroundImage = "url(./img/back-img-three.jpg)";
})

topicThree.addEventListener('click', function () {
    bodyies.style.backgroundImage = "url(./img/back-img-four.jpg)";
})

topicFour.addEventListener('click', function () {
    bodyies.style.backgroundImage = "url(./img/back-img-five.jpg)";
})


// удаляем блок со сменой темы и добавляем сетку из квадратов
let sectionChange = document.querySelector('.change');
let changeTopic = document.querySelector('.change-topic');
let btnPlay = document.querySelector('.play');

let changeDisplay = document.createElement('div');
changeDisplay.classList.add('change-display');



let fragment = new DocumentFragment();


btnPlay.addEventListener('click', function () {
    sectionChange.removeChild(changeTopic);
    for (let i = 0; i < 9; i++) {
        let displaySquare = document.createElement('div');
        displaySquare.classList.add('display-square');
        fragment.appendChild(displaySquare);
    }
    changeDisplay.appendChild(fragment);
    sectionChange.insertBefore(changeDisplay, sectionChange.children[1]);

});
