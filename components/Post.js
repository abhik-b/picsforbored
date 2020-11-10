import React, { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Post.module.css'
import { AnimatePresence, motion } from 'framer-motion';

const Post=({title,image,thumbnail})=>{
        const [open,setOpen]=useState(false)
        function openInNewWindow(image) {
                window.open(image,'Image',"resizable=1") 
        }
        return (
        <>
        <motion.div layoutId='post' className={styles.post} onClick={()=>setOpen(true)}>
        {thumbnail.includes('http://') || thumbnail.includes('https://')
        ?
        <Image
                src={thumbnail}
                alt="Picture not found"
                layout='fill'

                loading='lazy'
                unoptimized={false}
        ></Image>
        :
        <b>Click here to open this image</b>
        }   
        </motion.div>
        <AnimatePresence>
        {open &&
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layoutId='post' className={styles.modal} onClick={()=>setOpen(false)}>
       
        <img className={styles.image} src={image}  alt="Picture not found" />
        <p style={{background:'#121212'}}>{title}</p> 
        <p className="footer">click anywhere to close this image</p>
        </motion.div>
        }
        </AnimatePresence>
        </>
        );
};
export default Post;