import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

const data = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]




function App() {
  const [sortedData, setSortedData] = useState([]);

  const sortByDate = () =>{
    let temp = [...data].sort((a,b)=> new Date(b.date) - new Date(a.date));
    // console.log(temp)
  setSortedData(temp);
  }
  const sortByViews = () =>{
    let some = [...data]
  let temp = some.sort((a,b)=> b.views - a.views);
  // console.log(temp)
  setSortedData(temp);
  }

  useEffect(()=>{
setSortedData(data);
  }, [])

  return (
   <>
   <h2>Date and Views Table</h2>
   <button onClick={sortByDate}>Sort by Date</button><button onClick={sortByViews}>Sort by Views</button>
   <table>
    <tr>
      <th>Date</th>
      <th>Views</th>
      <th>Article</th>
    </tr>
    {sortedData.map((row)=> <tr>
    <td>{row.date}</td>
    <td>{row.views}</td>
    <td>{row.article}</td>
  </tr>)}
    
   </table>
   </>
  );
}

export default App;
