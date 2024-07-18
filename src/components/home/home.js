import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredPosts, fetchPosts, setSearchTerm } from '../../store/postsSlice';
import Post from './../posts/post.js'

function Home() {

  const post = useSelector((state) => state.posts);
  const {isLoading, error, searchTerm, selectedSubreddit} = post;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  

  if (error) {
    return (
      <div className='error'>
        <h2>Failed to load posts</h2>
        <button type='button' className='btn btn-primary'>Try again</button>
      </div>
    )
  }

  
  return (
    <div>
      {posts.map((post, index) => 
       (
        <Post 
        key={post.id}
        post={post}
        />
      ))}
    </div>
  )
}

export default Home
