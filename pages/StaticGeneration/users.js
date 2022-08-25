import React from 'react'
import Users from '../../components/Users'

function home({users}) {
  return (
    <div>
    {users.map((val, key) => {
        //return jaruri hai in map else no data will be visible 

        //we can create presentational comp and it must not be under pages folder as pages folder provide some special access like getStaticProps() and routes which is not needed 
        //by presentational comp , they just simply show the data so we should create a new folder in our root directory and there we should sppecify presentational components
        return (
            <div key={val.id}>
                {<Users users={val}/>} 
        </div>)
    })}
    </div>
  )
}
export default home;

// func getStaticProps() runs on server side --> this is reason because we see the fetch data in terminal instead of browser
// it never run on client side
// due to which the code written inside it never include in js bundle that is sent to browser
// can write server side code directly into this func like of node js
//used only for pre-rendering and not for client side fetching
//only bw called within a page
// must return an object that contain props key which is an object too
//run at build time , but in development(npm run dev) it run on every request
// it generate html, js(chunk) and json file for server folder in .next that means it is fetched from server 


//it prerenders hence its chuck and json file can be used by other file (in pages) with link but cannot call it directly
//if we navigate to the page using getStaticProps from another page using route then the page using getStaticPorps() i.e, this page is created as *client side using js and json which is prefetched from server called by it.
export async function getStaticProps() {
    const response =  await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    console.log(data);

    return {props: {
        users: data
    }}
}