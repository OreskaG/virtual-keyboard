import Keys from './Keys';
import createKeyboard from './createDom';

let currentLanguage = +localStorage.getItem('lang');
if (currentLanguage === undefined) {
  currentLanguage = 0;
}
if (currentLanguage === 1) {
  currentLanguage = 0;
}
if (currentLanguage === 3) {
  currentLanguage = 2;
}

createKeyboard();

function checkChangeLang() {
  if (document.getElementById('AltLeft').classList[1] === 'active' || document.getElementById('AltRight').classList[1] === 'active' || document.getElementById('ControlRight').classList[1] === 'active' || document.getElementById('ControlLeft').classList[1] === 'active') {
    setTimeout(() => {
      document.getElementById('AltLeft').classList.remove('active');
      document.getElementById('AltRight').classList.remove('active');
      document.getElementById('ControlLeft').classList.remove('active');
      document.getElementById('ControlRight').classList.remove('active');
    }, '300');
  }
}

function changeLang(cur) {
  const arr = [...document.querySelectorAll('.btn')];
  for (let i = 0; i < Keys.length; i += 1) {
    const btn = document.getElementById(`${arr[i].id}`);
    btn.innerHTML = `${Keys[i].lang[cur]}`;
    const space = document.getElementById('Space');
    space.innerHTML = '';
  }
}

function checkLang() {
  const check = document.getElementById('Backquote');
  if (check.innerHTML === Keys[0].lang[0]) {
    currentLanguage = 0;
    localStorage.setItem('lang', currentLanguage);
    return currentLanguage;
  }
  if (check.innerHTML === Keys[0].lang[1]) {
    currentLanguage = 1;
    localStorage.setItem('lang', currentLanguage);
    return currentLanguage;
  }
  if (check.innerHTML === Keys[0].lang[2]) {
    currentLanguage = 2;
    localStorage.setItem('lang', currentLanguage);
    return currentLanguage;
  }
  if (check.innerHTML === Keys[0].lang[3]) {
    currentLanguage = 3;
    localStorage.setItem('lang', currentLanguage);
    return currentLanguage;
  }
  return currentLanguage;
}

function pressShift(event) {
  if ((event.target.id === 'ShiftLeft') && (document.getElementById('ShiftRight').classList[1] === 'active')) {
    document.getElementById('ShiftRight').classList.remove('active');
    document.getElementById('ShiftLeft').classList.add('active');
    return;
  }
  if ((event.target.id === 'ShiftRight') && (document.getElementById('ShiftLeft').classList[1] === 'active')) {
    document.getElementById('ShiftRight').classList.add('active');
    document.getElementById('ShiftLeft').classList.remove('active');
    return;
  }
  if (event.target.id === 'ShiftLeft') { event.target.classList.toggle('active'); }
  if (event.target.id === 'ShiftRight') { event.target.classList.toggle('active'); }
  let lang;
  if (currentLanguage === 0) { lang = 1; }
  if (currentLanguage === 1) { lang = 0; }
  if (currentLanguage === 2) { lang = 3; }
  if (currentLanguage === 3) { lang = 2; }
  changeLang(lang);
  checkLang();
}

