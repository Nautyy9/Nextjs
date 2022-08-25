import Link from 'next/link'
import React from 'react'

function index({comments}) {
  return (
    <div>{
        comments.map(comment=> {
            return(
                <div key={comment.id}>
                    <Link href={`comments/${comment.id}`}>
                        <h2>{comment.id} {comment.name}</h2>
                    </Link>
                    <hr/>
                </div>
            )
        })
    }</div>
  )
}

export default index

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json();

    return {
        props: {
            comments: data
        }
    }
}