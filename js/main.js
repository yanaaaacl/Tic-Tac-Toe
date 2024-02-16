function CreatePlayer() {
    let name;
    let mark;
    let avatar;

    function getPlayer(name, avatar, mark) {
        this.name = name;
        this.avatar = avatar;
        this.mark = mark;

        let player = document.querySelector(this.name);
        let groupIconsAvatar = document.querySelector(this.avatar);
        let groupIconsMark = document.querySelector(this.mark);

        let createInter = CreateInterface();

        const getNameAvatarMarkUser = function () {

            createInter.btnPlay.addEventListener('click', () => {

                if (astronaut.src != avatar) {
                    groupIconsAvatar.removeChild(astronaut);
                } else if (cat.src != avatar) {
                    groupIconsAvatar.removeChild(cat);
                }

                if (rocket.src != mark) {
                    groupIconsMark.removeChild(rocket);
                } else if (comet.src != mark) {
                    groupIconsMark.removeChild(comet);
                }
            })
        }

        return getNameAvatarMarkUser();
    }

    return {
        name,
        avatar,
        mark,
        getPlayer
    };
}

function CreateInterface() {
    let btnPlay = document.querySelector('.play');

    let playerButtons = document.querySelector('.buttons-players');

    let sectionChange = document.querySelector('.change');
    let changeTopic = document.querySelector('.change-topic');

    let container = document.querySelector('.section-btn-winText');

    let btnNewGame = document.createElement('button');
    btnNewGame.classList.add('newGame');
    btnNewGame.textContent = 'new game';

    const removeChangeBackImg = () => {
        btnPlay.addEventListener('click', () => {
            sectionChange.removeChild(changeTopic);
            playerButtons.style.display = 'none';

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

let createPlayerComputer = CreatePlayer('', '', '');

let dart = document.querySelector('.icon-nine')
let cowboyTwo = document.querySelector('.icon-ten');
let sword = document.querySelector('.icon-eleven');
let swordTwo = document.querySelector('.icon-twelve');

let avatarComp = '';
let markComp = '';

function ChangeAvatarAndMarkComp() {
    let changeImgAuto = getButtons();
    let arr1 = [dart, cowboyTwo];
    let arr2 = [sword, swordTwo];
    const changeImagesOnColorComp = function () {
        changeImgAuto.btnPlayComp.addEventListener('click', function () {
            let randomAvatar = Math.floor(Math.random() * arr1.length);
            console.log(randomAvatar);
            if (randomAvatar == 0) {
                dart.src = "img/" + '9' + ".svg";
                avatarComp = dart.src;
            } else if (randomAvatar == 1) {
                cowboyTwo.src = "img/" + '10' + ".svg";
                avatarComp = cowboyTwo.src;
            }
            let randomMark = Math.floor(Math.random() * arr2.length);
            if (randomMark == 0) {
                sword.src = "img/" + '11' + ".svg";
                markComp = sword.src;
            } else if (randomMark == 1) {
                swordTwo.src = "img/" + '12' + ".svg";
                markComp = swordTwo.src;
            }

        })
    }
    return changeImagesOnColorComp();
}

function getPlayerComp() {

    let playerComp = document.querySelector('#inp-computer');

    let groupIconsCompAvatar = document.querySelector('.group-icons-computer--avatar');
    let groupIconsCompMark = document.querySelector('.group-icons-computer--mark');

    let createInter = CreateInterface();

    const getNameAvatarMarkComp = function () {
        createInter.btnPlay.addEventListener('click', () => {
            createPlayerComputer.name = playerComp.value;
            createPlayerComputer.avatar = avatarComp;
            createPlayerComputer.mark = markComp;

            if (dart.src != avatarComp) {
                groupIconsCompAvatar.removeChild(dart);
            } else if (cowboyTwo.src != avatarComp) {
                groupIconsCompAvatar.removeChild(cowboyTwo);
            }

            if (sword.src != markComp) {
                groupIconsCompMark.removeChild(sword);
            } else if (swordTwo.src != markComp) {
                groupIconsCompMark.removeChild(swordTwo);
            }
        })
    }
    return getNameAvatarMarkComp();
}

function getButtons() {
    let btnPlayUser = document.querySelector('.player-user');
    let btnPlayComp = document.querySelector('.player-computer');
    let changeComp = document.querySelector('.change-computer');
    let changeUs = document.querySelector('.change-user');
    let textBtnComp = btnPlayUser.textContent;
    return { textBtnComp, btnPlayUser, btnPlayComp, changeComp, changeUs };
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
                gameController.displaySquares[i] = document.createElement('div');
                gameController.displaySquares[i].classList.add('display-square');
                gameController.displaySquares[i].addEventListener('click', () => {
                    if (!gameController.gameWasEnd) {
                        PlayerMove(gameController.playerNumber, i, gameController.displaySquares[i], gameController);
                        gameController.checkEndGame();
                        gameController.playerNumber = (gameController.playerNumber == 1) ? 2 : 1;
                        if (gameController.createGetButtons.textBtnComp == 'With Computer') {
                            ComputerMove(gameController)
                            gameController.checkEndGame();
                            gameController.playerNumber = (gameController.playerNumber == 1) ? 2 : 1;
                        }
                    }
                })
                fragment.appendChild(gameController.displaySquares[i]);
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
    let createGetButtons = getButtons();
    createGetButtons.btnPlayComp.addEventListener('click', function () {
        createGetButtons.textBtnComp = createGetButtons.btnPlayComp.textContent;
        createGetButtons.changeComp.style.display = 'block';
        createGetButtons.changeUs.style.display = 'none';
    })
    createGetButtons.btnPlayUser.addEventListener('click', function () {
        createGetButtons.textBtnComp = createGetButtons.btnPlayUser.textContent;
        createGetButtons.changeComp.style.display = 'none';
        createGetButtons.changeUs.style.display = 'block';
    })

    let gameWasEnd = false;
    let playerNumber = 1;
    let field = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let displaySquares = [null,null,null,null,null,null,null,null,null]

    function checkEndGame() {
        for(let i = 1; i <= 2; i++) {
            if (
                (this.field[0] === i && this.field[1] === i && this.field[2] === i) ||
                (this.field[3] === i && this.field[4] === i && this.field[5] === i) ||
                (this.field[6] === i && this.field[7] === i && this.field[8] === i) ||
                (this.field[0] === i && this.field[3] === i && this.field[6] === i) ||
                (this.field[1] === i && this.field[4] === i && this.field[7] === i) ||
                (this.field[2] === i && this.field[5] === i && this.field[8] === i) ||
                (this.field[0] === i && this.field[4] === i && this.field[8] === i) ||
                (this.field[2] === i && this.field[4] === i && this.field[6] === i)) {
                if (i == 1) {
                    textFindWinner.textContent = createPlayerUser.name + " win!";
                    createInter.container.insertBefore(textFindWinner, createInter.container.children[0]);
                }
                else if (i == 2 && createGetButtons.textBtnComp == 'With Friend') {
                    textFindWinner.textContent = "You're lost! " + createPlayerEnemy.name + " win";
                    createInter.container.insertBefore(textFindWinner, createInter.container.children[0]);
                }
                else if (i == 2 && createGetButtons.textBtnComp == 'With Computer') {
                    textFindWinner.textContent = "You're lost! " + createPlayerComputer.name + " win";
                    createInter.container.insertBefore(textFindWinner, createInter.container.children[0]);
                }
                this.gameWasEnd = true;
        }
        let zero = 0;
        for (let i = 0; i < 9; i++) {
            if (this.field[i] == 0) {
                zero++
            }
        }
        if (zero == 0 && createGetButtons.textBtnComp == 'With Friend') {
            textFindWinner.textContent = createPlayerEnemy.name + " and " + createPlayerUser.name + " have a draw";
            createInter.container.insertBefore(textFindWinner, createInter.container.children[0]);
            this.gameWasEnd = true;
        } else if (zero == 0 && createGetButtons.textBtnComp == 'With Computer') {
            textFindWinner.textContent = createPlayerComputer.name + " and " + createPlayerUser.name + " have a draw";
            createInter.container.insertBefore(textFindWinner, createInter.container.children[0]);
            this.gameWasEnd = true;
        }
        }
    }

    return ({ gameWasEnd, playerNumber, field, checkEndGame, textFindWinner, createGetButtons, displaySquares });
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


    } else if (playerNumber == 2 && gameController.createGetButtons.textBtnComp == 'With Friend') {
        Img.src = markEnemy;
        gameController.field[square_number] = 2;
        countEnemy += 1;

    }
    displaySquare.appendChild(Img);
}


function ComputerMove(gameController) {
    if (gameController.gameWasEnd) {
        return;
    }

    let randSquare = -1;
    do {
        randSquare = Math.floor(Math.random() * 9)
        console.log(randSquare)
        console.log(gameController.field[randSquare])
    } while(gameController.field[randSquare] != 0)

    let Img = document.createElement('img');
    Img.classList.add('icon');
    Img.src = markComp;
    gameController.field[randSquare] = 2;
    countEnemy += 1;
    gameController.displaySquares[randSquare].appendChild(Img);
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
getPlayerUser();
getPlayerEnemy();
ChangeAvatarAndMarkUser();
ChangeAvatarAndMarkEnemy();
getButtons();
ChangeAvatarAndMarkComp();
getPlayerComp();