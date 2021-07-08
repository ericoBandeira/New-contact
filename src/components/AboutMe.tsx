import styles from '../../styles/components/AboutMe.module.css';
import ExperienceBar from './ExperienceBar';

export function AboutMe(){

    function downloadTxtFile() {
        const element = document.createElement("a");
        const file = '../../public/EricoBandeira_CV_English.pdf'
        element.href = file
        element.download = "Èrico Bandeira CV.pdf";
        document.body.appendChild(element);
        element.click();
      }

    return(
        <div className={styles.profileContainer} id="about">
            <div className={styles.profileContainerText}>
                <span className={styles.profileContainerTextTitle}>
                    About me!
                </span>
                <p>
                    web and mobile developer
                </p>
                <p>
                    Hey, my name is Érico I am gratuating in software engineering at the University of Brasilia (UnB) passionate about Web and Mobile development always in search of learning more!
                </p>
            </div>
            <div className={styles.firstXp}>
                <ExperienceBar 
                    title="React JS"
                    background="#48BEEE"
                    percent="95%"
                />
                <ExperienceBar  
                    title="React Native"
                    background="#48BEEE"
                    percent="90%"
                />
            </div>
            <div className={styles.firstXp}>
                <ExperienceBar 
                    title="Javascript"
                    background="#735EB6"
                    percent="90%"
                />
                <ExperienceBar  
                    title="Typescript"
                    background="#735EB6"
                    percent="85%"
                />
            </div>
            <div className={styles.profileContainerButton}>
                <p>
                    for more tech informations
                </p>
                <a href='/EricoBandeira_CV_English.pdf' download>
                    Download CV
                </a>
            </div>
        </div>
    );
}