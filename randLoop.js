function setup() {
  const r = Math.floor(Math.random() * 3) + 1;
  const imgSrc = "reminders/" + r + ".png";
  const main = document.getElementById("main");

  main.innerHTML = `<img id="cover-image" src=${imgSrc} alt="reminder_${r}"/>`;
}

setup();
