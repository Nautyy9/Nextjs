import React from 'react'
import {useRouter} from 'next/router'

function comment({comment}) {

    const router = useRouter();
//this router runs only when user enter the dynamic url it shows loading only when the page is not defined as params in getStaticPaths() 
//it will run until the page data from server is fetched 
//with navigation it won't show this as json is prerendered before in comments page

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

    //
    // const response = await fetch(`https://jsonplaceholder.typicode.com/comments/`)
    // const data = await response.json();

    // const path = data.map( post => {
    //     paths: [
    //     {
    //         params: {commentID: `${post.id}`}
    //     }
    //     ]
    //
    // })
    


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
    // -->fallback true will prerender the html page to server in build on running build same as fallback false
    // -->fallback true will not render 404 page if it is not defined in params in getStaticPath() instead will serve as fallback version (if sepicied for few instance until data is fetched from server) 
    //    of the page on the first request to such a path (in network tab the html of it on first render shows only Loading... and again rendering will show the actual html page)  
    // --> in the build folder the next js will statically generate the requested path HTML and JSON , this includes running getStaticProps
    // --> after generation of HTML and JSON in build the browser recieves the JSON for the generated path, due to this the page screen changes from FALLBACK PAGE (Loading...) to FULL PAGE (content page)
    // --> with nav type call the page render on scroll and when scroll the html and json is created in build server and json of that id is generated in network and removes the fallback LOADING... when click of specific page (shows FUll page)

    // ** because of fallback the loading is shown in preview of network at first render but as we know the html and json is generated first so the content is shown and when refresehing same is loaded in preview

    // ** what if the page is not available in the api of db? 
    // -> the html and json page will be created but the content in json is empty so will apply a condition that if data === null return 404 as the fallback true will always create new html and json page  
    fallback: true
    }
}

export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentID}`)
    const data = await response.json();

    if(!data.id){
        return{
            notFound: true
        }
    }

    return {
        props: {
            comment: data
        }
    }
}