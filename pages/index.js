
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    {/* {we are doing npm start so it is running the build folder and dom changes doesn't reflect until we do npm run build again or change to npm run dev} */}
     all talk about prerendering
      <hr/>
     <Link href='/Posts'>
      <a>Posts</a>
     </Link>
     <hr/>
     <Link href='/comments'>
      <a>Comments</a>
     </Link>
    </div>
  )
}
