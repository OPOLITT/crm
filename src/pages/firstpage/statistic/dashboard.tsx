import React from 'react'; 

import styles from './dashboard.module.scss';

import { Statparametrs } from '../statparametrs/statparamets';
import { Search } from '../../../components/search/search';
import { Baar } from './f.tsx/f';
import { Abar } from './a/a';
export const Dashboard:React.FC = () => {

    
    const fds = 5;



    return (

            


            <div className={styles.main}>
               <Search/>
               <Statparametrs/>
               <div className={styles.graphics}>
                    <div className={styles.graphic__block}><Baar/></div>
                    <div className={styles.graphic__block}><Abar/></div>
                    <div className={styles.graphic__block}><Baar/></div>
                    <div className={styles.graphic__block}><Baar/></div>
               </div>
               
            </div>
        

    );
};
