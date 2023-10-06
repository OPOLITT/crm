import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import authManSvg from '../../assets/images/auth/auth.svg';   

import styles from './auth.module.scss';


interface myForm {
    email: string;
    password: number;
}

export const Login:React.FC = () => {
    const { register, handleSubmit,formState: {errors}} = useForm<myForm>({
        defaultValues: {
           
        }
    });

    const submit: SubmitHandler<myForm> = data => {
        console.log(data); 
    };
   
    // --- Скрытие / Открытие просмотра пароля
    const [passwordShow, setPasswordShow] = React.useState<boolean>(true);
    const togglePassword = ():void => {
        setPasswordShow(!passwordShow);
    };
    // ----------------------------------------


    return (
    <div className={styles.auth}>

        <div className={styles.auth__authLeftBlock}>

            <div className={styles.auth__wrp}>
                <h1 className={styles.authLeftBlock__title}>Sign In</h1>

                <form onSubmit={handleSubmit(submit)} className={styles.authLeftBlock__form}>
                    
                <div className={styles.inputwrp}>
                    <input className={styles.form__input} placeholder='email' {...register('email', 
                        {required: true, 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Неправильный адрес электронной почты'
                            }
                        })}/>
                        {errors.email ? (<p className={styles.error}>{errors.email.message}</p>) : null}
                    </div>

                    <div className={styles.passwords}>

                    <input className={styles.form__input} type={passwordShow ? 'password' : 'text'} placeholder='password' {...register('password', {
                        required: true, 
                        minLength: {
                            value: 6,
                            message: 'Минимум 6 символов'
                        }
                        })} />

                     {errors.password ? (<p className={styles.error}>{errors.password.message}</p>) : null}

                        <input type='button'  onMouseDown={togglePassword} className={styles.passwords__toggle}/>
                    </div>

                    <label htmlFor="title" className={styles.form__saveAccessText}> Keep me logged in
                        <input type="checkbox" id="title" className={styles.form__saveAccessCheckbox}/>
                    </label>

                    <button type='submit' className={styles.form__button}>Sing in</button>
                </form>

            <p className='moveRegister__text'>Keep me logged in <span className={styles.moveRegister__button}>Sing Up</span></p>

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

