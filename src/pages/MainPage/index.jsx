import React from 'react';
import './MainPage.css'
import {useSelector, useDispatch} from "react-redux";
import {openPost} from "../../redux/slices/postsSlice";
import {useHistory} from "react-router-dom";

const MainPage = ({getPosts}) => {
    const posts = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()
    let history = useHistory()
    let clickPost = (post) => {
        history.push('/postPage')
        dispatch(openPost(post))
    }
    return (
        <div className={'MainPage'} >
            <button className='defaultBtn' onClick={() => getPosts(true)} style={{margin: '15px'}}>refresh news</button>
            {posts.map((post) =>
                <div key={post.id} onClick={() => clickPost(post) } className={'post'}>
                    <div className="postTitle">
                        {post.title}
                    </div>
                    <div className="postInfo">
                        <div className="postRating">
                            rating: {post.score}
                        </div>
                        <div className="postAuthorAndTime">
                            <span className="author">{post.by}</span> is created this post at
                            <span className="time"> {new Date(post.time*1000).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPage;
