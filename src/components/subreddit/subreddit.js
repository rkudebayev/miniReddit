import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from '../../store/subredditSlice';
import "./subreddit.css";
import { setSelectedSubreddit, selectPosts } from '../../store/postsSlice';


function Subreddit() {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch])

  return (
    <div className='subreddits'>
     <ul className='list-group'>
        {subreddits.map((subreddit) => 
            <li 
                className={`${selectedSubreddit === subreddit.url && 'selected-subreddit'}`}
                key={subreddit.id}>
            <button type='button' onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
                <img src={subreddit.icon_img || "https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png"} alt='subreddit logo'/> 
                {subreddit.display_name}
            </button>
            </li>
        )}
        </ul>     
    </div>
  )
}

export default Subreddit;
