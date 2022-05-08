import Keys from "./Keys";
import {currentLanguage} from "./language"
import {createKeyboard} from "./createDom"

// console.log(Keys)
// console.log(Keys[3])
// console.log(Keys[3].lang[currentLanguage])
document.addEventListener('keydown', function (event) {
    event.preventDefault();
    let textArea = document.querySelector('.text-area');
    if ( event.code == 'Tab') {
        textArea.value = textArea.value + "    ";
        textArea.focus();
        return;
    }
    if ( event.code == 'Enter') {
        textArea.value = textArea.value + "\n";
        textArea.focus();
        return;
    }
    if ( event.code == 'Space') {
        textArea.value = textArea.value + " ";
        textArea.focus();
        return;
    }
    if ( event.code == 'Backspace') {
        let str = textArea.selectionStart - 1 ;
        textArea.value = textArea.value.substring(0, str) + textArea.value.substring(str + 1, textArea.value.length)
        textArea.selectionStart = str;
        textArea.selectionEnd = str;
        return;
    }
    if ( event.code == 'Delete') {
        let str = textArea.selectionStart;
        textArea.value = textArea.value.substring(0, str) + textArea.value.substring(str + 1, textArea.value.length)
        textArea.selectionStart = str;
        textArea.selectionEnd = str;
        return;
    }
    if ( event.code == "MetaLeft") {
        return;
    }
    console.log(event.code)
    let key = document.getElementById(`${event.code}`);
    textArea.value = textArea.value + key.innerHTML;
});

createKeyboard();

let Keyboard = document.querySelector(".keyboard");
function keyboardClick (event) {
    let textArea = document.querySelector('.text-area');
    textArea.focus();
    if (event.target == document.getElementById('CapsLock')) {
        console.log('1')
        return;
    };
    if (event.target == document.getElementById('ShiftLeft') || event.target == document.getElementById('ShiftRight')) {
        console.log('2')
        return;
    };
    if (event.target == document.getElementById('ControlLeft') || event.target == document.getElementById('ControlRight')) {
        console.log('3')
        return;
    };
    if (event.target == document.getElementById('AltLeft') || event.target == document.getElementById('AltRight')) {
        console.log('4')
        return;
    };
    if (event.target == document.getElementById('Tab')) {
        textArea.value = textArea.value + "    ";
        textArea.focus();
        return;
    };
    if (event.target == document.getElementById('MetaLeft')) {
        return;
    };
    if (event.target == document.getElementById('Backspace')) {
        let str = textArea.selectionStart - 1 ;
        textArea.value = textArea.value.substring(0, str) + textArea.value.substring(str + 1, textArea.value.length)
        textArea.selectionStart = str;
        textArea.selectionEnd = str;
        return;
    };
    if (event.target == document.getElementById('Delete')) {
        let str = textArea.selectionStart;
        textArea.value = textArea.value.substring(0, str) + textArea.value.substring(str + 1, textArea.value.length)
        textArea.selectionStart = str;
        textArea.selectionEnd = str;
        return;
    };
    if (event.target == document.getElementById('Enter')) {
        textArea.value = textArea.value + "\n";
        textArea.focus();
        return;
    };
    if (event.target == document.getElementById('Space')) {
        textArea.value = textArea.value + " ";
        textArea.focus();
        return;
    };
    if ( event.target.className == 'btn' ) {
        textArea.value = textArea.value + event.target.innerHTML;
    };
}
Keyboard.addEventListener('click', keyboardClick);