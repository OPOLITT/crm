import React from 'react';

import { useAppDispatch } from '../../hook';
import { useAppSelector } from '../../hook';

import styles from './dealcreate.module.scss';
import { setCreateDeal } from '../../store/openDealSlice';
import { addDeal } from '../../store/DealsSlice';


import { IValue } from '../../types/fordeal';


interface Props {
    setChangeDeal:React.Dispatch<React.SetStateAction<Boolean>>
  }

const Dealcreate:React.FC<Props> = ({setChangeDeal}) => {
    const dispatch = useAppDispatch();
    const formDeal = React.useRef(null)
    const value = {}
    const addDeal = () => {

        console.log(formDeal.current);
        
    }
    
    return (
    <div className={styles.wrapper}>
        <div className={styles.dealcreate}>
            
            <span className={styles.dealcreate__title}>Добавляй сделку</span>

            <div className={styles.addinformation}>
                <form className={styles.form} action="" ref={formDeal}>
                    <span>Добавить клиента</span>

                    <div className={styles.clientblock}>
                        <span className={styles.clientblock__title}>Имя</span>
                        <input className={styles.clientblock__input} type="text" placeholder=''/>
                    </div>
                    <div className={styles.clientblock}>
                        <span className={styles.clientblock__title}>Фамилия</span>
                        <input className={styles.clientblock__input} type="text" placeholder=''/>
                    </div>
                    <div className={styles.clientblock}>
                        <span className={styles.clientblock__title}>Имя</span>
                        <input className={styles.clientblock__input} type="text" placeholder=''/>
                    </div>
                    <div className={styles.clientblock}>
                        <span className={styles.clientblock__title}>Фамилия</span>
                        <input className={styles.clientblock__input} type="text" placeholder=''/>
                    </div>
                    <div className={styles.clientblock}>
                        <span className={styles.clientblock__title}>Имя</span>
                        <input className={styles.clientblock__input} type="text" placeholder=''/>
                    </div>
                    <div className={styles.clientblock}>
                        <span className={styles.clientblock__title}>Фамилия</span>
                        <input className={styles.clientblock__input} type="text" placeholder=''/>
                    </div>

                    м



                    <button className={styles.buttonSumbit} type='button' onClick={(e) => addDeal()
                    }>Добавить дело</button>
                </form>
            </div>

            <button className={styles.cancel} onClick={() => setChangeDeal(false)}>cancel</button>
        </div>

        <div className={styles.chat}>asd</div>
    </div>
    );
};

export {Dealcreate};