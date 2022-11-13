import './App.css';
import axios from "axios";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import {useSelector, useDispatch} from "react-redux";
import {setPosts, setLoading } from "./redux/slices/postsSlice";
import Loader from "./components/Loader";
function App() {
    const isLoadingPosts = useSelector((state) => state.posts.loadingPageOpened)
    const error = useSelector((state) => state.posts.error)
    const dispatch = useDispatch()
    let getNewPosts = (isNeedLoadingPage) => {
        isNeedLoadingPage ? dispatch(setLoading(true)) : dispatch(setLoading(false))
        axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
            .then((res) =>
                Promise.all(res.data.slice(0, 100).map((el) =>
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`)
                ))
            )
            .then((values) =>
                values.map((el) => el.data)
            )
            .then((finalResponse) => dispatch(setPosts(finalResponse)))
            .then(() => (dispatch(setLoading(false))))
            .catch(function(err) {
                console.log(err.message)
            })
    }

    React.useEffect(() => {
        getNewPosts(true)
        setInterval(() => {
            getNewPosts(false)
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
                            {
                                isLoadingPosts ?
                                    <Loader/>
                                    :
                                    <MainPage
                                        getPosts={getNewPosts}/>
                            }
                        </Route>
                    </Switch>
                {/* routing here */}
                </div>
            </Router>
    );
}

export default App;
