const musics = [
    "비를 부르는 사나이",
    "내가 죽으려고 생각한 것은",
    "미래가 되지 못한 그 밤에",
    "이름",
    "원룸 서사시",
    "피아노 도둑",
    "벚꽃",
    "소년소녀",
    "Lifestar vista",
    "쌓기 놀이",
    "미래 만들기(あまざらし)",
    "지네",
    "쏙독새의 별",
    "첫눈",
    "어둠 속, 떠나 돌아오지 못하다",
    "계절은 차례차례 죽어간다",
    "어느 반짝임",
    "자학가 앨리",
    "스피드와 마찰",
    "감기",
    "생명에 걸맞아",
    "유령",
    "셈노래"
];
//맞춘 노래 제목 넣는 배열
let tempMusics = [];

//하이라이트용
const audioFiles = [
    "../musics/Ameotoko.mp3",
    "../musics/Bokuga Shinouto Omottanoha.mp3",
    "../musics/Miraini Narenakatta Ano Yoruni.mp3",
    "../musics/Namae.mp3",
    "../musics/Oneroom Zyozishi.mp3",
    "../musics/Piano dorobou.mp3",
    "../musics/Sakura.mp3",
    "../musics/Shounen Shoujo.mp3"
];

//0.1초 듣기용
const audioFiles2_1 = [
    "../musics/part2/Ameotoko (mp3cut.net).mp3",
    "../musics/part2/Bokuga Shinouto Omottanoha (mp3cut.net).mp3",
    "../musics/part2/Miraini Narenakatta Ano Yoruni (mp3cut.net).mp3",
    "../musics/part2/Namae (mp3cut.net).mp3",
    "../musics/part2/Oneroom Zyozishi (mp3cut.net).mp3",
    "../musics/part2/Piano dorobou (mp3cut.net).mp3",
    "../musics/part2/Sakura (mp3cut.net).mp3",
    "../musics/part2/Shounen Shoujo (mp3cut.net).mp3",
    "../musics/part2/lifestar vista (mp3cut.net).mp3",
    "../musics/part2/tsumiki (mp3cut.net).mp3",
    "../musics/part2/Miraizukuri(あまざらし) (mp3cut.net).mp3",
    "../musics/part2/Mukade (mp3cut.net).mp3",
    "../musics/part2/Yodakano hoshi (mp3cut.net).mp3",
    "../musics/part2/Hatsuyuki (mp3cut.net).mp3",
    "../musics/part2/Yamino naka yukite kaeranu (mp3cut.net).mp3",
    "../musics/part2/Kisetsu Wa Tsugitsugi Shindeiku (mp3cut.net).mp3",
    "../musics/part2/Aru kagayaki (mp3cut.net).mp3",
    "../musics/part2/Jigyakukano arii (mp3cut.net).mp3",
    "../musics/part2/Speed To Masatsu (mp3cut.net).mp3",
    "../musics/part2/Kaze (mp3cut.net).mp3",
    "../musics/part2/Inochini Fusawashii (mp3cut.net).mp3",
    "../musics/part2/Yurei (mp3cut.net).mp3",
    "../musics/part2/Kazoeuta (mp3cut.net).mp3"
];
//맞춘 노래 파일 넣는 배열
let tempAudioFiles2_1 = [];

