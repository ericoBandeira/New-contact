import styles from '../../styles/components/ExperienceBar.module.css';

export function ExperienceBar(props){
    return(
        <header className={styles.experienceBar}>
            <span className={styles.experienceBarTitle} >{props.title}</span>
            <div>
                <span className={styles.currentExperience} style={{left:props.percent}}>{props.percent}</span>
                <div style={{width:props.percent,background: props.background}}></div>
            </div>
        </header>
    );
}

export default ExperienceBar