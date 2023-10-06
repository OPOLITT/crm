import React from 'react';

import { Completed } from '../status/completed/complete';
import { Ended } from '../status/ended/ended';
import { Active } from '../status/active/active';

import styles from './task.module.scss';




export const Task:React.FC = () => {
    const d = 5;

    return (

        <div className={styles.task}>

            <div className={styles.task__left}>

                <div className={styles.left__text}>
                    <span className={styles.left__title}>SDFSD</span>
                    <span className={styles.left__date}>Due date: <p className={styles.left__weight}>December 23, 2018</p> </span>
                </div>
                <div className={styles.fromWho}>
                    <div className={styles.fromWho__photo}/>
                    <div className={styles.fromWho__name}>George Fields</div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.right__class}>Reminder</div>
                <Completed/>
            </div>

        </div>

    );
};
