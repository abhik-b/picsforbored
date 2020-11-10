import { NextSeo } from 'next-seo';
import Head from 'next/head'
import React,{ useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Post from '../components/Post'
import styles from '../styles/Home.module.css'
import Message from '../components/Meesage'
import { AnimateSharedLayout } from 'framer-motion';

export async function getStaticProps() {
  try {
    const res = await fetch('https://www.reddit.com/r/memes.json')
    const posts = await res.json()
    return {
      props: {
        posts:posts.data.children,
      }, // will be passed to the page component as props
    }
  } catch (error) {
    const err=error
    return {
      props: {
        posts:[],
        err:JSON.stringify(err)
      }, // will be passed to the page component as props
    }
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
       }).catch(err=>{console.log(err)})
    }else{
    fetch(`https://www.reddit.com/r/${source}.json`)
    .then(res=>res.json())
    .then((body)=>{
        setPosts(body.data.children)
        const newhist=history
        newhist[source]=body.data.after 
        sethistory(newhist)
     }).catch(err=>{console.log(err)})
    }
},[call])
  return (
    <>
    <NextSeo
      title="Pics/Memes to kill time , boredom , refresh mood"
      description="Are you bored ? Want some memes ? Mood Off ? Kill your time with thousands memes/pics of nature,art and many more."
      canonical="https://picsforbored.vercel.app"
      openGraph={{
        type:'website',
        url: 'https://picsforbored.vercel.app',
        title: 'Pics/Memes to kill time,boredom',
        description: 'Memes/pics of nature,art and many more to kill your time,cure boredom and refresh mood',
        images: [
          {
            url: 'https://i.ibb.co/2YcrHTP/og800600.webp',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://i.postimg.cc/6pVd4bBt/og900800.png',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
         
        ],
        site_name: 'PicsForBored',
      }}
      twitter={{
        handle: '@_abhikB',
        site: '@_abhikB',
        cardType: 'summary_large_image',
      }}
    />
      <Message/>
      {props.err && <h1>Something went wrong</h1>}
   <div className={styles.grid}>
     <Filter setCall={setCall} setSource={setsource}/>
     <div className={styles.container}>
       <AnimateSharedLayout>
     {posts.map((p,index)=>{
       if(index>1&& p.data.post_hint==='image'){

       return   <Post
                  key={p.data.name} title={p.data.title} 
                  image={p.data.url_overridden_by_dest}
                  thumbnail={p.data.thumbnail}
                  created={p.data.created}
                />
       }
     })}
     </AnimateSharedLayout>
     </div>
   </div>
   </>
  )
}

// url: 'https://ibb.co/CsVyDfv',