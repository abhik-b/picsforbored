import React, { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Post.module.css'
import {  motion } from 'framer-motion';

const Post=({title,image,thumbnail,height,width})=>{
        const [open,setOpen]=useState(false)
        
        return (
        <>      
        <div className={styles.post} onClick={()=>setOpen(true)}>
                {thumbnail.includes('http://') || thumbnail.includes('https://')
                        ?
                        <Image  src={thumbnail}
                                alt={title}
                                height={height} width={width}
                                ></Image>
                        :
                        <b>Click here to open this image</b>
                }   
        </div>
        {open &&
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  
                    className={styles.modal} onClick={()=>setOpen(false)}>
                <img className={styles.image} src={image}  alt="Picture not found" />
                <p style={{background:'#121212'}}>{title}</p> 
        </motion.div>
        }
        </>
        );
};
export default Post;