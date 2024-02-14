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

function CreatePlayer(name, avatar, mark) {
    return {
        name,
        avatar,
        mark
    };
}

// Объект для хранения игровой доски

let btnNewGame = document.createElement('button');
btnNewGame.classList.add('newGame');
btnNewGame.textContent = 'new game';

let textFindWinner = document.createElement('p');
textFindWinner.classList.add('text-winner');
let container = document.querySelector('.section-btn-winText');

let sectionChange = document.querySelector('.change');
let changeTopic = document.querySelector('.change-topic');
let btnPlay = document.querySelector('.play');

let icon = document.querySelectorAll('.icon');

let changeDisplay = document.createElement('div');
changeDisplay.classList.add('change-display');

let countUser = 0;
let countEnemy = 1;

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function GameBoard() {
    

    let fragment = new DocumentFragment();

    // удаляем блок со сменой темы и добавляем сетку из квадратов

    const createNewBlockSquare = function () {

        btnPlay.addEventListener('click', function () {

            container.removeChild(btnPlay);
            container.appendChild(btnNewGame);
            sectionChange.removeChild(changeTopic);



            for (let i = 0; i < 9; i++) {
                let displaySquare = document.createElement('div');
                displaySquare.classList.add('display-square');
                displaySquare.addEventListener('click', () => {
                    if ((arr[0] === 1 && arr[1] === 1 && arr[2] === 1) ||
                        (arr[3] === 1 && arr[4] === 1 && arr[5] === 1) ||
                        (arr[6] === 1 && arr[7] === 1 && arr[8] === 1) ||
                        (arr[0] === 1 && arr[3] === 1 && arr[6] === 1) ||
                        (arr[1] === 1 && arr[4] === 1 && arr[7] === 1) ||
                        (arr[2] === 1 && arr[5] === 1 && arr[8] === 1) ||
                        (arr[0] === 1 && arr[4] === 1 && arr[8] === 1) ||
                        (arr[2] === 1 && arr[4] === 1 && arr[6] === 1)) {
                        textFindWinner.textContent = createPlayerUser.name + " win!";
                        container.insertBefore(textFindWinner, container.children[0]);

                    } else if ((arr[0] === 2 && arr[1] === 2 && arr[2] === 2) ||
                        (arr[3] === 2 && arr[4] === 2 && arr[5] === 2) ||
                        (arr[6] === 2 && arr[7] === 2 && arr[8] === 2) ||
                        (arr[0] === 2 && arr[3] === 2 && arr[6] === 2) ||
                        (arr[1] === 2 && arr[4] === 2 && arr[7] === 2) ||
                        (arr[2] === 2 && arr[5] === 2 && arr[8] === 2) ||
                        (arr[0] === 2 && arr[4] === 2 && arr[8] === 2) ||
                        (arr[2] === 2 && arr[4] === 2 && arr[6] === 2)) {
                        textFindWinner.textContent = "You're lost! " + createPlayerEnemy.name + " win";
                        container.insertBefore(textFindWinner, container.children[0]);
                    } else if (arr[i] == 0 && (countEnemy > countUser)) {
                        let userImg = document.createElement('img');
                        userImg.classList.add('icon');
                        userImg.src = markUser;
                        displaySquare.appendChild(userImg);
                        arr[i] = 1;
                        countUser += 1;
                    } else if (arr[i] == 0 && (countEnemy == countUser)) {
                        let enemyImg = document.createElement('img');
                        enemyImg.classList.add('icon');
                        enemyImg.src = markEnemy;
                        displaySquare.appendChild(enemyImg);
                        arr[i] = 2;
                        countEnemy += 1;
                    } else {
                        textFindWinner.textContent = createPlayerEnemy.name + " and " + createPlayerUser.name + " have a draw";
                        container.insertBefore(textFindWinner, container.children[0]);
                    }
                })
                fragment.appendChild(displaySquare);

            }
            changeDisplay.appendChild(fragment);
            sectionChange.insertBefore(changeDisplay, sectionChange.children[1]);

            
        });
        
    }
    

    return createNewBlockSquare();

}

btnNewGame.addEventListener('click', function () {
    window.location.reload();

})

// Объект для хранения игроков

// Пользователь первый

let createPlayerUser = CreatePlayer('', '', '');
let playerUser = document.querySelector('#inp-name');

