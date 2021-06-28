const son = Math.floor(Math.random() * 100);
console.log(son);

const imkon = document.getElementById("imkon");
const input = document.getElementById("input");
const button = document.getElementById("button");
const win = document.getElementById("wrapper-win");
const lose = document.getElementById("wrapper-lose");
const help = document.getElementById("help");
const result = document.getElementById("result")
const container = document.getElementById("container");

//Help tugmasini ishlatish
function ClickOn(){
    if (son > 50){
        result.innerHTML = "50 dan katta son yozing";
    }else{
        result.innerHTML = "50 dan kichkina son yozing";
    }
};

//Imkonyatlarni ishlatish
let guessNum = [];
let limit = 10;

function start(){
    let guess = input.value;
    if (guess<1 || guess>100){
        alert("Iltimos 1 va 100 oraligidagi sondan birini tanlang");
    }else{
        guessNum.push(guess);
        limit -= 1;
    }
    if (guess<son){
        result.innerHTML = "Xato qaytadan urining"
        imkon.textContent = `Sizda ${limit} ta imkoniyat bor`
    } else if(guess>son){
        result.innerHTML = "Xato qaytadan urining"
        imkon.textContent = `Sizda ${limit} ta imkoniyat bor`
    }else if(guess == son){
        container.classList.add("dark-window");
        win.classList.remove("d-none")
        AOS.init();

    } if (limit<1){
        container.classList.add("dark-window");
        lose.classList.remove("d-none")
        result.innerHTML = `javob ${son}  edi.`
        AOS.init();

    }
 };

 function refresh() {
    window.location.reload("Refresh")
};



