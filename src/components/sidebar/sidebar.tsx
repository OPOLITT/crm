import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import fakePhoto from '../../assets/images/dashboard/profile.png';
import dashboardIcon from '../../assets/images/dashboard/icons/dashboard.svg';
import tasksIcon from '../../assets/images/dashboard/icons/tasks.svg';
import EmailIcon from '../../assets/images/dashboard/icons/email.svg';
import ContactsIcon from '../../assets/images/dashboard/icons/contacts.svg';
import DealsIcon from '../../assets/images/dashboard/icons/deals.svg';
import chatIcon from '../../assets/images/dashboard/icons/chat.svg';
import settingIcon from '../../assets/images/dashboard/icons/settings.svg';
import toggleSidebarIcon from '../../assets/images/dashboard/icons/toggle.svg';
import { Dashboard } from '../../pages/firstpage/statistic/dashboard';
import { Deal } from '../../pages/deal/deal';
import { Notfound } from '../../pages/notfound/notfound';

import styles from './sidebar.module.scss';

export const Sidebar = () => {
    const [sizeSidebar, setSizeSidebar] = React.useState<string>('0 0 255px');
    const [navPadding, setNavPadding] = React.useState<string>('0 0 0 25px');


    const [toggled, setToggled] = React.useState<boolean>(true);
    const changeToggle = () => {
        setToggled(!toggled);
         toggled ? setSizeSidebar('0 0 70px') : setSizeSidebar('0 0 255px');
         toggled ? setNavPadding('0') : setNavPadding('0 0 0 25px');
    };

    const centerStyle:object = {display: 'flex', flexDirection: 'column', alignItems: 'center'};

    return (
        <>
        <div  className={styles.navbar} style={{padding: navPadding}}  >

                {toggled ? 
                (<div className={styles.title}>
                    <span className={styles.title__text}>SaaS Comp</span>
                </div>) 
                : 
                (<div className={styles.title} style={centerStyle}>
                    <span className={styles.title__text}>SaaS</span>
                </div>)}
                
                    

                {toggled ? 
                (<div className={styles.profile}>
                    <img className={styles.profile__photo} src={fakePhoto} alt="profile"/>
                    <div className={styles.profile__info}>
                        <span className={styles.profile__name}>Sierra Ferguson</span>
                        <span className={styles.profile__mail}>s.ferguson@gmail.com</span>
                    </div>

                </div>)             
                :             
                (<div className={styles.profile} style={centerStyle}>
                    <img className={styles.profile__photo} src={fakePhoto} alt="profile" style={{margin: '0',}}/>
                </div>)}
                

                {/* Навигация по сайту(лист) */}
                {toggled ? 
                (<ul className={styles.list}>
                    
                    <Link to='/' className={styles.list__item}>
                        <img src={dashboardIcon} alt="icon" />
                        <span >Статистика</span>
                    </Link>

                    <Link to='/deal' className={styles.list__item}>
                        <img src={tasksIcon} alt="icon" />
                        <span >Сделки</span>
                    </Link>

                    <li className={styles.list__item}>
                        <img src={EmailIcon} alt="icon" />
                        <span>Email</span>
                    </li>

                    <li className={styles.list__item}>
                        <img src={ContactsIcon} alt="icon" />
                        <span>Contacts</span>
                    </li>

                    <li className={styles.list__item}>
                        <img src={chatIcon} alt="icon" />
                        <span>Chat</span>
                    </li>

                    <li className={styles.list__item} style={{position:'relative'}}>
                        <img src={DealsIcon} alt="icon" />
                        <span>Deals</span>
                        <div className={styles.lineAfterLine}>.</div>
                    </li>
                    
                </ul>) 

                :

                (<ul className={styles.list} style={centerStyle}>
                    <li className={styles.list__item}>
                        <img src={dashboardIcon} alt="icon" style={{width: '24px',}}/>
                    </li>

                    <li className={styles.list__item}>
                        <img src={tasksIcon} alt="icon" style={{width: '24px',}}/>
                    </li>

                    <li className={styles.list__item}>
                        <img src={EmailIcon} alt="icon" style={{width: '24px',}}/>
                    </li>

                    <li className={styles.list__item}>
                        <img src={ContactsIcon} alt="icon" style={{width: '24px',}}/>
                    </li>

                    <li className={styles.list__item}>
                        <img src={chatIcon} alt="icon" />
                    </li>

                    <li className={styles.list__item} style={{position:'relative',
                     }}>
                        <img src={DealsIcon} alt="icon" />
                        <div className={styles.lineAfterLine} style={{width: '70px',
                        }}>.</div>
                    </li>
                    
                </ul>)} 


                {toggled ? 
                (<div className={styles.settings}>
                    <img src={settingIcon} alt="icon" />
                    <span>Settings</span>
                </div>) 
                : 
                (<div className={styles.settings} style={centerStyle}>
                    <img src={settingIcon} alt="icon" />
                </div>)}
                
                
                {toggled ? 
                (<button type='button' onMouseDown={changeToggle} className={styles.toggleSidebar} role="link">
                    <img src={toggleSidebarIcon} alt="icon" />
                    <span>Toggle sidebar</span>
                </button>) 
            : 
            (<button type='button' onMouseDown={changeToggle} className={styles.toggleSidebar} role="link" style={centerStyle}>
                <img src={toggleSidebarIcon} alt="icon"  style={{width: '17px', height: '17px', margin: 0, border: '1px solid #109CF1'}}/>
            </button>)}
                
            </div>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/deal' element={<Deal/>}/>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
            </>
    );
};

