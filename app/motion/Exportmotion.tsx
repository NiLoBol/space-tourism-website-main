import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    children : React.ReactNode;
    className?: string
  
}

export const Zoomin = (props: Props) => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={props.className}
            >
                {props.children}
            </motion.div>
        </div>
    );
};
