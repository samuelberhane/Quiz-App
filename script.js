let questionDate = [
  {
    question: `1. In 1768, Captain James Cook set out to explore which ocean?`,
    a: `Pacific Ocean`,
    b: `Atlantic Ocean`,
    c: `Indian Ocean`,
    d: `Arctic Ocean`,
    answer: `a`,
  },
  {
    question: `2. What is actually electricity?`,
    a: `A flow of water`,
    b: `A flow of air`,
    c: `A flow of electrons`,
    d: `A flow of atoms`,
    answer: `c`,
  },
  {
    question: `3. Which of the following is not an international organisation?`,
    a: `FIFA`,
    b: `NATO`,
    c: `ASEAN`,
    d: `FBI`,
    answer: `d`,
  },
  {
    question: `4. Which of the following disorders is the fear of being alone?`,
    a: `Agoraphobia`,
    b: `Aerophobia`,
    c: `Acrophobia`,
    d: `Arachnophobia`,
    answer: `a`,
  },
  {
    question: `5. Which of the following is a song by the German heavy metal band “Scorpions”?`,
    a: `Stairway to Heaven`,
    b: `Wind of Change`,
    c: `Don’t Stop Me Now`,
    d: `Hey Jude`,
    answer: `b`,
  },
  {
    question: `6. What is the speed of sound?`,
    a: `120 km/h`,
    b: `1,200 km/h`,
    c: `400 km/h`,
    d: `700 km/h`,
    answer: `b`,
  },
  {
    question: `7. Which is the easiest way to tell the age of many trees?`,
    a: `To measure the width of the tree`,
    b: `To count the rings on the trunk`,
    c: `To count the number of leaves`,
    d: `To measure the height of the tree`,
    answer: `b`,
  },
  {
    question: `8. What do we call a newly hatched butterfly?`,
    a: `A moth`,
    b: `A butter`,
    c: `A caterpillar`,
    d: `A chrysalis`,
    answer: `c`,
  },
  {
    question: `9. In total, how many novels were written by the Bronte sisters?`,
    a: `4`,
    b: `5`,
    c: `6`,
    d: `7`,
    answer: `d`,
  },
  {
    question: `10. Which did Viking people use as money?`,
    a: `Rune stones`,
    b: `Jewellery`,
    c: `Seal skins`,
    d: `Wool`,
    answer: `b`,
  },
];

let h2 = document.querySelector("h2");
let a = document.querySelector(`[for="a"]`);
let b = document.querySelector(`[for="b"]`);
let c = document.querySelector(`[for="c"]`);
let d = document.querySelector(`[for="d"]`);
let next = document.querySelector(".next");

let currentQuestion = 0;
let score = 0;
let inputs = document.querySelectorAll(`[type="radio"]`);

function quiz(number) {
  deselectAnswer();
  let questionNumber = questionDate[number];
  h2.textContent = questionNumber.question;
  a.textContent = questionNumber.a;
  b.textContent = questionNumber.b;
  c.textContent = questionNumber.c;
  d.textContent = questionNumber.d;
}

quiz(currentQuestion);

function getSelected() {
  let selectedAnswer;
  inputs.forEach((input) => {
    if (input.checked) {
      selectedAnswer = input.id;
    }
  });
  return selectedAnswer;
}

function deselectAnswer() {
  inputs.forEach((input) => {
    input.checked = false;
  });
}

next.addEventListener("click", () => {
  let selected = getSelected();
  if (selected) {
    if (selected == questionDate[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questionDate.length) {
      quiz(currentQuestion);
    } else {
      document.querySelector(".container").innerHTML = `<h2>
        Result: ${score}/${questionDate.length}
      </h2>
      <button class="next" onclick=location.reload()>
        Retry
      </button>
      `;
    }
  }
});
