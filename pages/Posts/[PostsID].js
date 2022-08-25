import React from 'react'

function posts({post}) {
  return (
    <div>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default posts
// -----> Defination
//this getStaticPath() is used to preinform js that what are the possible vaues for the [postsID] 
// it is neccessary as browser or next don't know the possible values for [postsID] that we are looking for 
// in our example since we've sliced only 3 values will define 3 params 

//----> schema
// return -> object == paths, fallback -> [{}] == params -> {} == dynamicroute : value

export async function getStaticPaths() {
  return{
    paths: [
      {
        params: {PostsID: '1'}
      },
      {
        params: {PostsID: '2'}
      },
      {
        params: {PostsID: '3'}
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context)  {

    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostsID}`)
    const data = await response.json()

    return {
        props : {
            post: data
        }
    }
}