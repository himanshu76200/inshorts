import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import Navbar from './components/Navbar';
const axios = require('axios').default;

function App() {

  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [articleNumber, setArticleNumber] = useState();

  useEffect(() => {

    const getNews = async () => {
      try {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=af7f385e6e7f44528612e10359c472ef`)
          .then(function (response) {
            // console.log("response ------>", response.data.articles);
            setNews(response.data.articles);
            setArticleNumber(response.data.totalResults);
            // console.log("news -------> ", news);
          })
          .catch(function (error) {
            console.log(error);
          })
      } catch (error) {
        console.log("try error");
      }
    }

    getNews();

  }, [category, articleNumber])

  useEffect(() => {
    console.log(news);
  }, [news])

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <Content />
    </div>
  );
}

export default App;
