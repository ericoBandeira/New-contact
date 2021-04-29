import styles from '../../styles/components/Contact.module.css';
import Image from 'next/image'

export function Contact(){

    function handlegithub(){
        window.open("https://github.com/ericoBandeira","_blank");
    }
    function handlelinkedin(){
        window.open("https://www.linkedin.com/in/ericobandeira/","_blank");
    }
    function handletelegram(){
        window.open("https://t.me/EricoBandeira","_blank");
    }
    function handleemail(){
        window.open("mailto:ericobandeira@hotmail.com","_blank");

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