//0.1초 정답 공개용
const audioFiles2_2 = [
    "../musics/part2/Ameotoko (mp3cut.net) (1).mp3",
    "../musics/part2/Bokuga Shinouto Omottanoha (mp3cut.net) (1).mp3",
    "../musics/part2/Miraini Narenakatta Ano Yoruni (mp3cut.net) (1).mp3",
    "../musics/part2/Namae (mp3cut.net) (1).mp3",
    "../musics/part2/Oneroom Zyozishi (mp3cut.net) (1).mp3",
    "../musics/part2/Piano dorobou (mp3cut.net) (1).mp3",
    "../musics/part2/Sakura (mp3cut.net) (1).mp3",
    "../musics/part2/Shounen Shoujo (mp3cut.net) (1).mp3",
    "../musics/part2/lifestar vista (mp3cut.net) (1).mp3",
    "../musics/part2/tsumiki (mp3cut.net) (1).mp3",
    "../musics/part2/Miraizukuri(あまざらし) (mp3cut.net) (1).mp3",
    "../musics/part2/Mukade (mp3cut.net) (1).mp3",
    "../musics/part2/Yodakano hoshi (mp3cut.net) (1).mp3",
    "../musics/part2/Hatsuyuki (mp3cut.net) (1).mp3",
    "../musics/part2/Yamino naka yukite kaeranu (mp3cut.net) (1).mp3",
    "../musics/part2/Kisetsu Wa Tsugitsugi Shindeiku (mp3cut.net) (1).mp3",
    "../musics/part2/Aru kagayaki (mp3cut.net) (1).mp3",
    "../musics/part2/Jigyakukano arii (mp3cut.net) (1).mp3",
    "../musics/part2/Speed To Masatsu (mp3cut.net) (1).mp3",
    "../musics/part2/Kaze (mp3cut.net) (1).mp3",
    "../musics/part2/Inochini Fusawashii (mp3cut.net) (1).mp3",
    "../musics/part2/Yurei (mp3cut.net) (1).mp3",
    "../musics/part2/Kazoeuta (mp3cut.net) (1).mp3"
]
//정답 공개용 노래 파일 넣는 배열
let tempAudioFiles2_2 = [];

//무작위 인덱스 선택 함수
function RandomElement(arr){
    let arrLength = arr.length;
    let randomIndex = Math.floor(Math.random() * arrLength);
    let randomElement = arr[randomIndex];

    return [randomIndex, randomElement];
}

//정답 랜덤으로 넣는 함수(사용 안하고 있음)
function RandomCorrect(arr, randomIndex){
    let arrLength = arr.length; //array 길이 변수
    let randomIndex2 = Math.floor(Math.random() * arrLength); //array 중에서 난수 생성
    let myButton = document.getElementById(arr[randomIndex2]); //input 요소 선택 후 value 속성에 서버에서 받아온 값을 할당
    myButton.value = musics[randomIndex];
}

//노래 출력 함수
function PlayMusic(musicElement) {
    audio1 = new Audio(musicElement);
    audio1.loop = false; // 반복재생하지 않음
    audio1.volume = 0.7; // 음량 설정
    audio1.play(); // sound1.mp3 재생

    return audio1;
}

let player; //노래 전역 변수
function CorrectBtn(btn){
    let div_display = document.getElementById("div3");
    div_display.style.visibility = 'hidden';
    player = PlayMusic(tempAudioFiles2_2[0]);
    let selectedBtn = document.getElementById(btn);
    if (selectedBtn.value == tempMusics[0]){
        stage++;
        answerCount++;
        if (answerCount == musics.length){
            div_display = document.getElementById("div5");
            div_display.style.visibility = 'visible';
            let tempCount = document.getElementById("counter3");
            tempCount.textContent = answerCount + "문제 정답 PERFECT";
            let tempTitle = document.getElementById("musicTitle2");
            tempTitle.textContent = tempMusics[0];
        }
        else{
            div_display = document.getElementById("div4");
            div_display.style.visibility = 'visible';
            let tempCount = document.getElementById("counter2");
            tempCount.textContent = "정답○ (" + answerCount + "문제)";
            let tempTitle = document.getElementById("musicTitle");
            tempTitle.textContent = tempMusics[0];
        }
    }
    else{
        div_display = document.getElementById("div5");
        div_display.style.visibility = 'visible';
        let tempCount = document.getElementById("counter3");
        tempCount.textContent = "오답⨉ (총 " + answerCount + "문제)";
        let tempTitle = document.getElementById("musicTitle2");
        tempTitle.textContent = tempMusics[0];
    }
}
function StopMusic(){
    player.pause(); // sound1.mp3 재생
}
function Reload(){
    location.reload();
}

