const Button = (textContent, onClick) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = textContent;
  btn.onclick = onClick;
  return btn;
};

export default Button;
