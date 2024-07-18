import React from 'react';
import "./post.css";
import moment from 'moment';

function Post(props) {
    const {post} = props;
    console.log(post);
  return (
    <div className='posts-container' key={post.id}>
      <div className='post'>
        <h5>{post.title}</h5>
        <img src={post.url || post.thumbnail} alt='' />
        <hr />
        <div className='description'>
            <small className='author'> <i className="fa-regular fa-user"></i> {post.author}</small>
            <small className='time'>{moment.unix(post.created_utc).fromNow()}</small>
            <div className='like-block'>
            <button className='like'>
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
              {post.ups}
            <button className='dislike'>
                <i class="fa-regular fa-thumbs-down"></i>
            </button>
            </div>
            <button type='button'><i className="fa-regular fa-comment"></i> {post.num_comments}</button>
        </div>
      </div>
    </div>
  )
}

export default Post;
