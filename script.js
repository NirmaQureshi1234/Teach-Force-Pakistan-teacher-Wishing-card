document.getElementById("thankButton").addEventListener("click", function () {
    const confettiContainer = document.getElementById("confetti");
    confettiEffect(confettiContainer);
    alert("Happy Teachers' Day! Thank you for being amazing!");
  });
  
  function confettiEffect(container) {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti-piece");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDelay = Math.random() * 2 + "s";
      confetti.style.backgroundColor = randomColor();
      container.appendChild(confetti);
    }
  
    setTimeout(() => {
      container.innerHTML = ''; // Remove confetti after 5 seconds
    }, 5000);
  }
  
  function randomColor() {
    const colors = ["#ff6347", "#ffda79", "#32cd32", "#66a6ff", "#f06292"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  