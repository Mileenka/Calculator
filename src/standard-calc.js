const calculatorHistory = document.querySelector('#calculatorHistory');

const mainPanel = document.querySelector('#mainPanel');

const previousNumberShow = document.querySelector('#previousNumberShow');

const currentNumberShow = document.querySelector('#currentNumberShow');

const history = document.querySelector('.history');

const historyBtnClear = document.querySelector('#historyBtnClear');

const clearLastIcon =
  ' <svg id="svgClear" version="1.1" width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
  '<path d="M14.5376,0h-9.02588c-0.45166,0 -0.875,0.200195 -1.16163,0.550293l-4.1997,5.1333c-0.150391,0.184082 -0.150391,0.448731 3.05311e-16,0.632813l4.2002,5.13379c0.286133,0.349609 0.709473,0.549805 1.16113,0.549805h9.02588c0.827148,0 1.5,-0.672852 1.5,-1.5v-9c0,-0.827148 -0.672852,-1.5 -1.5,-1.5Zm0.5,10.5c0,0.275879 -0.224121,0.5 -0.5,0.5h-9.02588c-0.150879,0 -0.291992,-0.0668945 -0.387207,-0.183105l-3.94092,-4.81689l3.94043,-4.81641c0.0957031,-0.116699 0.236816,-0.183594 0.387695,-0.183594h9.02588c0.275879,0 0.5,0.224121 0.5,0.5v9Z" transform="translate(-.2, 4)" fill="#753562"></path>' +
  '<path d="M5,0l-2.14648,2.14649l-2.14648,-2.14649l-0.707032,0.707032l2.14648,2.14648l-2.14648,2.14648l0.707032,0.707032l2.14648,-2.14649l2.14648,2.14649l0.707032,-0.707032l-2.14649,-2.14648l2.14649,-2.14648Z" transform="translate(6.14648, 7.14648)" fill="white"></path>' +
  '</svg>';

const btnObj = [
  {
    id: 'percent',
    class: 'percentMath',
    text: '%',
  },
  {
    id: 'piSymbol',
    class: 'symbol',
    value: '3.141592',
    text: '𝝅',
  },
  {
    id: 'clearAll',
    class: 'clear',
    text: 'c',
  },
  {
    id: 'clearLast',
    class: 'clear',
  },
  {
    id: 'fraction',
    class: 'fractionMath',
    text: '⅟',
  },
  {
    id: 'squared',
    class: 'squaredMath',
    text: '×²',
  },
  {
    id: 'symbolMathRoot',
    class: 'symbol',
    text: '√',
  },
  {
    id: 'divisionSign',
    class: 'operator',
    value: '/',
    text: '÷',
  },
  {
    id: 'num7',
    class: 'number',
    value: '7',
    text: '7',
  },
  {
    id: 'num8',
    class: 'number',
    value: '8',
    text: '8',
  },
  {
    id: 'num9',
    class: 'number',
    value: '9',
    text: '9',
  },
  {
    id: 'multiplicationSign',
    class: 'operator',
    value: '*',
    text: '×',
  },
  {
    id: 'num4',
    class: 'number',
    value: '4',
    text: '4',
  },
  {
    id: 'num5',
    class: 'number',
    value: '5',
    text: '5',
  },
  {
    id: 'num6',
    class: 'number',
    value: '6',
    text: '6',
  },
  {
    id: 'subtractionSign',
    class: 'operator',
    value: '-',
    text: '-',
  },
  {
    id: 'num1',
    class: 'number',
    value: '1',
    text: '1',
  },
  {
    id: 'num2',
    class: 'number',
    value: '2',
    text: '2',
  },
  {
    id: 'num3',
    class: 'number',
    value: '3',
    text: '3',
  },
  {
    id: 'additionSign',
    class: 'operator',
    value: '+',
    text: '+',
  },
  {
    id: 'num0',
    class: 'numberZero',
    value: '0',
    text: '0',
  },
  {
    id: 'doubleZero',
    class: 'numberDoubleZero',
    value: '00',
    text: '00',
  },
  {
    id: 'commaSign',
    class: 'numberDoubleZero',
    text: ',',
  },
  {
    id: 'equalSign',
    class: 'equal',
    text: '=',
  },
];

btnObj.forEach((btn) => {
  const button = document.createElement('button');
  for (const [key, value] of Object.entries(btn)) {
    if (key !== 'text') {
      button.setAttribute(`${key}`, `${value}`);
    }
  }
  button.innerText = btn.text;
  mainPanel.append(button);
});

document.querySelector('#clearLast').innerHTML = clearLastIcon;

let prevNum = '';
let currNum = '0';
let mathSign = '';
let commaSignWasUsed = false;
let secondNumInProgress = false;
let secondNumActive = false;

const setNumber = (char) => {
  if (currNum === '0') {
    currentNumberShow.innerText = char;
    currNum = char;
  } else if (secondNumInProgress === true) {
    currentNumberShow.innerText = char;
    currNum = char;
    secondNumInProgress = false;
  } else {
    currentNumberShow.innerText += char;
    currNum += char;
  }
};

const clearAll = () => {
  currentNumberShow.innerText = '0';
  currNum = '0';
  previousNumberShow.innerText = '';
  prevNum = '';
  mathSign = '';
  commaSignWasUsed = false;
  secondNumActive = false;
};

