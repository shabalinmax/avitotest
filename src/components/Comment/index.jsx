import React from 'react';
import './Comment.css'
import axios from "axios";

const Comment = ({comment}) => {
    let [openNestedComments, setOpenNestedComments] = React.useState([])
    let [isLoadMoreComments, setIsLoadMoreComments] = React.useState(false)
    const uploadComments = () => {
        setIsLoadMoreComments(true)
        Promise.all(comment.kids.map((postKids) => {
            return axios.get(`https://hacker-news.firebaseio.com/v0/item/${postKids}.json?print=pretty`)
        }))
            .then((values) => values.map((el) =>
                setOpenNestedComments([el.data]))
            )
            .catch(function(err) {
                console.log(err.message)
            })
    }
    const nestedComments = (openNestedComments).map(comment => {
        return <Comment key={comment.id} comment={comment} type="child"/>
    })
    React.useEffect(() => {
        console.log(openNestedComments)
    },[openNestedComments])
    return (
        <div className="commentWrapper" key={comment.id}>
            <p>
                <span style={{color: '#00608b'}}> {comment.by} </span>
                at
                <span style={{color: '#00608b'}}> {new Date(comment.time * 1000).toLocaleString()}</span>
            </p>
            <div className='comment' dangerouslySetInnerHTML={{__html: comment.text}}/>
            <button
                className={'defaultBtn'}
                onClick={() => uploadComments()}
                style={comment.kids !== undefined && !isLoadMoreComments ? {display: 'block'} : {display: 'none'}}
            >
                click to more
            </button>
            {nestedComments}
        </div>
    );
};

export default Comment;
