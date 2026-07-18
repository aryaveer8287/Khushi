const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const quote = document.getElementById("quote");
const result = document.getElementById("result");

const quotes = [
    "Nice try 😄",
    "The button is feeling shy 💕",
    "Every story deserves kindness ❤️",
    "You can choose whatever feels right 🌸"
];

let moveCount = 0;

noBtn.addEventListener("mouseover", () => {
    if(moveCount < 5){
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random()*80 + "%";
        noBtn.style.top = Math.random()*80 + "%";
        quote.innerText = quotes[Math.floor(Math.random()*quotes.length)];
        moveCount++;
    }
});

yesBtn.addEventListener("click", () => {

    result.innerHTML = `
    <h2>❤️ Thank You Khushi ❤️</h2>
    <p>You made my day! 💖</p>
    `;

    createConfetti();
    createFireworks();
});

// 🎉 Confetti
function createConfetti(){
    for(let i=0;i<150;i++){
        let confetti=document.createElement("div");
        confetti.innerHTML="🎉";
        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-20px";
        confetti.style.fontSize=(10+Math.random()*20)+"px";
        confetti.style.transition="4s linear";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.style.top="110vh";
        },50);

        setTimeout(()=>{
            confetti.remove();
        },4000);
    }
}

// 🎆 Fireworks
function createFireworks(){

    const emojis=["✨","💖","🎆","💥","🌟"];

    for(let i=0;i<80;i++){

        let fw=document.createElement("div");

        fw.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

        fw.style.position="fixed";
        fw.style.left="50%";
        fw.style.top="50%";
        fw.style.fontSize=(20+Math.random()*20)+"px";

        let x=(Math.random()-0.5)*800;
        let y=(Math.random()-0.5)*800;

        fw.animate([
            {transform:"translate(0,0)",opacity:1},
            {transform:`translate(${x}px,${y}px)`,opacity:0}
        ],{
            duration:2000
        });

        document.body.appendChild(fw);

        setTimeout(()=>{
            fw.remove();
        },2000);
    }
}
