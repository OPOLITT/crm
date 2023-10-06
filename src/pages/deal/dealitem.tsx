import React from 'react';

import { Search } from '../../components/search/search';

import { useAppDispatch } from '../../hook';
import { useAppSelector } from '../../hook';

import styles from './deal.module.scss';
import { Dealchange } from './dealchange';
import { IValue } from '../../types/fordeal';
import { Completed } from '../../components/status/completed/complete';

interface Props {
    value: IValue,
  }


const Dealitem:React.FC<Props> = ({value, }) => {
    const dispatch = useAppDispatch();
    const createDealStatus = useAppSelector(state => state.createDealStatus.createDealStatus)
    const [changeDeal, setChangeDeal] = React.useState<Boolean>(false)
    
    return (
        <>
        {changeDeal ? <Dealchange 
        value={value}
        setChangeDeal={setChangeDeal}/> 
         : ''}
        <ul className={styles.table__items}>
            <li className={styles.upcase__item}>{value.dept_num}</li>
            <li className={styles.upcase__item}>{value.borrower.first_name} {value.borrower.middle_name}</li>
            <li className={styles.upcase__item}>{value.product.debt_term}</li>
            <li className={styles.upcase__item}>{value.product.debt_amount}</li>
            <li className={styles.upcase__item}>{value.product.partner}</li>
            <li className={styles.upcase__item}>{value.product.debt_term}</li>
            <li className={styles.upcase__item}>{value.product.debt_date}</li>
            <li className={styles.upcase__item}>{value.product.pay_date}</li>
            <li className={styles.upcase__item}>{value.product.pay_date}</li>
            <li className={styles.upcase__item}><Completed/></li>
            <li className={styles.upcase__item}>{value.guarantors.first_name}</li>
            <li className={styles.upcase__item} onClick={(e) => setChangeDeal(true)}>click</li>
        </ul>
        </>
    );
};

export {Dealitem};