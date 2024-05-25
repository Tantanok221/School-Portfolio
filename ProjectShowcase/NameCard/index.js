
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelector(".card").addEventListener("mouseover", function() {
  let iteration = 0;
  const textElement = this.querySelector(".text");
  
  clearInterval(interval);

  interval = setInterval(() => {
    const originalText = textElement.dataset.value;

    if (!originalText) {
      clearInterval(interval);
      return;
    }

    textElement.innerText = originalText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return originalText[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= originalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
});
