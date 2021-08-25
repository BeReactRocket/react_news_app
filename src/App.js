import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const URL = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API}`;
  const onClick = async () => {
    /* Promise  
    axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      setData(response.data);
    }); */
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>Load News</button>
      </div>
      <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>
    </div>
  );
}

export default App;
