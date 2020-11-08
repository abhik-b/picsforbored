import { AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import React,{ useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Post from '../components/Post'
import styles from '../styles/Home.module.css'
import Message from '../components/Meesage'

export async function getStaticProps() {
  const res = await fetch('https://www.reddit.com/r/memes.json')
  const posts = await res.json()
  return {
    props: {posts:posts.data.children}, // will be passed to the page component as props
  }
}
export default function Home(props) {
  const [history, sethistory] = useState({})
  const [call, setCall] = useState(false)
  const [source, setsource] = useState('memes')
  const [posts,setPosts]= useState(props.posts)
  
  useEffect(()=>{
    setCall(false)

    if(history[source]){
      fetch(`https://www.reddit.com/r/${source}.json?after=${history[source]}`)
      .then(res=>res.json())
      .then((body)=>{
          setPosts(body.data.children)
          const newhist=history
          newhist[source]=body.data.after 
          sethistory(newhist)
       })
    }else{
    fetch(`https://www.reddit.com/r/${source}.json`)
    .then(res=>res.json())
    .then((body)=>{
        setPosts(body.data.children)
        const newhist=history
        newhist[source]=body.data.after 
        sethistory(newhist)
     })
    }
},[call])
  return (
    <>
    <Head>
    <title>PicsWorld</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This page has a lot of memes,art,funny and other" />
    </Head>
      <Message/>
   <div className={styles.grid}>
     <Filter setCall={setCall} setSource={setsource}/>
     <div className={styles.container}>
     {posts.map((p,index)=>{
       if(index>1&& p.data.post_hint==='image'){

       return   <Post
                  key={p.data.name} title={p.data.title} 
                  image={p.data.url_overridden_by_dest}
                  created={p.data.created}
                />
       }
     })}
     </div>
   </div>
   </>
  )
}
