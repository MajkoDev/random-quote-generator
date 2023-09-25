import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  // state for storing quote
  const [quote, setQuote] = useState('');

  // useEffect that runs what the component mounts
  useEffect(() => {
    // async fetching function
    const fetchQuote = async () => {
      try {
        // fetching from external API with Axios
        const res = await axios.get('https://api.quotable.io/random');
        // storing data in state
        setQuote(res.data.content);
      } catch (error) {
        console.error('there has been some error in fetching', error);
      }
    };

    // running the function
    fetchQuote();
  }, []);

  return (
    <>
      <h3>Random Quote Generator</h3>
      <blockquote>{quote}</blockquote>
    </>
  );
}

export default App;
