import Tag from '../Tag';
import { ISkillsBlock } from './SkillsBlock.props';

import styles from './SkillsBlock.module.css';
import HTag from '../HTag';

const SkillBlock = ({ categories }: ISkillsBlock): JSX.Element => {
    return <div className={styles['SkillBlock']}>
        <HTag tag='h3'>Getting skills</HTag>
        <div className={styles['Skills']}>
            {categories.map(c => {
                return <Tag color='primary' key={`${c}_id`}>{c}</Tag>;
            })}
        </div>
    </div>;
};

export default SkillBlock;
