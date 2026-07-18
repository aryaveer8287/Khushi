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
    if(moveCount < 50){
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random()*80 + "%";
        noBtn.style.top = Math.random()*80 + "%";
        quote.innerText =
            quotes[Math.floor(Math.random()*quotes.length)];
        moveCount++;
    }
});

yesBtn.addEventListener("click", () => {
    result.innerHTML =
        "<h2>Thank you, Khushi ❤️</h2>Thank you for giving us another chance. 🥹💖<br><br>

            Your trust means everything to me, and I don't want to take it for granted.<br><br>

            I can't change the past, but I can work to be a better person and a better partner from today onward.<br><br>

            Thank you for believing in us. Here's to a fresh start, more understanding, and many happy memories together. ❤️🌹
        </p>
    `;

    document.querySelector(".buttons").style.display = "none";

    createConfetti();
    createFireworks();
});. 💖</p>";
});

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

function createSparkle(){
    const s = document.createElement("div");
    s.classList.add("sparkle");
    s.innerHTML = "✨";
    s.style.left = Math.random()*100 + "vw";
    s.style.top = Math.random()*100 + "vh";
    document.body.appendChild(s);

    setTimeout(() => s.remove(), 2000);
}

setInterval(createHeart, 500);
setInterval(createSparkle, 300);
