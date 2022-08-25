import Link from 'next/link'
import React from 'react'

function index({posts}) {
  return (
    <div>
        {
            posts.map(post=> {
                return(
                    <div key={post.id}>
                        <Link href={`Posts/${post.id}`} passHref>
                            <h2>{post.id} {post.title}</h2>
                        </Link>
                        <hr/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default index


export async function getStaticProps () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props : {
            posts: data.slice(0,3)
        }
    }
}