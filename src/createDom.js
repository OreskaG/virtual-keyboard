import Keys from "./Keys";

function createKeyboard() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.append(wrapper);
    let title = document.createElement('h1');
    title.classList.add('title-text');
    wrapper.append(title);
    title.innerHTML = "RSS Виртуальная клавиатура";
    let textArea = document.createElement('textarea');
    textArea.classList.add('text-area');
    textArea.rows = 10;
    textArea.cols = 50;
    wrapper.append(textArea);
    textArea.focus();
    let keyboardWrapper = document.createElement('div');
    keyboardWrapper.classList.add('keyboard');
    wrapper.append(keyboardWrapper);
    for ( let i=1 ; i<6 ; i+=1) {
        let row = document.createElement('div');
        row.id = `row${i}`;
        row.classList.add('row');
        keyboardWrapper.append(row);
    };
    function appendBtnInRow(x, y, row) {
        for ( let i=x ; i < y ; i+=1) {
            let elem = document.createElement('div');
            elem.id = Keys[i].id;
            elem.classList.add('btn');
            row.append(elem);
        }
    };
    appendBtnInRow(0, 14, row1);
    appendBtnInRow(14, 29, row2);
    appendBtnInRow(29, 42, row3);
    appendBtnInRow(42, 55, row4);
    appendBtnInRow(55, 64, row5);
    let footerText1 = document.createElement('p');
    footerText1.classList.add('footer-text');
    footerText1.innerHTML = "Клавиатура создана в операционной системе Windows";
    wrapper.append(footerText1);
    let footerText2 = document.createElement('p');
    footerText2.classList.add('footer-text');
    footerText2.innerHTML = "Для переключения языка комбинация: ctrl + alt";
    wrapper.append(footerText2);
}

export {createKeyboard}