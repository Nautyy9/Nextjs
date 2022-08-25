import React from 'react'
//we can use pascal or kebab case file name convention as we like 
function Home({users}) {
  return (
    < >
            <h1>{users.name}</h1>
            <p>{users.email}</p>
    </>
  )
}

export default Home