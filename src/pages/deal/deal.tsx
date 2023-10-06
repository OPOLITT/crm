import React from 'react';

import { Search } from '../../components/search/search';
import { Dealcreate } from './dealcreate';
import { Dealitem } from './dealitem';

import { IValue } from '../../types/fordeal';

import { useAppSelector } from '../../hook';

import styles from './deal.module.scss';



const Deal:React.FC = () => {
    const deals = useAppSelector(state => state.DealsArr.Deals)
    const [createDeal, setCreateDeal] = React.useState<Boolean>(false)



    
    return (
        <div className={styles.deal}>
                    {createDeal ? <Dealcreate setChangeDeal={setCreateDeal}/>  : ''}
            <Search/>
            
            <div className={styles.deal__block}>

                <div className="deal__parametrs">
                    <button onClick={() => setCreateDeal(true)}>Добавить сделку</button>
                </div>

                <div className={styles.deal__table}>
                    <ul className={styles.table__upcase}>
                        <li className={styles.upcase__item}>№</li>
                        <li className={styles.upcase__item}>Клиент</li>
                        <li className={styles.upcase__item}>Товар</li>
                        <li className={styles.upcase__item}>Рассрочка</li>
                        <li className={styles.upcase__item}>Остаток долга</li>
                        <li className={styles.upcase__item}>Текущий долг</li>
                        <li className={styles.upcase__item}>Срок</li>
                        <li className={styles.upcase__item}>Дата выдачи</li>
                        <li className={styles.upcase__item}>Дата платежа</li>
                        <li className={styles.upcase__item}>Статус</li>
                        <li className={styles.upcase__item}>Партнер</li>
                    </ul>

                    {deals.map((value) => {  
                                        
                        return (
                            <Dealitem 
                                value = {value}
                            />
                        );
                    })}

                </div>

            </div>

        </div>
    );
};

export {Deal};