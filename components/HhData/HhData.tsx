import Card from '../Card';
import { IHhProps } from './HhData.props';

import HTag from '../HTag';
import Tag from '../Tag';
import Star from './Star.svg';

import styles from './HhData.module.css';
import getPrice from '@/helpers/getPrice';

const HhData = ({ count, category, juniorSalary, middleSalary, seniorSalary }: IHhProps): JSX.Element => {
    return (
        <div>
            <div className={styles['hhTagTitle']}>
                <HTag tag='h3'>Vacancy - {category}</HTag>
                <Tag color='red'>hh.ru</Tag>
            </div>
            <div className={styles['hhData']}>
                <Card className={styles['hhStat']}>
                    <div className={styles['hhStatTitle']}>All vacancy</div>
                    <div className={styles['hhStatCount']}>{count}</div>
                </Card>
                <Card className={styles['salaryCards']}>
                    <div className={styles['salaryCard']}>
                        <div className={styles['hhStatTitle']}>Junior</div>
                        <div className={styles['hhStatSalary']}>{getPrice(juniorSalary)}</div>
                        <div className={styles['hhStatRating']}>
                            <Star className={styles['fillStart']}/>
                            <Star/>
                            <Star/>
                        </div>
                    </div>
                    <div className={styles['salaryCard']}>
                        <div className={styles['hhStatTitle']}>Middle</div>
                        <div className={styles['hhStatSalary']}>{getPrice(middleSalary)}</div>
                        <div className={styles['hhStatRating']}>
                            <Star className={styles['fillStart']}/>
                            <Star className={styles['fillStart']}/>
                            <Star/>
                        </div>
                    </div>
                    <div className={styles['salaryCard']}>
                        <div className={styles['hhStatTitle']}>Senior</div>
                        <div className={styles['hhStatSalary']}>{getPrice(seniorSalary)}</div>
                        <div className={styles['hhStatRating']}>
                            <Star className={styles['fillStart']}/>
                            <Star className={styles['fillStart']}/>
                            <Star className={styles['fillStart']}/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default HhData;