//버튼 4개 처음에는 숨기기
let div_display = document.getElementById("div3");
div_display.style.visibility = 'hidden';
div_display = document.getElementById("div4");
div_display.style.visibility = 'hidden';
div_display = document.getElementById("div5");
div_display.style.visibility = 'hidden';

//메인 버튼 3개 함수
function ToggleBtn_highlight(){
    alert("개발 중입니다.");
}

let stage = 1;
let answerCount = 0;

function ToggleBtn_prelude(){
    div_display = document.getElementById("div1");
    div_display.style.visibility = 'hidden';
    ToggleBtn_prelude2();
}
//0.1초 듣고 맞추기 함수
function ToggleBtn_prelude2() {
    //여기라인부터 와일문 추가 예정
    //현재 스테이지 
    let myStage = document.getElementById("counter");
    myStage.textContent = stage + "/" + musics.length;
    //버튼 4개 보이기
    div_display = document.getElementById("div3");
    div_display.style.visibility = 'visible';
    //정답창 숨기기
    div_display = document.getElementById("div4");
    div_display.style.visibility = 'hidden';
    //오답창 숨기기
    div_display = document.getElementById("div5");
    div_display.style.visibility = 'hidden';
    //랜덤 노래 선택 후 출력 + 인덱스값
    let [randomIndex, randomElement] = RandomElement(audioFiles2_1); //randomIndex = 노래 목록 인덱스
    while (true){
        if (tempAudioFiles2_1.includes(randomElement) === false){ //고른 노래가 array에 없다면
            tempAudioFiles2_1.unshift(randomElement);
            tempAudioFiles2_2.unshift(audioFiles2_2[randomIndex]);
            PlayMusic(randomElement);
            break;
        }
        else{
            [randomIndex, randomElement] = RandomElement(audioFiles2_1);
        }
    }
    //노래 정답 버튼에 랜덤으로 넣기
    let fourButtons = ["btn1", "btn2", "btn3", "btn4"]; //버튼 4개 array 생성
    let tempFourButtons = []; //선택된 버튼이 들어가도록 함
    let tempFourMusics = []; //선택된 노래가 들어가도록 함
    //정답용 버튼이랑 노래 선택됨
    let arrLength = fourButtons.length; //array 길이 변수
    let randomIndex2 = Math.floor(Math.random() * arrLength); //array 중에서 난수 생성
    let myButton = document.getElementById(fourButtons[randomIndex2]); //input 요소 선택 후 value 속성에 서버에서 받아온 값을 할당  
    myButton.value = musics[randomIndex];
    tempFourButtons.unshift(fourButtons[randomIndex2]); //정답 버튼 어펜드
    tempFourMusics.unshift(musics[randomIndex]); //정답 노래 어펜드
    tempMusics.unshift(musics[randomIndex]); //맞춘 노래 제목 어펜드
    //while문으로 나머지 오답 뽑음
    while (tempFourButtons.length < 4){ //버튼 4개 다 고를 때까지 반복
        //오답 버튼 고르기
        let count = 0;
        while (count < 3){
            arrLength = fourButtons.length; //array 길이 변수
            let randomIndex3 = Math.floor(Math.random() * arrLength); //array 중에서 난수 생성
            if (tempFourButtons.includes(fourButtons[randomIndex3]) === false){ //고른 버튼이 배열 안에 없다면
                tempFourButtons.unshift(fourButtons[randomIndex3]);
                myButton = document.getElementById(fourButtons[randomIndex3]); //input 요소 선택 후 value 속성에 서버에서 받아온 값을 할당
                //오답 노래 고르기
                let on = true;
                while (on){
                    arrLength = musics.length; //array 길이 변수
                    let randomIndex4 = Math.floor(Math.random() * arrLength);
                    if (tempFourMusics.includes(musics[randomIndex4]) === false){ //고른 노래가 배열 안에 없다면
                        tempFourMusics.unshift(musics[randomIndex4]);
                        myButton.value = musics[randomIndex4];
                        on = false;
                    }
                }
                count++;
            }
        }
    }
}

function ToggleBtn_lyrics() {
    alert("개발 중입니다.");
}