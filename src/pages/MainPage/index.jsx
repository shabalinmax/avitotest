import React from 'react';
import './MainPage.css'
const MainPage = ({lastHundredPosts, getPosts}) => {
    return (
        <div className={'MainPage'} >
            <button onClick={() => getPosts()} style={{margin: '15px'}} className='defaultBtn'>Обновить</button>
            {lastHundredPosts.map((post) =>
                <div  key={post.id} className={'post'} >
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
