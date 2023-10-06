import React from 'react';

import searchIcon from '../../assets/images/dashboard/icons/search.svg';
import notification from '../../assets/images/search/notifications.svg';

import styles from './search.module.scss';

export const Search = () => {
    const fo = 5;
    return (
        

                <div className={styles.search}>
                    <div className={styles.inputwrap}>
                        <img src={searchIcon} alt="icons" className={styles.icon}/> 
                        <input type="text" className={styles.input} placeholder='Global search'/>
                    </div>

                    <img src={notification} alt="notification" />
                </div>



    );
};

