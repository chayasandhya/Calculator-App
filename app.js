function appendValue(val) {
  let preVal = document.getElementById("result").innerText;
  if (preVal == 0) {
    document.getElementById("result").innerText = val;
  } else {
    document.getElementById("result").innerText = preVal + val;
  }
}

function allClear() {
  document.getElementById("result").innerText = 0;
  document.getElementById("operations").innerText = "";
}

function clearLastEntry() {
  let preVal = document.getElementById("result").innerText;
  document.getElementById("result").innerText = preVal.substring(
    0,
    preVal.length - 1
  );
}

function evaluateResult() {
  let preVal = document.getElementById("result").innerText;
  let result = eval(preVal);
  document.getElementById("result").innerText = result;
  document.getElementById("operations").innerText = preVal;
}