function checkShift() {
  if (document.getElementById('ShiftLeft').classList[1] === 'active' || document.getElementById('ShiftRight').classList[1] === 'active') {
    document.getElementById('ShiftLeft').classList.remove('active');
    document.getElementById('ShiftRight').classList.remove('active');
    let lang;
    if (currentLanguage === 0) { lang = 1; }
    if (currentLanguage === 1) { lang = 0; }
    if (currentLanguage === 2) { lang = 3; }
    if (currentLanguage === 3) { lang = 2; }
    changeLang(lang);
    checkLang();
  }
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const textArea = document.querySelector('.text-area');
  if (event.code === 'Tab') {
    textArea.value = `${textArea.value}    `;
    textArea.focus();
    document.getElementById('Tab').classList.add('active');
    setTimeout(() => {
      document.getElementById('Tab').classList.remove('active');
    }, '500');
    return;
  }
  if (event.code === 'Enter') {
    textArea.value = `${textArea.value}\n`;
    textArea.focus();
    document.getElementById('Enter').classList.add('active');
    setTimeout(() => {
      document.getElementById('Enter').classList.remove('active');
    }, '500');
    return;
  }
  if (event.code === 'Space') {
    textArea.value = `${textArea.value} `;
    textArea.focus();
    document.getElementById('Space').classList.add('active');
    setTimeout(() => {
      document.getElementById('Space').classList.remove('active');
    }, '500');
    return;
  }
  if (event.code === 'Backspace') {
    const str = textArea.selectionStart - 1;
    const len = textArea.value.length;
    textArea.value = textArea.value.substring(0, str) + textArea.value.substring(str + 1, len);
    textArea.selectionStart = str;
    textArea.selectionEnd = str;
    document.getElementById('Backspace').classList.add('active');
    setTimeout(() => {
      document.getElementById('Backspace').classList.remove('active');
    }, '500');
    return;
  }
  if (event.code === 'Delete') {
    const str = textArea.selectionStart;
    const len = textArea.value.length;
    textArea.value = textArea.value.substring(0, str) + textArea.value.substring(str + 1, len);
    textArea.selectionStart = str;
    textArea.selectionEnd = str;
    document.getElementById('Delete').classList.add('active');
    setTimeout(() => {
      document.getElementById('Delete').classList.remove('active');
    }, '500');
    return;
  }
  if (event.code === 'MetaLeft') {
    document.getElementById('MetaLeft').classList.add('active');
    setTimeout(() => {
      document.getElementById('MetaLeft').classList.remove('active');
    }, '500');
    return;
  }
  if (event.code === 'CapsLock') {
    let lang;
    if (currentLanguage === 0) { lang = 1; }
    if (currentLanguage === 1) { lang = 0; }
    if (currentLanguage === 2) { lang = 3; }
    if (currentLanguage === 3) { lang = 2; }
    changeLang(lang);
    checkLang();
    document.getElementById('CapsLock').classList.toggle('active');
    return;
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if ((event.code === 'ShiftLeft') && (document.getElementById('ShiftRight').classList[1] === 'active')) {
      document.getElementById('ShiftRight').classList.remove('active');
      document.getElementById('ShiftLeft').classList.add('active');
      return;
    }
    if ((event.code === 'ShiftRight') && (document.getElementById('ShiftLeft').classList[1] === 'active')) {
      document.getElementById('ShiftRight').classList.add('active');
      document.getElementById('ShiftLeft').classList.remove('active');
      return;
    }
    if (event.code === 'ShiftLeft') { document.getElementById('ShiftLeft').classList.toggle('active'); }
    if (event.code === 'ShiftRight') { document.getElementById('ShiftRight').classList.toggle('active'); }
    let lang;
    if (currentLanguage === 0) { lang = 1; }
    if (currentLanguage === 1) { lang = 0; }
    if (currentLanguage === 2) { lang = 3; }
    if (currentLanguage === 3) { lang = 2; }
    changeLang(lang);
    checkLang();
    return;
  }
  if (event.code === 'ControlLeft') {
    document.getElementById('ControlLeft').classList.add('active');
    if (document.getElementById('AltLeft').classList[1] === 'active') {
      let lang;
      if (currentLanguage === 0) { lang = 2; }
      if (currentLanguage === 1) { lang = 3; }
      if (currentLanguage === 2) { lang = 0; }
      if (currentLanguage === 3) { lang = 1; }
      changeLang(lang);
      checkLang();
      checkChangeLang();
    }
    return;
  }
  if (event.code === 'ControlRight') {
    document.getElementById('ControlRight').classList.add('active');
    if (document.getElementById('AltRight').classList[1] === 'active') {
      let lang;
      if (currentLanguage === 0) { lang = 2; }
      if (currentLanguage === 1) { lang = 3; }
      if (currentLanguage === 2) { lang = 0; }
      if (currentLanguage === 3) { lang = 1; }
      changeLang(lang);
      checkLang();
      checkChangeLang();
    }
    return;
  }
  if (event.code === 'AltLeft') {
    document.getElementById('AltLeft').classList.add('active');
    if (document.getElementById('ControlLeft').classList[1] === 'active') {
      let lang;
      if (currentLanguage === 0) { lang = 2; }
      if (currentLanguage === 1) { lang = 3; }
      if (currentLanguage === 2) { lang = 0; }
      if (currentLanguage === 3) { lang = 1; }
      changeLang(lang);
      checkLang();
      checkChangeLang();
    }
    return;
  }
  if (event.code === 'AltRight') {
    document.getElementById('AltRight').classList.add('active');
    if (document.getElementById('ControlRight').classList[1] === 'active') {
      let lang;
      if (currentLanguage === 0) { lang = 2; }
      if (currentLanguage === 1) { lang = 3; }
      if (currentLanguage === 2) { lang = 0; }
      if (currentLanguage === 3) { lang = 1; }
      changeLang(lang);
      checkLang();
      checkChangeLang();
    }
    return;
  }
  const key = document.getElementById(`${event.code}`);
  textArea.value += key.innerHTML;
  document.getElementById(`${event.code}`).classList.add('active');
  checkShift();
  checkChangeLang();
  setTimeout(() => {
    document.getElementById(`${event.code}`).classList.remove('active');
  }, '500');
});

