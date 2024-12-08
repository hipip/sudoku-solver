const Title = (textContent) => {
  const h1 = document.createElement("h1");
  h1.textContent = textContent;
  h1.id = "main-title";
  return h1;
};

export default Title;
