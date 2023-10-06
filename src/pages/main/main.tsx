import React from 'react';

import { Sidebar } from '../../components/sidebar/sidebar';
import { Dashboard } from '../firstpage/statistic/dashboard';
import { Deal } from '../deal/deal';

import styles from './main.module.scss';



export const Main:React.FC = () => {

    
    const fds = 5;



    return (
        <div className={styles.main} >
            <div className={styles.dashboard}>
                <Sidebar/>
            </div>
        </div>
    );
};
