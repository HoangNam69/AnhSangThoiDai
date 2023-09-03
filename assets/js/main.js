const countdownElement = document.getElementById("dong-ho");
var boardQuestion = document.querySelector(".board .board__question");
var boardAnswer = document.querySelector(".board__answer");
var showEndCount = document.querySelector(".showMessEndCount");
var iconCloseMessEndCount = document.querySelector(".btn__close");
var detail = document.querySelector(".detail");
var flag = false;
// shift answer
shuffle = (answers) => {
  for (let i = 3; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[rand]] = [answers[rand], answers[i]];
  }
  return answers;
};

// handle option selection

localStorage.setItem("i", 0);
let i = Number(localStorage.getItem("i")) || 0;

boardQuestion.innerHTML += `
  <p>Câu hỏi số ${i + 1}:</p>
  <p><b>"</b>${questions[i].question}<b>"</b></p>
  <p style="text-align: center;"> <strong>- Hồ Chí Minh -</strong></p>`;

detail.innerHTML = questions[i].detail;
shuffledAnswer = shuffle(questions[i].answers);

for (let i = 0; i < 4; i++) {
  boardAnswer.innerHTML += `
  <button class="btn btn--ans" value="${i}"><i> </i>${shuffledAnswer[i].text}</button>
`;
}

// track the question answer and detail
$(".btn").on("click", function () {
  setTimeout(() => {
    if (shuffledAnswer[$(this).val()].correct) {
      $("#infor").text("Chúc mừng bạn đã chọn đáp án đúng");
    } else {
      $("#infor").text(`Rất tiếc bạn đã chọn đáp án sai`);
    }
    $("#modal__messages").modal("show");
  }, 3000);
});

// change button base on uesr selection
const $buttons = $(".btn--ans");
$buttons.each(function (index, btn) {
  $buttons.on("click", function () {
    let correct = shuffledAnswer[$(btn).val()].correct;
    if (correct) {
      $(btn).children().addClass("fa-solid fa-circle-check");
      $(btn).css("background-color", "#00FF00");
      $(btn).css("color", "black");
    } else {
      $(btn).children().addClass("fa-solid fa-circle-xmark");
      $(btn).css("background-color", "red");
      $(btn).css("color", "black");
    }
  });
});

i++;
localStorage.setItem("i", i);
let number = 29;

function updateCountdown() {
  countdownElement.textContent = number;
  number--;

  if (number < 0) {
    clearInterval(countdownInterval);
    // Xử lý hiển thị thông báo khi hết thời gian hoặc hết câu thử thách
    showEndCount.style.display = "flex";
    // Sau khi hết giờ làm bài hoặc hết câu thì hiển thị thông báo tương ứng từng trường hợp và sau đó chuyển qua trang kết quả
    iconCloseMessEndCount.addEventListener("click", function () {
      showEndCount.style.display = "none"; // Xử lý tắt thông báo
      window.location = "./resultAnnouncement.html"; // Chuyển trang
    });
  }
}
const countdownInterval = setInterval(updateCountdown, 1000);
