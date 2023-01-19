const count = () => {
  let count = document.getElementById("counter-el").innerText;
  document.getElementById("counter-el").innerText = +count + 1;
};
