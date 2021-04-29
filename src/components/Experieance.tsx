import styles from '../../styles/components/Experience.module.css';
import TimeLineExperience from '../components/TimeLineExperience'

export function Experience(){
    return(
        <div className={styles.experienceContainer}>  
            <p>My Experience</p>
            <TimeLineExperience/>
        </div>
    );
}

export default Experience