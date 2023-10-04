import { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion, useAnimate, useAnimation, useInView } from 'framer-motion';

import useScrollY from '@/hooks/useScrollY';
import ArrowUp from './ArrowUp.svg';
import styles from './Up.module.css';

const Up = (): JSX.Element => {
    const scrollY = useScrollY();
    const controls = useAnimation();

    // const [scope, animate] = useAnimate();
    // useEffect(() => {
    //     // if (isInView) {
    //      animate(scope.current, { opacity: scrollY / document.body.scrollHeight});
    //     // }
    //     // controls.start({opacity: scrollY / document.body.scrollHeight});
    // }, [scrollY]);

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
        <motion.button
            // ref={scope}
            className={styles.buttonUp}
            onClick={scrollToTop}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <ArrowUp />
        </motion.button>
    );
};

export default Up;
