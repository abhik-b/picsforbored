import { AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import randomIndex from '../shared/randomIndex'
import {memes,nature,others,art,funny} from '../shared/sources'
import Button from './Button'




export default function Filter({setSource,setCall}) {
    const [selected,setSelected]=useState(0)
    function changeSource(list){
        setCall(true)
       setSource(list[randomIndex(list.length)])
       
    }
    return (
      <AnimateSharedLayout>
     <div className="filters">
       <Button bg="#93f" isSelected={selected===0}
          changeSource={()=>{
          changeSource(memes)
          setSelected(0)
          }}>Memes</Button>
       <Button bg="#0470db" isSelected={selected===1}
          changeSource={()=>{
         changeSource(nature)
         setSelected(1)
         }}>Nature</Button>
       <Button bg="#eecf22"fg="#000" isSelected={selected===2}
       changeSource={()=>
       {changeSource(art)
        setSelected(2)
       }}>Art</Button>
       <Button bg="#ee003b" isSelected={selected===3}
       changeSource={()=>{
         changeSource(funny)
         setSelected(3)
         }}>Funny</Button>
       <Button bg="#00e74d" isSelected={selected===4}
       changeSource={()=>{
         changeSource(others)
         setSelected(4)
         }}>Others</Button>
     </div>
     </AnimateSharedLayout>
    )
  }