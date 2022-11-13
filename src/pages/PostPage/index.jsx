import React from 'react';
import './PostPage.css'
import {useSelector} from "react-redux";
import axios from "axios";
import Comment from "../../components/Comment";
import {useHistory} from "react-router-dom";
const PostPage = () => {
    const post = useSelector((state) => state.posts.openedPost)
    const history = useHistory()
    const [comments, setComments] = React.useState([])

    let getNewComments = (postKids) => {
           if (postKids !== undefined) {
               Promise.all(postKids.map((el) =>
                   axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json?print=pretty`)
               ))
                   .then((values) =>
                       values.map((el) => el.data )
                   )
                   .then((res) => setComments(res.filter(el => !el.deleted)))
                   .catch(function(err) {
                       console.log(err.message)
                   })
           }
    }
    React.useEffect(() => {
        getNewComments(post.kids)
    },[])
    return (
        <div className='postPage'>
            <button className={'defaultBtn'} onClick={() => history.push('/')} >go back</button>
            <button className={'defaultBtn'} onClick={() => getNewComments(post.kids)} >refresh comments</button>
            <div className="postTitleAndLink">
                <h2>{post.title}</h2>
                <span><a href={post.url}>click here to see full post</a></span>
            </div>
            <div className="postAuthorAndTime">
                <span className="author">{post.by}</span> is created this post at
                <span className="time"> {new Date(post.time*1000).toLocaleString()}</span>
            </div>

                <div className="comments">
                    <span style={{color: 'red'}}>  страница подгрузки комментариев кнопка принудительного обновления комментариев</span>
                    <p>number of comments to the news: {post.descendants}</p>
                    {comments.map(comment =>
                        <Comment comment={comment} key={comment.id} />)
                    }
                </div>

        </div>
    );
};

export default PostPage;
