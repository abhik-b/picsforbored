import { motion } from 'framer-motion';
import React from 'react';

const Button=({isSelected,bg,fg="#fff",changeSource,...props})=>{
return (

    <motion.div className='filter' 
    style={{background:bg,color:fg}}
    onClick={changeSource}>
    {props.children}
    {isSelected && 
    <motion.div style={{background:bg}} className='selected' layoutId='selected'></motion.div>
    }
    </motion.div>
    

);
};
export default Button;