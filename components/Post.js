import React, { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Post.module.css'

const Post=({image})=>{
        function open(image) {
                window.open(image,'Image',"resizable=1") 
        }
        return (
        <div className={styles.post}>
        <Image
        onClick={()=>open(image)}
        className={styles.image}
                src={image}
                alt="Picture not found"
                layout='fill'

                loading='lazy'
                unoptimized={true}
        ></Image>
        </div>
        );
};
export default Post;