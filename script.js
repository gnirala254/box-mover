const buttons = document.querySelectorAll('.btn');
const box = document.querySelector('.box');
const mainBoxHeight = document.querySelector('.main-box').clientHeight;
const mainBoxWidth = document.querySelector('.main-box').clientWidth;
// console.log(mainBoxHeight);

let left = 225;
let toppp = 225;

document.querySelector('.box').style = `left: ${left}px; top:${toppp}px`;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // console.log('clicked');
    mainFun(btn);
  });
});

function mainFun(btn) {
  if (btn.classList[1] === 'btn-right') {
    if (left < mainBoxWidth - 55) {
      document.querySelector('.box').style = `left: ${
        left + 10
      }px; top:${toppp}px`;
      left = left + 10;
    }
  } else if (btn.classList[1] === 'btn-left') {
    if (left > 5) {
      document.querySelector('.box').style = `left: ${
        left - 10
      }px; top:${toppp}px`;
    }

    left = left - 10;
  } else if (btn.classList[1] === 'btn-up') {
    if (toppp > 5) {
      document.querySelector('.box').style = `top: ${
        toppp - 10
      }px; left:${left}px`;
      toppp -= 10;
    }
  } else if (btn.classList[1] === 'btn-down') {
    if (toppp < mainBoxHeight - 55) {
      document.querySelector('.box').style = `top: ${
        toppp + 10
      }px; left:${left}px`;
      toppp += 10;
    }
  }
}

var intervalId;

buttons.forEach((btn) => {
  btn.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
      mainFun(btn);
    }, 100);
  });
  btn.addEventListener('mouseup', () => {
    clearInterval(intervalId);
  });
});

// console.log(buttons);
