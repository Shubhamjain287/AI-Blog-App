import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

const Blog = () => {

  const { postId } = useParams();
  const [post, setPost] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
        try {
            const res = await axios.get(`/post/single/${postId}`);
            setPost(res.data.Post)
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }
    fetchBlog();
    
}, []);

  return (
    <>
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {
            error && <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"> Post Not Found </h1>
        }
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={post?.thumbnail ? post.thumbnail : "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"} />
        <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{post?.title}</h1>
        <p className="leading-relaxed text-gray-200 mb-8">
            {post?.meta}
        </p>
        <p className="leading-relaxed text-left text-gray-200 mb-8">
            <span className='text-gray-100' dangerouslySetInnerHTML={{__html : (post?.content)}}></span>
        </p>
        {/* <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
        </div> */}
        </div>
    </div>
    </section>
    </>
  )
}

export default Blog;