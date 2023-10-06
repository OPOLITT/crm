import React from 'react';

import { useAppDispatch } from '../../hook';
import { useAppSelector } from '../../hook';

import styles from './dealcreate.module.scss';
import { setCreateDeal } from '../../store/openDealSlice';

import { IValue } from '../../types/fordeal';


interface Props {
    value: IValue,
    setChangeDeal:React.Dispatch<React.SetStateAction<Boolean>>
  }

const Dealchange:React.FC<Props> = ({value, setChangeDeal}) => {
    const dispatch = useAppDispatch();
    console.log(value);
    
    
    return (
        <div className={styles.dealcreate}>
            <span>ИЗМЕНИТЬ ДЕЛО</span>
            <div className="addinformation">
                <span>Добавить клиента</span>

                <div className="clientblock block">
                    <span>Имя</span>
                    <input type="text"/>
                </div>
                <div className="clientblock block">
                    <span>Фамилия</span>
                    <input type="text"/>
                </div>
                <div className="clientblock block">
                    <span>Отчество</span>
                    <input type="text"/>
                </div>
                <div className="clientblock block">
                    <span>Дата рождения</span>
                    <input type="text"/>
                </div>
                <div className="clientblock block">
                    <span>Номер телефона</span>
                    <input type="text"/>
                </div>
                <div className="clientblock block">
                    <span>Серия паспорта</span>
                    <input type="text"/>
                </div>
                <div className="clientblock block">
                    <span>Номер паспорта</span>
                    <input type="text"/>
                </div>
                <div className="clientblock block">
                    <span>Дата выдачи</span>
                    <input type="text"/>
                </div>
                <div className="clientblock block">
                    <span>Адрес проживания</span>
                    <input type="text"/>
                </div>  
                <div className="clientblock block">
                    <span>Место работы</span>
                    <input type="text"/>
                </div> 

            </div>

            <button className={styles.cancel} onClick={() => setChangeDeal(false)}>cancel</button>
        </div>
    );
};

export {Dealchange};