const percent = () => {
  if (secondNumActive === true) {
    currNum /= 100;
    currentNumberShow.innerText = currNum.toString().replace('.', ',');
  }
};

const fraction = () => {
  if (currNum !== '0') {
    currNum = 1 / currNum;
    currentNumberShow.innerText = currNum;
  }
};
const squared = () => {
  currNum **= 2;
  currentNumberShow.innerText = currNum;
};
const MathRoot = () => {
  currNum = Math.sqrt(currNum);
  currentNumberShow.innerText = currNum;
};

// const showResult = () => {
//   if (prevNum === '' || currNum === '') return;

//   previousNumberShow.innerText += (' ' + currNum + ' =').replace('.', ',');
//   // const prevDecimal = new Decimal(prevNum);
//   // const currDecimal = new Decimal(currNum);

//   let result;
//   switch (mathSign) {
//     case '+':
//       result = prevNum + currNum;
//       break;
//     case '-':
//       result = prevNum - currNum;
//       break;
//     case '*':
//       result = prevNum * currNum;
//       break;
//     case '/':
//       result = prevNum / currNum;
//       break;
//     default:
//   }

//   // const decimalPlaces = result.decimalPlaces();
//   // if (decimalPlaces > 0) {
//   //   const resultString = result.toFixed(2).replace('.', ',');
//   //   currentNumberShow.innerText = resultString;
//   // } else {
//   //   resultString = result.toFixed(0);
//   //   currentNumberShow.innerText = resultString;
//   // }

//   if (result > 0) {
//     const resultString = result.toFixed(2).replace('.', ',');
//     currentNumberShow.innerText = resultString;
//   } else {
//     resultString = result.toFixed(0);
//     currentNumberShow.innerText = resultString;
//   }

//   currNum = result;
//   commaSignWasUsed = false;
//   mathSign = '';
//   prevNum = '';

//   const newHistoryItem = document.createElement('li');

//   const resultHistory = result;
//   newHistoryItem.innerHTML += `${previousNumberShow.innerHTML.replace(
//     '.',
//     ',',
//   )} ${resultHistory}`;
//   newHistoryItem.classList.add('history-item');
//   history.appendChild(newHistoryItem);
// };

const showResult = () => {
  if (prevNum === '' || currNum === '') return;

  previousNumberShow.innerText += (' ' + currNum + ' =').replace('.', ',');

  let result;
  switch (mathSign) {
    case '+':
      result = parseFloat(prevNum) + parseFloat(currNum);
      break;
    case '-':
      result = parseFloat(prevNum) - parseFloat(currNum);
      break;
    case '*':
      result = parseFloat(prevNum) * parseFloat(currNum);
      break;
    case '/':
      result = parseFloat(prevNum) / parseFloat(currNum);
      break;
    default:
      return;
  }

  const resultString = result.toString().replace('.', ',');
  currentNumberShow.innerText = resultString;

  currNum = result.toString();
  commaSignWasUsed = false;
  mathSign = '';
  prevNum = '';

  const newHistoryItem = document.createElement('li');
  const resultHistory = resultString;
  newHistoryItem.innerHTML += `${previousNumberShow.innerHTML.replace(
    '.',
    ',',
  )} ${resultHistory}`;
  newHistoryItem.classList.add('history-item');
  history.appendChild(newHistoryItem);
};

const clearHistory = () => {
  history.textContent = '';
  if (history.textContent === '') {
    historyBtnClear.classList.remove('active');
  }
};

document.querySelector('#mainPanel').addEventListener('click', (el) => {
  if (el.target.className === 'operator') {
    previousNumberShow.innerText =
      currentNumberShow.innerText +
      ' ' +
      el.target.value.toString().replace('*', '×').replace('/', '÷');
    prevNum = currNum;
    mathSign = el.target.value;
    secondNumInProgress = true;
    commaSignWasUsed = false;
    secondNumActive = true;
  }

  if (
    el.target.className === 'number' ||
    el.target.id === 'piSymbol' ||
    el.target.id === 'num0'
  ) {
    setNumber(el.target.value);
  }

  if (el.target.id === 'doubleZero' && currNum !== '0') {
    setNumber(el.target.value);
  }

  if (el.target.id === 'commaSign' && commaSignWasUsed !== true) {
    currentNumberShow.innerText += ',';
    currNum += '.';
    commaSignWasUsed = true;
  }

  if (el.target.id === 'clearLast' || el.target.id === 'svgClear') {
    if (currNum.length > 1) {
      if (currNum.split('')[currNum.length - 1] === '.') {
        commaSignWasUsed = false;
      }

      currentNumberShow.innerText = currentNumberShow.innerText.slice(0, -1);
      currNum = currNum.slice(0, -1);
    } else {
      currentNumberShow.innerText = '0';
      currNum = '0';
    }
  }

  if (el.target.id === 'clearAll') {
    clearAll();
  }

  if (el.target.id === 'equalSign') {
    showResult();
  }

  if (el.target.id === 'percent') {
    percent();
  }

  if (el.target.id === 'fraction') {
    fraction();
  }

  if (el.target.id === 'squared') {
    squared();
  }

  if (el.target.id === 'symbolMathRoot') {
    MathRoot();
  }
});

document.querySelector('#hourglass').addEventListener('click', () => {
  calculatorHistory.classList.toggle('historySlider');
});

historyBtnClear.addEventListener('click', () => {
  clearHistory();
});
