const foo = document.getElementById("foo");
foo.innerText = "Hi";

const colors = ["yellow", "red", "blue"];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

const ChangeColor = () => {
  foo.style.color = randomColor;
};

setInterval(ChangeColor, 1000);
