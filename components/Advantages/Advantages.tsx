import HTag from "../HTag";
import { IAdvantagesProps } from "./Advantages.props";

import CheckIcon from './Check.svg';

import styles from './Advantages.module.css';

const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => {
    return(
        <div className={styles['Advantages']}>
            <p>Advantages</p>
            {advantages.map(a => {
                return (
                    <div key={a._id} className={styles['advantage']}>
                        <CheckIcon />
                        <div>
                            <HTag tag="h3">{a.title}</HTag>
                            <p>{a.description}</p>
                        </div>
                    </div>
                );
            })}
            <p>
                When completing another project over schedule, a specialist always asks himself a question about
                the possibilities of the future. The thing about professional designers is that they are flexible.
                Today a logo for a new company is being developed, and tomorrow it will be possible to switch to
                illustrations for a cult book.
            </p>
        </div>
    );
};

export default Advantages;
