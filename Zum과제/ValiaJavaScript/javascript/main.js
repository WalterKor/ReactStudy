//사용변수
const GAME_TIME = 9;
let score = 0;
let time = GAME_TIME;
let isPalying = false;
let timeInterval;
let words = [];
let checkInterval;

const worldInput = document.querySelector('.word-input')
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init() {
    buttonChange('게임로딩중...')
    getWords(); //단어 리스트 가져오는거
    worldInput.addEventListener('input', checkMatch);
}

//게임실행
function run() {
    if(isPalying){
        return
    }
    isPalying = true;
    time = GAME_TIME;
    worldInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange('게임중')
};


function checkStatus(){
    if(isPalying && time === 0){
        buttonChange("게임시작")
        clearInterval(checkInterval);
    }
}

//단어 불러오기
function getWords() {
    axios.get('https://random-word-api.herokuapp.com/word?number=100')
    .then(function (response) {
        response.data.forEach((word)=>{
            if(word.length < 10){
                words.push(word);
            }
        })
        buttonChange('게임시작')
    })
    .catch(function (error) {
        
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}


//단어 일치체크
function checkMatch(){
    if(worldInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        worldInput.value = "";
        if(isPalying){
            return
        }
        score++;
        scoreDisplay.innerText = score;
        const ramdomIndex = Math.floor(Math.random()*words.length);
        wordDisplay.innerText = words[ramdomIndex]
    }
}


function countDown() {
    time > 0 ? time-- : isPalying == false;
    timeDisplay.innerHTML = time;
}

buttonChange('게임시작');


function buttonChange(text) {
    button.innerText = text;
    if(isPalying){
        clearInterval(timeInterval);
    }
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading')
}