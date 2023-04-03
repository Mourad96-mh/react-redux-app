import styles from './Auth.module.css'

import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from '../store';

const Auth = ()=> {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const dispatch = useDispatch()

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(enteredEmail && enteredPassword){
            dispatch(authActions.login());
        }else{
            dispatch(authActions.logout());
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['form-control']}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={emailChangeHandler}/>
            </div>
            <div className={styles['form-control']}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={passwordChangeHandler}/>
            </div>
            <div className={styles['form-actions']}>
                <button type="submit" >Login</button>
            </div>
        </form>
    )

};

export default Auth;