let groupIconsUserAvatar = document.querySelector('.group-icons-user--avatar');
let groupIconsUserMark = document.querySelector('.group-icons-user--mark');
let astronaut = document.querySelector('.icon.icon-one')
let cat = document.querySelector('.icon.icon-two');
let rocket = document.querySelector('.icon.icon-three');
let comet = document.querySelector('.icon.icon-four');

let avatarUser = '';
let markUser = '';



function getPlayerUser() {

    const changeImagesOnColorUser = function () {
        astronaut.addEventListener('click', function () {
            astronaut.src = "img/" + '1' + ".svg";
            cat.src = "img/white" + '2' + ".svg";
            avatarUser = astronaut.src;

        })
        cat.addEventListener('click', function () {
            cat.src = "img/" + '2' + ".svg";
            astronaut.src = "img/white" + '1' + ".svg";
            avatarUser = cat.src;

        })
        rocket.addEventListener('click', function () {
            rocket.src = "img/" + '3' + ".svg";
            comet.src = "img/white" + '4' + ".svg";
            markUser = rocket.src;

        })
        comet.addEventListener('click', function () {
            comet.src = "img/" + '4' + ".svg";
            rocket.src = "img/white" + '3' + ".svg";
            markUser = comet.src;

        })

    }

    const getNameAvatarMarkUser = function () {

        btnPlay.addEventListener('click', () => {
            createPlayerUser.name = playerUser.value;
            createPlayerUser.avatar = avatarUser;
            createPlayerUser.mark = markUser;

            if (astronaut.src != avatarUser) {
                groupIconsUserAvatar.removeChild(astronaut);
            } else if (cat.src != avatarUser) {
                groupIconsUserAvatar.removeChild(cat);
            }

            if (rocket.src != markUser) {
                groupIconsUserMark.removeChild(rocket);
            } else if (comet.src != markUser) {
                groupIconsUserMark.removeChild(comet);
            }
        })
    }

    return changeImagesOnColorUser(), getNameAvatarMarkUser();

}



// Пользователь второй

let createPlayerEnemy = CreatePlayer('', '', '');
let playerEnemy = document.querySelector('#inp-user');

let groupIconsEnemyAvatar = document.querySelector('.group-icons-enemy--avatar');
let groupIconsEnemyMark = document.querySelector('.group-icons-enemy--mark');
let unicorn = document.querySelector('.icon-five')
let cowboy = document.querySelector('.icon-six');
let asteroid = document.querySelector('.icon-seven');
let star = document.querySelector('.icon-eight');

let avatarEnemy = '';
let markEnemy = '';

function getPlayerEnemy() {
    const changeImagesOnColorEnemy = function () {
        unicorn.addEventListener('click', function () {
            unicorn.src = "img/" + '5' + ".svg";
            cowboy.src = "img/white" + '6' + ".svg";
            avatarEnemy = unicorn.src;

        })
        cowboy.addEventListener('click', function () {
            cowboy.src = "img/" + '6' + ".svg";
            unicorn.src = "img/white" + '5' + ".svg";
            avatarEnemy = cowboy.src;

        })
        asteroid.addEventListener('click', function () {
            asteroid.src = "img/" + '7' + ".svg";
            star.src = "img/white" + '8' + ".svg";
            markEnemy = asteroid.src;

        })
        star.addEventListener('click', function () {
            star.src = "img/" + '8' + ".svg";
            asteroid.src = "img/white" + '7' + ".svg";
            markEnemy = star.src;

        })
    }

    const getNameAvatarMarkEnemy = function () {
        btnPlay.addEventListener('click', () => {
            createPlayerEnemy.name = playerEnemy.value;
            createPlayerEnemy.avatar = avatarEnemy;
            createPlayerEnemy.mark = markEnemy;

            if (unicorn.src != avatarEnemy) {
                groupIconsEnemyAvatar.removeChild(unicorn);
            } else if (cowboy.src != avatarEnemy) {
                groupIconsEnemyAvatar.removeChild(cowboy);
            }

            if (asteroid.src != markEnemy) {
                groupIconsEnemyMark.removeChild(asteroid);
            } else if (star.src != markEnemy) {
                groupIconsEnemyMark.removeChild(star);
            }
        })
    }
    return changeImagesOnColorEnemy(), getNameAvatarMarkEnemy();
}









// Объект для хранения хода игры



function TheCourseOfTheGame() {

}




GameBoard();
getPlayerUser();
getPlayerEnemy();
TheCourseOfTheGame();
getNewGameUser();