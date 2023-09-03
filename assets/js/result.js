// handle result
let correctAnswer = localStorage.getItem("correctedAnswer");
$("#score").text(correctAnswer + "/" + questions.length);
