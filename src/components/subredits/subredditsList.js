import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchSubreddits } from '../../store/subredditSlice';
import Subreddit from '../subreddit/subreddit';
import './subredditsList.css';

function SubreditsList() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchSubreddits())
    })

  return (
    <div className='subredditList'>
        <div className='subreddit-card'>
            <h2 className='text-center'>Subreddits</h2>
        <div className='subreddit'>
            <Subreddit />
        </div>
        </div>
    </div>
  )
}

export default SubreditsList;
