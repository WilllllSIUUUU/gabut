const messages = [
  "Sayang, kamu kuat. Apapun yang kamu hadapi, kamu bisa lewatin!",
  "Aku tahu kamu lagi berjuang, dan aku selalu di sini dukung kamu ❤️",
  "Semangat itu bukan soal selalu tersenyum, tapi soal terus melangkah.",
  "Kamu nggak sendiri. Aku percaya sama kamu, selalu.",
  "Jangan lupa istirahat, ya. Kamu berhak bahagia 🥰",
  "Terima kasih udah jadi kamu yang sekarang. Aku bangga!"
];

let index = 0;
const messageEl = document.getElementById("message");

function updateMessage() {
  messageEl.style.opacity = 0;

  setTimeout(() => {
    messageEl.textContent = messages[index];
    messageEl.style.opacity = 1;
    index = (index + 1) % messages.length;
  }, 500);
}

updateMessage();
setInterval(updateMessage, 5000);