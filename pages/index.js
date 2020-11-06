import Head from 'next/head'
import { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import styles from '../styles/Home.module.css'



export default function Home(props) {
  const [posts,setPosts]= useState([])
  useEffect(()=>{
    props.setCall(false)
    if(props.history[props.source]){
      fetch(`https://www.reddit.com/r/${props.source}.json?after=${props.history[props.source]}`)
      .then(res=>res.json())
      .then((body)=>{
          setPosts(body.data.children)
          const newhist=props.history
          newhist[props.source]=body.data.after 
          props.setHistory(newhist)
       })
    }else{
    fetch(`https://www.reddit.com/r/${props.source}.json`)
    .then(res=>res.json())
    .then((body)=>{
        setPosts(body.data.children)
        const newhist=props.history
        newhist[props.source]=body.data.after 
        props.setHistory(newhist)
     })
    }
},[props.call])
  return (
   <div>
     hi
     <Filter setCall={(value)=>props.setCall(value)} setSource={props.setSource}/>
     {posts.map((p,index)=>{
       if(index>1){
       return <div key={p.data.name}>
        <h1>{p.data.title}</h1>
        <img src={p.data.url_overridden_by_dest} height={100} width={100} alt='image' />
       </div>
       }
     })}
   </div>
  )
}
