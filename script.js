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
const quotes = [
  "🥹 Please don't be so quick... just hear my heart once more. ❤️",
  "💕 Every beautiful story deserves one more chance.",
  "🌹 My heart is still hoping for us.",
  "✨ You make my world brighter, Khushi.",
  "❤️ One smile from you means everything to me.",
  "🥰 I'll always be grateful for our memories.",
  "💖 You're worth every effort.",
  "🌸 Just one more chance to make things right.",
  "😊 Love grows with understanding.",
  "💞 You are special to me.",
  "🌹 I promise to do better.",
  "❤️ My heart still chooses you.",
  "🥹 Thank you for reading this far.",
  "✨ Whatever you choose, I'll respect it.",
  "🌸 You can decide freely. ❤️"
];

let moveCount = 0;

noBtn.addEventListener("mouseover", () => {

    if (moveCount < 15) {

        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "%";
        noBtn.style.top = Math.random() * 80 + "%";

        quote.innerHTML = quotes[moveCount];

        moveCount++;

    } else {

        // After 15 moves, the button stays in place.
        noBtn.style.position = "static";

    }

});

noBtn.addEventListener("click", () => {

    result.innerHTML = `
        <h2>🌸 Thank You, Khushi 🌸</h2>

        <p style="font-size:18px;line-height:1.8;">
            Thank you for reading my message and for being honest with me. ❤️<br><br>

            I respect your decision completely.<br><br>

            I genuinely wish you happiness and all the best for your future. 🌸
        </p>
    `;

    document.querySelector(".buttons").style.display = "none";

});


yesBtn.addEventListener("click", () => {

    result.innerHTML = `
        <h2>❤️ Thank You, Khushi ❤️</h2>

        <p style="font-size:18px;line-height:1.8;">
            Thank you for giving us another chance. 🥹💖<br><br>

            Your trust means everything to me, and I don't want to take it for granted.<br><br>

            I can't change the past, but I can work to be a better person and a better partner from today onward.<br><br>

            Thank you for believing in us. Here's to a fresh start, more understanding, and many happy memories together. ❤️🌹
        </p>
    `;

    document.querySelector(".buttons").style.display = "none";

    noBtn.addEventListener("click", () => {

    result.innerHTML = `
        <h2>🌸 Thank You, Khushi 🌸</h2>

        <p style="font-size:18px;line-height:1.8;">
            Thank you for taking the time to read my message and for being honest with me. ❤️<br><br>

            I respect your decision completely, even though it isn't the answer I was hoping for.<br><br>

            I truly hope life brings you happiness, success, and peace in everything you do.<br><br>

            Thank you for the memories we shared. I'll always wish the best for you. Take care. 🌸
        </p>
    `;

    document.querySelector(".buttons").style.display = "none";
});

    createConfetti();
    createFireworks();
});
    createConfetti();
    createFireworks();
});

// 🎉 Confetti
function createConfetti(){
    for(let i=0;i<40;i++){
        let confetti=document.createElement("div");
        confetti.innerHTML="🎉";
        confetti.style.position="fixed";
        confetti.style.left=Math.random()*10+"vw";
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
