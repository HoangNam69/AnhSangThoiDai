var result = document.querySelector(".board__content--body");
var rework = JSON.parse(sessionStorage.getItem("rework"));

// handle result
// let correctAnswer = localStorage.getItem("correctedAnswer");
// $("#score").text(correctAnswer + "/" + questions.length);

// get rework count
// let reworkCount = sessionStorage.getItem("rework");
// $("#rework").text(reworkCount);
for (let i = 0; i < rework.length; i++) {
  result.innerHTML += `
  <div class="row board__content--show my-3 fw-semibold">
   <div class="col">${i + 1}</div>
              <div class="col">
                <p id="rework">${rework[i].count}</p>
              </div>
              <div class="col">
                <p id="score">${rework[i].score}/${questions.length}</p>
              </div>
  
   </div>            `;
}
