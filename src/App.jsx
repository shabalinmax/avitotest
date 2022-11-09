import './App.css';
import axios from "axios";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
function App() {
    const [lastHundredPosts, setLastHundredPosts] = React.useState([])
    let getNewPosts = () => {
        axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
            .then((res) =>
                Promise.all(res.data.slice(0, 100).map((el) =>
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`)
                ))
            )
            .then((values) =>
                values.map((el) => el.data)
            )
            .then((finalResponse) => setLastHundredPosts(finalResponse))
    }
    React.useEffect(() => {
        getNewPosts()
        setInterval(() => {
            getNewPosts()
        }, 60*1000)
    }, [])


    return (
            <Router>
                <div className={'App'}>
                   <Header/>
                    <Switch>
                        <Route path="/postPage">
                            <PostPage/>
                        </Route>
                        <Route path="/">
                            <MainPage
                                getPosts={getNewPosts}
                                lastHundredPosts={lastHundredPosts}
                            />
                        </Route>
                    </Switch>
                {/* routing here */}
                </div>
            </Router>
    );
}

export default App;
