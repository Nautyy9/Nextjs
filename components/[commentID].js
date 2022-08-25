import React from 'react'
import {useRouter} from 'next/router'

function comment({comment}) {

    const router = useRouter();

    if(router.isFallback){
        return <div>Loading...</div>
    }

  return (
    <div>
        <h1>{comment.id} {comment.name}</h1>
    </div>
  )
}

export default comment

export async function getStaticPaths() {
    return{
        paths: [
        {
            params: { commentID: '1'}
        },
        {
            params: { commentID: '2'}
        },
        {
            params: { commentID: '3'}
        }
    ],
    fallback: true
    }
}

export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentID}`)
    const data = await response.json();

    return {
        props: {
            comment: data
        }
    }
}