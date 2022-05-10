import Keys from './Keys';

export default function createKeyboard() {
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
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.append(wrapper);
  const title = document.createElement('h1');
  title.classList.add('title-text');
  wrapper.append(title);
  title.innerHTML = 'RSS Виртуальная клавиатура';
  const textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.rows = 10;
  textArea.cols = 50;
  wrapper.append(textArea);
  textArea.focus();
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard');
  wrapper.append(keyboardWrapper);
  for (let i = 1; i < 6; i += 1) {
    const row = document.createElement('div');
    row.id = `row${i}`;
    row.classList.add('row');
    keyboardWrapper.append(row);
  }
  function appendBtnInRow(x, y, row) {
    for (let i = x; i < y; i += 1) {
      const elem = document.createElement('div');
      elem.id = Keys[i].id;
      elem.classList.add('btn');
      elem.innerHTML = `${Keys[i].lang[currentLanguage]}`;
      row.append(elem);
    }
  }
  appendBtnInRow(0, 14, document.getElementById('row1'));
  appendBtnInRow(14, 29, document.getElementById('row2'));
  appendBtnInRow(29, 42, document.getElementById('row3'));
  appendBtnInRow(42, 55, document.getElementById('row4'));
  appendBtnInRow(55, 64, document.getElementById('row5'));
  const space = document.getElementById('Space');
  space.innerHTML = '';
  const footerText1 = document.createElement('p');
  footerText1.classList.add('footer-text');
  footerText1.innerHTML = 'Клавиатура создана в операционной системе Windows';
  wrapper.append(footerText1);
  const footerText2 = document.createElement('p');
  footerText2.classList.add('footer-text');
  footerText2.innerHTML = 'Для переключения языка комбинация: ctrl + alt';
  wrapper.append(footerText2);
}
