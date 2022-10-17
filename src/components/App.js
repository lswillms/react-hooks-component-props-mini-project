import React from "react";
import Header from "./Header"
import About from './About'
import Article from "./Article";
import ArticleList from "./ArticleList";



function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Article date = "January 1, 1970" />
      <ArticleList/>
    </div>
  );
}

export default App;
