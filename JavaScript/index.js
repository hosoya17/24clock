"use strict";

const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.min');
const secHand = document.querySelector('.sec');
const dayText = document.querySelector('.dayText');
const timeText = document.querySelector('.timeText');
const Country = document.querySelector('.Country');
const btns = document.querySelectorAll('.btns button');
const secHandBtn = document.querySelector('.secHandBtn');
const secBtn = document.querySelector('.secBtn');
const dayName = ['日', '月', '火', '水', '木', '金', '土'];
let flg = 0;
let secFlg = 0;
let secHandFlg = 0;
let AMPM;

const addZero = (num) => {
    num = num < 10 ? `0${num}` : num;
    return num;
}

const addZeroMilli = (num) => {
    if (num < 10) {
        num = `00${num}`;
    } else if (num < 100) {
        num = `0${num}`;
    }
    return num;
}

const decDate = (num) => {
    num -= 1;
    return num;
}

secBtn.addEventListener('click', () => {
    secFlg = secFlg === 0 ? 1 : 0;
});
secHandBtn.addEventListener('click', () => {
    if (secHandFlg === 0) {
        secHand.style.opacity = 0;
        secHandFlg = 1;
    } else {
        secHand.style.opacity = 1;
        secHandFlg = 0;
    }
});
btns[0].addEventListener('click', () => {
    flg = 0;
    Country.innerHTML = '東京';
});
btns[1].addEventListener('click', () => {
    flg = 1;
    Country.innerHTML = 'ワシントンD.C.';
});
btns[2].addEventListener('click', () => {
    flg = 2;
    Country.innerHTML = 'ロンドン';
});
btns[3].addEventListener('click', () => {
    flg = 3;
    Country.innerHTML = 'パリ';
});
btns[4].addEventListener('click', () => {
    flg = 4;
    Country.innerHTML = 'エジプト';
});
btns[5].addEventListener('click', () => {
    flg = 5;
    Country.innerHTML = 'ロシア';
});
btns[6].addEventListener('click', () => {
    flg = 6;
    Country.innerHTML = 'インド';
});
btns[7].addEventListener('click', () => {
    flg = 7;
    Country.innerHTML = 'シンガポール';
});
btns[8].addEventListener('click', () => {
    flg = 8;
    Country.innerHTML = '北京';
});
btns[9].addEventListener('click', () => {
    flg = 9;
    Country.innerHTML = 'オーストラリア';
});

const clock = () => {
    const now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let millisec = now.getMilliseconds();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let day = now.getDay();

    if (flg === 0) {//日本
        AMPM = hour < 12 ? 'AM' : 'PM';
    } else if (flg === 1) {//ワシントンD.C.
        hour -= 13;
        if (hour < 0) {
            hour += 24;
            date -= 1;
        }
        AMPM = hour < 12 ? 'AM' : 'PM';
    } else if (flg === 2) {//ロンドン
        hour -= 8;
        if (hour < 0) {
            hour += 24;
            date = decDate(date);
        }
        AMPM = hour < 12 ? 'AM' : 'PM';
    } else if (flg === 3) {//パリ
        hour -= 7;
        if(hour < 0){
            hour += 24;
            date = decDate(date);
        }
        AMPM = hour < 12 ? 'AM' : 'PM';
    } else if (flg === 4) {//エジプト
        hour -= 6;
        if(hour < 0){
            hour += 24;
            date = decDate(date);
        }
        AMPM = hour < 12 ? 'AM' : 'PM';
    } else if (flg === 5) {//ロシア
        hour -= 6;
        if(hour < 0){
            hour += 24;
            date = decDate(date);
        }
        AMPM = hour < 12 ? 'AM' : 'PM';
    } else if (flg === 6) {//インド
        hour -= 3;
        if(hour < 0){
            hour += 24;
            date = decDate(date);
        }
        AMPM = hour < 12 ? 'AM' : 'PM';
        min = min < 30 ? (min - 30) + 60 : min - 30;
    } else if (flg === 7) {//シンガポール
        hour -= 1;
        if(hour < 0){
            hour += 24;
            date = decDate(date);
        }
        AMPM = hour < 12 ? 'AM' : 'PM';
    } else if (flg === 8) {//北京
        hour -= 1;
        if(hour < 0){
            hour += 24;
            date = decDate(date);
        }
        AMPM = hour < 12 ? 'AM' : 'PM';
    } else if (flg === 9) {//オーストラリア
        hour += 1;
        hour = hour < 0 ? hour + 24 : hour;
        AMPM = hour < 12 ? 'AM' : 'PM';
    }

    hourHand.style.transform = `rotate(${(hour + min / 60) / 24 * 360}deg)`;
    minHand.style.transform = `rotate(${(min + sec / 60) * 6}deg)`;
    secHand.style.transform = `rotate(${(sec + millisec / 1000) * 6}deg)`;

    timeText.innerHTML = secFlg === 0 ? `${addZero(hour)}:${addZero(min)}:${addZero(sec)} ${AMPM}` : `${addZero(hour)}:${addZero(min)} ${AMPM}`;
    dayText.innerHTML = `${year}年${addZero(month)}月${addZero(date)}日(${dayName[day]})`;

    requestAnimationFrame(clock);
};
clock();
