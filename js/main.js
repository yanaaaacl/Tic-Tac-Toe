
function CreatePlayer(name, avatar, mark) {
    return {
        name,
        avatar,
        mark
    };
}

function CreateInterface() {
    let btnPlay = document.querySelector('.play');

    let sectionChange = document.querySelector('.change');
    let changeTopic = document.querySelector('.change-topic');

    let container = document.querySelector('.section-btn-winText');

    let btnNewGame = document.createElement('button');
    btnNewGame.classList.add('newGame');
    btnNewGame.textContent = 'new game';

    const removeChangeBackImg = () => {
        btnPlay.addEventListener('click', () => {
            sectionChange.removeChild(changeTopic);
        })
    }

    const changeButton = () => {
        btnPlay.addEventListener('click', () => {
            container.removeChild(btnPlay);
            container.appendChild(btnNewGame);
        })
    }

    const clearGame = () => {
        btnNewGame.addEventListener('click', () => {
            window.location.reload();
        })
    }

    return removeChangeBackImg(), changeButton(), clearGame(), { btnPlay, sectionChange, container };
}

let createPlayerUser = CreatePlayer('', '', '');

let astronaut = document.querySelector('.icon.icon-one')
let cat = document.querySelector('.icon.icon-two');
let rocket = document.querySelector('.icon.icon-three');
let comet = document.querySelector('.icon.icon-four');

let avatarUser = '';
let markUser = '';

function ChangeAvatarAndMarkUser() {

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

    return changeImagesOnColorUser();

}


function getPlayerUser() {

    let playerUser = document.querySelector('#inp-name');

    let groupIconsUserAvatar = document.querySelector('.group-icons-user--avatar');
    let groupIconsUserMark = document.querySelector('.group-icons-user--mark');

    let createInter = CreateInterface();

    const getNameAvatarMarkUser = function () {

        createInter.btnPlay.addEventListener('click', () => {
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

    return getNameAvatarMarkUser();

}

let createPlayerEnemy = CreatePlayer('', '', '');

let unicorn = document.querySelector('.icon-five')
let cowboy = document.querySelector('.icon-six');
let asteroid = document.querySelector('.icon-seven');
let star = document.querySelector('.icon-eight');

let avatarEnemy = '';
let markEnemy = '';

function ChangeAvatarAndMarkEnemy() {
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
    return changeImagesOnColorEnemy();
}

function getPlayerEnemy() {

    let playerEnemy = document.querySelector('#inp-user');

    let groupIconsEnemyAvatar = document.querySelector('.group-icons-enemy--avatar');
    let groupIconsEnemyMark = document.querySelector('.group-icons-enemy--mark');

    let createInter = CreateInterface();

    const getNameAvatarMarkEnemy = function () {
        createInter.btnPlay.addEventListener('click', () => {
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
    return getNameAvatarMarkEnemy();
}

function GameBoard() {

    let createInter = CreateInterface();
    let gameController = TheCourseOfTheGame();
    let changeDisplay = document.createElement('div');
    changeDisplay.classList.add('change-display');

    let fragment = new DocumentFragment();


    const createNewBlockSquare = () => {
        createInter.btnPlay.addEventListener('click', () => {
           
            for (let i = 0; i < 9; i++) {
                let displaySquare = document.createElement('div');
                displaySquare.classList.add('display-square');
                displaySquare.addEventListener('click', () => {
                    if (!gameController.gameWasEnd) {
                        PlayerMove(gameController.playerNumber, i, displaySquare, gameController);
                        gameController.checkEndGame();
                        gameController.playerNumber = (gameController.playerNumber == 1) ? 2 : 1
                    }
                })
                fragment.appendChild(displaySquare);
            }
            changeDisplay.appendChild(fragment);
            createInter.sectionChange.insertBefore(changeDisplay, createInter.sectionChange.children[1]);

        })

    }

    return createNewBlockSquare();

}



function TheCourseOfTheGame() {
    let textFindWinner = document.createElement('p');
    textFindWinner.classList.add('text-winner');

    let createInter = CreateInterface();

    let gameWasEnd = false;
    let playerNumber = 1;
    let field = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    let checkEndGame = () => {
        if (
            (this.field[0] === playerNumber && this.field[1] === playerNumber && this.field[2] === playerNumber) ||
            (this.field[3] === playerNumber && this.field[4] === playerNumber && this.field[5] === playerNumber) ||
            (this.field[6] === playerNumber && this.field[7] === playerNumber && this.field[8] === playerNumber) ||
            (this.field[0] === playerNumber && this.field[3] === playerNumber && this.field[6] === playerNumber) ||
            (this.field[1] === playerNumber && this.field[4] === playerNumber && this.field[7] === playerNumber) ||
            (this.field[2] === playerNumber && this.field[5] === playerNumber && this.field[8] === playerNumber) ||
            (this.field[0] === playerNumber && this.field[4] === playerNumber && this.field[8] === playerNumber) ||
            (this.field[2] === playerNumber && this.field[4] === playerNumber && this.field[6] === playerNumber)) {
            if (playerNumber == 1) {
                textFindWinner.textContent = createPlayerUser.name + " win!";
                createInter.container.insertBefore(textFindWinner, createInter.container.children[0]);
            }
            else {
                textFindWinner.textContent = "You're lost! " + createPlayerEnemy.name + " win";
                createInter.container.insertBefore(textFindWinner, createInter.container.children[0]);
            }
            gameWasEnd = true;
        } else {
            let zero = 0;
            for (let i = 0; i < 9; i++) {
                if (this.field[i] == 0) {
                    zero++
                }
            }
            if (zero == 0) {
                textFindWinner.textContent = createPlayerEnemy.name + " and " + createPlayerUser.name + " have a draw";
                createInter.container.insertBefore(textFindWinner, createInter.container.children[0]);
                this.gameWasEnd = true;
            }
        }
    }

    return({gameWasEnd, playerNumber, field, checkEndGame});
}

let countUser = 0;
let countEnemy = 1;

function PlayerMove(playerNumber, square_number, displaySquare, gameController) {
    if (gameController.field[square_number] != 0) {
        return;
    }

    let Img = document.createElement('img');
    Img.classList.add('icon');
    if (playerNumber == 1) {
        Img.src = markUser;
        gameController.field[square_number] = 1;
        countUser += 1;
    } else if (playerNumber == 2) {
        Img.src = markEnemy;
        gameController.field[square_number] = 2;
        countEnemy += 1;
    }
    displaySquare.appendChild(Img);
}



function changeBackImg() {
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
}

CreateInterface();
changeBackImg();
GameBoard();
ChangeAvatarAndMarkUser()
getPlayerUser();
ChangeAvatarAndMarkEnemy()
getPlayerEnemy();
TheCourseOfTheGame();
