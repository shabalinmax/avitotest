import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";
function App() {
  const [last100PostsId, setLast100PostsId] = React.useState([])
  const [last100Posts, setLast100Posts] = React.useState([])

  React.useEffect(() => {
    let huy = []
    let promises = [
        [x,]
    ]
    let x = axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
        .then((res) => setLast100PostsId(res.data.slice(0, 100))).then(
            () => {
              for (const postId of last100PostsId) {
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`).then((res) => {
                  huy.push(res.data)
                })
              }
            }
        )

    Promise.all(

    )
    setLast100Posts(...huy)
    console.log(last100Posts)
  }, [])
  //









  return (
    <div className="App">

    </div>
  );
}

export default App;
