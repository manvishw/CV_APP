import "../style/header.css";
import  html2pdf  from "html2pdf.js";

async function generateCV() {
  const element = document.querySelector(".build-view");
  html2pdf(element,{
    margin:10
  });
}

const Header = () => {
  return (
    <header>
      <p>CV Builder</p>
      <button onClick={generateCV}></button>
    </header>
  );
};

export default Header;
