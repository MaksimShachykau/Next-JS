import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import useScrollY from '@/hooks/useScrollY';
import styles from './Up.module.css';
import ButtonIcon from '../ButtonIcon';

const Up = (): JSX.Element => {
    const scrollY = useScrollY();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: scrollY / document.body.scrollHeight,
        });
    }, [scrollY, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            className={styles.buttonUp}
            onClick={scrollToTop}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <ButtonIcon appearance='primary' icon='up' />
        </motion.div>
    );
};

export default Up;
