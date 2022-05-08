const EN = 0;
const ENup = 1;
const RU = 2;
const RUup = 3;

let currentLanguage = localStorage.getItem('lang');

if ( currentLanguage == undefined ) {
    currentLanguage = EN;
};

export {currentLanguage};
