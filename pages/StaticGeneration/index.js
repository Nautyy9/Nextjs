import React from 'react'
import Link from 'next/link'
function index() {
  return (
    // 
    <div>index<br></br>
    {/* {we can see the users chunk and user.json which is from Home is seen in netowork of this page that means that we click the the link the ui is rendered instantaneously without having to fetch data in users page from server} 
        ** this concept is only for build not for dev
          when we visit to users page there will be no network request as it is prefetched because we've used link to home in this page
          ** this is defualt behaivour of next js for static generation
          ** since here is static generation so shouldn't the Home.html file in server folder be generated in this file ?
          ans--> no, it will only serve when we directly navigate to Home page i.e, (StaticGeneration/home) not when we call (staticGeneration/home) from a link, the link will only serve chunk and json file not the html 
          chunk and json file are required to build ui on client side */}
    <Link href="/StaticGeneration/home">
      <a>Home</a>
    </Link>
    </div>
  )
}
export default index