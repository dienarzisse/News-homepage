import './App.css';
import NavBar from "./components/NavBar";
import MainArticle from './components/MainArticles';
import NewArticles from './components/NewArticles';
import RecommendedArticles from './components/RecommendedArticles';
import { useState, useEffect } from 'react';

function App() {
  const [dropdownOpened, setDropdownOpened] = useState("closed");
  const [isMobile, setIsMobile] = useState(true);


  if(isMobile && dropdownOpened === "opened")
    document.body.style.backgroundColor = "rgba(0,0,0,0.25)";
  else
    document.body.style.backgroundColor = "white";

  const handleResize = () => {
    //choose the screen size 
    if (window.innerWidth < 1440) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
}

// create an event listener
useEffect(() => {
    window.addEventListener("resize", handleResize)
})

  return (
    <div className="App" id={ isMobile && dropdownOpened } >
      <NavBar dropdownOpened={ dropdownOpened } setDropdownOpened={ setDropdownOpened } isMobile={ isMobile }  setIsMobile={ setIsMobile } />
      <MainArticle />
      <NewArticles />
      <RecommendedArticles />
    </div>
  );
}

export default App;
