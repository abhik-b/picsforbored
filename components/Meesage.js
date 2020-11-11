import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Message=({})=>{
  const [open,setOpen]=useState(false)
        return (
            <>
    <div className="help" onClick={()=>setOpen(!open)}>i</div>
    <AnimatePresence>
    {open && 
        <motion.div
        data-testid="message"
        onClick={()=>setOpen(false)}
        initial={{x:-1000}}
        exit={{x:-1000}}
        animate={{x:0}}
        className="message">
        <h3 style={{textAlign:'center'}}>Help</h3>
        <p>Press any topic to get pics of that topic, </p>
        <p>Scroll down or up to get more pics</p>
        
        <p> Once you have seen all pics : Press <b>again and again </b> 
         that same topic to  <b> get more pics of that topic</b>
        </p>
        <p>Tap on any image to open it in it's <b>highest quality available</b></p>
        <p>Tap on anywhere to close a opened image</p>
        <b style={{fontSize:"10px"}}>*All pics here belong to numerous subreddits</b>

        </motion.div>
    }
    </AnimatePresence>
    </>
        );
};
export default Message;