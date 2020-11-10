import { motion } from 'framer-motion';
import React from 'react';

const Button=({testid,isSelected,bg,fg="#fff",changeSource,...props})=>{
return (

    <motion.div className='filter' 
    data-testid={testid}
    style={{background:bg,color:fg}}
    whileTap={{scale:0.8}}
    onClick={changeSource}>
    {props.children}
    {isSelected && 
    <motion.div style={{background:bg}} className='selected' layoutId='selected'></motion.div>
    }
    </motion.div>
    

);
};
export default Button;