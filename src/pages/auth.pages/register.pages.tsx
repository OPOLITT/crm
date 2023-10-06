import React from 'react';

import authManSvg from '../../assets/images/auth/auth.svg';   

import styles from './auth.module.scss';


export const Register:React.FC = () => {

    // --- Скрытие / Открытие просмотра пароля
    const [passwordShow, setPasswordShow] = React.useState<boolean>(true);
    const [passwordConfirmShow, setPasswordConfirmShow] = React.useState<boolean>(true);

    const togglePassword = ():void => {
        setPasswordShow(!passwordShow);
    };
    const togglePasswordConfirm = ():void => {
        setPasswordConfirmShow(!passwordConfirmShow);
    };
    // ----------------------------------------

    return (

    <div className={styles.auth}>

        <div className={styles.auth__authLeftBlock}>

            <div className={styles.auth__wrp}>
                <h1 className={styles.authLeftBlock__title}>Sign Up</h1>

                <form action="" className={styles.authLeftBlock__form}>
                    <input type="text" placeholder='Email' className={styles.form__input}/>

                    <div className={styles.passwords}>
                        <input type={passwordShow ? `password` : `text`} placeholder='Password' className={styles.form__input}/>
                        <input type='button' onMouseDown={togglePassword} className={styles.passwords__toggle}/>
                    </div>

                    <div className={styles.passwords}>
                        <input type={passwordConfirmShow ? `password` : `text`} placeholder='Confirm password' className={styles.form__input}/>
                        <input type='button'  onMouseDown={togglePasswordConfirm} className={styles.passwords__toggle}/>
                    </div> 

                    <label htmlFor="title" className={styles.form__saveAccessText}> I accept our Terms of Service and Privacy Policy
                        <input type="checkbox" id="title" className={styles.form__saveAccessCheckbox}/>
                    </label>

                    <button type='submit' className={styles.form__button}>Sing in</button>
                </form>

                <p className='moveRegister__text'>Already have an account? <span className={styles.moveRegister__button}>Sign In</span></p>

        </div>

        </div>

        <div className={styles.auth__rightBlock}>
            <div className={styles.rightBlock__wrp}>
                <img src={authManSvg} className={styles.rightBlock__photo} alt="" />
                <h1 className={styles.rightBlock__title}>Manage everything in one place</h1>
                <span className={styles.rightBlock__text}>Accusam noluisse mel et. Ius duis menandri ne, rebum exerci ad his. Quo at tollit veniam assueverit.</span>
            </div> 
        </div>

    </div>



    );
};

