import { AnimateSharedLayout } from 'framer-motion'
import React,{ useState } from 'react'
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
     <div className="filters" data-testid='filters'>
       <Button bg="#93f" isSelected={selected===0}  testid='1'
          changeSource={()=>{
          changeSource(memes)
          setSelected(0)
          }}>Memes</Button>
       <Button bg="#0470db" isSelected={selected===1} testid='2'
          changeSource={()=>{
         changeSource(nature)
         setSelected(1)
         }}>Nature</Button>
       <Button bg="#eecf22"fg="#000" isSelected={selected===2} testid='3'
       changeSource={()=>
       {changeSource(art)
        setSelected(2)
       }}>Art</Button>
       <Button bg="#ff0040" fg="#08012c"  isSelected={selected===3} testid='4'
       changeSource={()=>{
         changeSource(funny)
         setSelected(3)
         }}>Funny</Button>
       <Button bg="#00e74d" fg="#000" isSelected={selected===4} testid='5'
       changeSource={()=>{
         changeSource(others)
         setSelected(4)
         }}>Others</Button>
     </div>
     </AnimateSharedLayout>
    )
  }