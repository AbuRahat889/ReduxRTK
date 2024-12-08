
import { FormEvent, useState } from 'react';
import './App.css'
import PostCard from './components/postCard';
import { post, useGetPostsQuery, useNewPostMutation } from './redux/api'

function App() {
  const { isError, isLoading, error, data, isSuccess } = useGetPostsQuery("")
  const [newPost] = useNewPostMutation();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  console.log(isError, isLoading, error, data, isSuccess);

  const handlesubmit = (e:FormEvent<HTMLElement>): void=> {

    e.preventDefault();
    const post:Post = {
      title, body,
      id:parseInt(Math.random()*1000),
      userId:parseInt(Math.random()*1000),
    }
    newPost(post);
    setTitle("");
    setBody("");
  }

  return (
    <div>
      <h1>this is test case</h1>

      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>

        <input type="text" placeholder='body' value={body}  onChange={(e)=>setBody(e.target.value)}/>

        <input type="submit" value="Add" />
      </form>

      {
        isLoading?<div className="div">Loading...</div> : data?.map(i=>(
          <PostCard key={i.id} post={i}/>
        ))
      }
    </div>
  )
}

export default App