const Keyboard = document.querySelector('.keyboard');
function keyboardClick(event) {
  const textArea = document.querySelector('.text-area');
  textArea.focus();
  if (event.target === document.getElementById('CapsLock')) {
    let lang;
    if (currentLanguage === 0) { lang = 1; }
    if (currentLanguage === 1) { lang = 0; }
    if (currentLanguage === 2) { lang = 3; }
    if (currentLanguage === 3) { lang = 2; }
    changeLang(lang);
    checkLang();
    document.getElementById('CapsLock').classList.toggle('active');
    return;
  }
  if (event.target === document.getElementById('ShiftLeft') || event.target === document.getElementById('ShiftRight')) {
    return;
  }
  if (event.target === document.getElementById('ControlLeft')) {
    document.getElementById('ControlLeft').classList.add('active');
    if (document.getElementById('AltLeft').classList[1] === 'active') {
      let lang;
      if (currentLanguage === 0) { lang = 2; }
      if (currentLanguage === 1) { lang = 3; }
      if (currentLanguage === 2) { lang = 0; }
      if (currentLanguage === 3) { lang = 1; }
      changeLang(lang);
      checkLang();
      checkChangeLang();
    }
    return;
  }
  if (event.target === document.getElementById('ControlRight')) {
    document.getElementById('ControlRight').classList.add('active');
    if (document.getElementById('AltRight').classList[1] === 'active') {
      let lang;
      if (currentLanguage === 0) { lang = 2; }
      if (currentLanguage === 1) { lang = 3; }
      if (currentLanguage === 2) { lang = 0; }
      if (currentLanguage === 3) { lang = 1; }
      changeLang(lang);
      checkLang();
      checkChangeLang();
    }
    return;
  }
  if (event.target === document.getElementById('AltLeft')) {
    document.getElementById('AltLeft').classList.add('active');
    if (document.getElementById('ControlLeft').classList[1] === 'active') {
      let lang;
      if (currentLanguage === 0) { lang = 2; }
      if (currentLanguage === 1) { lang = 3; }
      if (currentLanguage === 2) { lang = 0; }
      if (currentLanguage === 3) { lang = 1; }
      changeLang(lang);
      checkLang();
      checkChangeLang();
    }
    return;
  }
  if (event.target === document.getElementById('AltRight')) {
    document.getElementById('AltRight').classList.add('active');
    if (document.getElementById('ControlRight').classList[1] === 'active') {
      let lang;
      if (currentLanguage === 0) { lang = 2; }
      if (currentLanguage === 1) { lang = 3; }
      if (currentLanguage === 2) { lang = 0; }
      if (currentLanguage === 3) { lang = 1; }
      changeLang(lang);
      checkLang();
      checkChangeLang();
    }
    return;
  }
  if (event.target === document.getElementById('Tab')) {
    textArea.value = `${textArea.value}    `;
    textArea.focus();
    return;
  }
  if (event.target === document.getElementById('MetaLeft')) {
    return;
  }
  if (event.target === document.getElementById('Backspace')) {
    const str = textArea.selectionStart - 1;
    const len = textArea.value.length;
    textArea.value = textArea.value.substring(0, str) + textArea.value.substring(str + 1, len);
    textArea.selectionStart = str;
    textArea.selectionEnd = str;
    return;
  }
  if (event.target === document.getElementById('Delete')) {
    const str = textArea.selectionStart;
    const len = textArea.value.length;
    textArea.value = textArea.value.substring(0, str) + textArea.value.substring(str + 1, len);
    textArea.selectionStart = str;
    textArea.selectionEnd = str;
    return;
  }
  if (event.target === document.getElementById('Enter')) {
    textArea.value = `${textArea.value}\n`;
    textArea.focus();
    return;
  }
  if (event.target === document.getElementById('Space')) {
    textArea.value = `${textArea.value} `;
    textArea.focus();
    return;
  }
  if (event.target.className === 'btn') {
    textArea.value += event.target.innerHTML;
    checkShift();
    checkChangeLang();
  }
}

Keyboard.addEventListener('click', keyboardClick);

document.getElementById('ShiftLeft').addEventListener('click', pressShift);
document.getElementById('ShiftRight').addEventListener('click', pressShift);
