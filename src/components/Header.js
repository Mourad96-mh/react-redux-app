
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store';

import styles from './Header.module.css'

const Header = ()=> {

    const auth = useSelector(state=> state.auth.isAuth);
    const dispatch = useDispatch();

    const logOutHandler = ()=> {
        dispatch(authActions.logout())
    }

    return (
        <header className={styles.header}>
            <h2 className={styles['header-heading']}>Redux Auyh</h2>
            {auth && <ul className={styles.nav}>
                <li>
                    <a href="?">My Products</a>
                </li>
                <li>
                    <a href="?">My Sales</a>
                </li>
                <li>
                    <button onClick={logOutHandler}>Logout</button>
                </li>
            </ul>}
        </header>
    )
};

export default Header;