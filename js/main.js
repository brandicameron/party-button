const jsConfetti = new JSConfetti();
let timer = null;
const partyBtn = document.getElementById("party-btn");

function confettiParty() {
  jsConfetti.addConfetti({
    // confettiColors: [
    //   "#ff0a54",
    //   "#ff477e",
    //   "#ff7096",
    //   "#ff85a1",
    //   "#fbb1bd",
    //   "#f9bec7",
    // ],
    // confettiRadius: 10,
    emojies: ["🌮", "🍹"],
    emojiSize: 80,
    confettiesNumber: 20,
  });
}
// runs entire time button is pressed
function startParty() {
  //this allows the confetti to work even if the person just quickly clicks the button instead of holding it down.
  confettiParty();
  timer = setInterval(() => {
    confettiParty();
  }, 300);
}

function endParty() {
  clearInterval(timer);
}

partyBtn.addEventListener("mousedown", startParty);
partyBtn.addEventListener("mouseup", endParty);
partyBtn.addEventListener("touchstart", startParty);
partyBtn.addEventListener("touchend", endParty);
