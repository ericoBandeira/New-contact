import styles from '../../styles/components/Header.module.css';
import Image from 'next/image';

export function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <div>
                    <p className={styles.profileSubTitle}>Welcome! I'm</p>
                    <p className={styles.profileTitle}>Érico Bandeira</p>
                    <p className={styles.profileSubTitle}>Software Engineer</p>
                </div>
                <div>
                    <img src="https://github.com/ericoBandeira.png" alt=""/>
                </div>
            </div>
            <a className={styles.profileArrow} href="#about">
                <Image src="/down-arrow-img.png" alt="down-arrow" width="30" height="30" />
            </a>
        </div>
    );
}