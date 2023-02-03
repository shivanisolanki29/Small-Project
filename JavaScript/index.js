let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// console.log(saveEl);
let count = 0;

const increment = () => {
  // let countEl = document.getElementById("count-el").innerText;
  count += 1;
  countEl.textContent = count;
  // console.log(count);
};

const save = () => {
  let countstr = " " + count + " - ";
  saveEl.textContent += countstr;
  countEl.textContent = 0;
  count = 0;
  // console.log(saveEl.innerText);
};
