import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Message=()=>{
    const [open,setOpen]=useState(true)
        return (
    <>
    {open && 
        <motion.div
        data-testid="message"
        onClick={()=>setOpen(false)}
        initial={{y:1000}}
        exit={{y:400}}
        animate={{y:0,transition:{delay:5}}}
        className="message">
        <h1>Help</h1>
        <p>Press any topic to get pics of that topic, </p>
        <p>Scroll down or up to get more pics</p>
        <p> Once you have seen all pics : Press <b>again and again</b> 
        that same topic to  <b> get more pics of that topic</b>
        </p>
        <p>Tap on any image to open it in it's <b>full size in new window</b></p>
        </motion.div>
    }
    </>

        );
};
export default Message;