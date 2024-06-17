const letterEmoji = document.getElementById("letter");
const letter = "/img/letter.png";
letterEmoji.addEventListener("click", handleLetterClicked());
letterEmoji.addEventListener("touchstart", handleLetterClicked());
function handleLetterClicked(event) {
  console.log(event.target);
}
