import styles from '../../styles/components/Portifolio.module.css';
import Image from 'next/image'
import AddIcon from '@material-ui/icons/Add';

export function Portfolio(){

    function handlegithubPokedex(){
        window.open("https://github.com/ericoBandeira/pokedex","_blank");
    }

    function handlegithubebmoney(){
        window.open("https://github.com/ericoBandeira/eb-money","_blank");
    }

    function handlegithubPlantManager(){
        window.open("https://github.com/ericoBandeira/Plant-manager","_blank");
    }

    function handlegithubNewContact(){
        window.open("https://github.com/ericoBandeira/New-contact","_blank");
    }

    function handlegithubMoveIt(){
        window.open("https://github.com/ericoBandeira/move.it","_blank");
    }

    function handlegithubCircus(){
        window.open("https://github.com/ericoBandeira/circus","_blank");
    }

    function handlegithubFaceDetection(){
        window.open("https://github.com/ericoBandeira/face-detection","_blank");
    }

    function handleemail(){
        window.open("mailto:ericobandeira@hotmail.com","_blank");
    }


    return(
        <div className={styles.container}>
            <p>Portfolio Section</p>
            
            <div className={styles.mosaicContainer}>
                <div className={styles.mosaicContainerColumn}>
                    <div style={{background: "rgba(110, 65, 255, 0.3)"}} className={styles.mosaicItem}>
                        <p style={{color: "#6E41FF"}} className={styles.mosaicTitle}>This space was<br/>made for you!</p>
                        <p className={styles.mosaicSubTitle}>Send your idea</p>
                        <div>
                            <Image onClick={handleemail} src="/email.png" alt="github" width="50" height="50" />
                        </div>
                    </div>
                    <div style={{background: "rgba(65, 184, 84, 0.3)"}} className={styles.mosaicItem}>
                        <p style={{color: "#41B854"}} className={styles.mosaicTitle}> Move.it</p>
                        <p className={styles.mosaicSubTitle}> Site to schedule exercises<br/> between periods of <br/>study or work</p>
                        <div>
                            <Image onClick={handlegithubMoveIt} src="/github.png" alt="github" width="50" height="50" />
                        </div> 
                    </div>
                    <div style={{background: "rgba(236, 0, 140, 0.3)"}} className={styles.mosaicItem}>
                        <p style={{color: "#EC008C"}} className={styles.mosaicTitle}> New Contact</p>
                        <p className={styles.mosaicSubTitle}> This website! </p>
                        <div>
                            <Image onClick={handlegithubNewContact} src="/github.png" alt="github" width="50" height="50" />
                        </div> 
                    </div>
                </div>
                <div className={styles.mosaicContainerColumn}>
                    <div style={{background: "rgba(236, 0, 140, 0.3)"}} className={styles.mosaicItem}>
                        <p style={{color: "#EC008C"}} className={styles.mosaicTitle}> Circus</p>
                        <p className={styles.mosaicSubTitle}> Mobile app that teaches<br/>basic acrobatic circus moves </p>
                        <div>
                            <Image onClick={handlegithubCircus} src="/github.png" alt="github" width="50" height="50" />
                        </div> 
                    </div>
                    <div style={{background: "rgba(110, 65, 255, 0.3)"}} className={styles.mosaicItem}>
                        <p style={{color: "#6E41FF"}} className={styles.mosaicTitle}> Pokedex</p>
                        <p className={styles.mosaicSubTitle}> Pokedex made in ReacJS</p>
                        <div>
                            <Image onClick={handlegithubPokedex} src="/github.png" alt="github" width="50" height="50" />
                        </div>   
                    </div>
                    <div style={{background: "rgba(65, 184, 84, 0.3)"}} className={styles.mosaicItem}>
                        <p style={{color: "#41B854"}} className={styles.mosaicTitle}> Face Detection</p>
                        <p className={styles.mosaicSubTitle}> Web page to detect<br/>emotions in faces </p>
                        <div>
                            <Image onClick={handlegithubFaceDetection} src="/github.png" alt="github" width="50" height="50" />
                        </div> 
                    </div>
                </div>
                <div>
                    <div style={{background: "rgba(65, 184, 84, 0.3)",paddingBottom:"2.5rem"}} className={styles.mosaicItem}>
                        <p style={{color: "#41B854"}} className={styles.mosaicTitle}> EB-money</p>
                        <p className={styles.mosaicSubTitle}> Website for<br/>financial organization</p>
                        <div>
                            <Image onClick={handlegithubebmoney} src="/github.png" alt="github" width="50" height="50" />
                        </div>   
                    </div>
                    <div style={{background: "rgba(236, 0, 140, 0.3)"}} className={styles.mosaicItem}>
                        <p style={{color: "#EC008C"}} className={styles.mosaicTitle}> Plant Manager</p>
                        <p className={styles.mosaicSubTitle}>Mobile app to schedule<br/>the watering of<br/>your plants</p>
                        <div>
                            <Image onClick={handlegithubPlantManager} src="/github.png" alt="github" width="50" height="50" />
                        </div>   
                    </div>
                </div>
            </div>

        </div>
    );
}