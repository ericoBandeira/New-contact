import styles from '../../styles/components/Contact.module.css';
import Image from 'next/image'

export function Contact(){

    function handlegithub(){
        window.location.href = "https://github.com/ericoBandeira";
    }
    function handlelinkedin(){
        window.location.href = "https://www.linkedin.com/in/ericobandeira/";
    }
    function handletelegram(){
        window.location.href = "https://t.me/EricoBandeira";
    }
    function handleemail(){
        window.location.href = "mailto:ericobandeira@hotmail.com";
    }

    return(
        <div className={styles.contactContainer}>  
            <p>
                Contact
            </p>
            <div>
               <Image onClick={handlegithub} src="/github.png" alt="github" width="100" height="100" />
               <Image onClick={handlelinkedin} src="/linkedin.png" alt="github" width="100" height="100" />
               <Image onClick={handletelegram} src="/telegram.png" alt="github" width="100" height="100" />
               <Image onClick={handleemail} src="/email.png" alt="github" width="100" height="100" />
            </div>
        </div>
    );
}

export default Contact