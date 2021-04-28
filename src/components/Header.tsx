import styles from '../../styles/components/Header.module.css';

export function Header(){
    return(
        <div className={styles.profileContainer}>
            <div>
                <p className={styles.profileSubTitle}>Welcome! I'm</p>
                <p className={styles.profileTitle}>Érico bandeira</p>
                <p className={styles.profileSubTitle}>Software Engineer</p>
            </div>
            <div>
                <img src="https://github.com/ericoBandeira.png" alt=""/>
            </div>
        </div>
    );
}