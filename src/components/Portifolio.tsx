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


    return(
        <div className={styles.container}>
            <p>Portfolio Section</p>
            <div className={styles.containerKanban}>
                <div className={styles.containerKanban1} style={{borderColor: "#41B854"}}>
                    <p style={{backgroundColor: "#41B854"}}>Backlog</p>
                    <div style={{borderColor: "#41B854", background: "rgba(65, 184, 84, 0.3)"}}>
                        <span>And this space was made for you!</span>
                    </div>
                    <a href="mailto:ericobandeira@hotmail.com">
                        <AddIcon color="action" style={{ fontSize: "3.5rem",color: "rgba(254, 253, 242, 1)" }} className={styles.kanbanAddIcon}/>
                    </a>                    
                </div>

                <div className={styles.containerKanban1} style={{borderColor: "#6E41FF"}}>
                    <p style={{backgroundColor: "#6E41FF"}}>Doing</p>
                    <div style={{borderColor: "#6E41FF", background: "rgba(110, 65, 255, 0.3)"}} >
                        <p style={{color: "#6E41FF", fontSize:"2rem"}}> Move.it</p>
                        <p style={{color: "#737373", fontSize:"1rem"}}> Site to schedule exercises between periods of study or work</p>
                        <div>
                            <Image onClick={handlegithubMoveIt} src="/github.png" alt="github" width="50" height="50" />
                        </div>  
                    </div>

                    <div style={{borderColor: "#6E41FF", background: "rgba(110, 65, 255, 0.3)"}} >
                        <p style={{color: "#6E41FF", fontSize:"2rem"}}> Circus</p>
                        <p style={{color: "#737373", fontSize:"1rem"}}> Mobile app that teaches basic acrobatic circus moves </p>
                        <div>
                            <Image onClick={handlegithubCircus} src="/github.png" alt="github" width="50" height="50" />
                        </div>  
                    </div>
                </div>

                <div className={styles.containerKanban1} style={{borderColor: "#EC008C"}}>
                    <p style={{backgroundColor: "#EC008C"}}>Done</p>

                    <div style={{borderColor: "#EC008C", background: "rgba(236, 0, 140, 0.3"}}>
                        <p style={{color: "#EC008C", fontSize:"2rem"}}> Pokedex</p>
                        <p style={{color: "#737373", fontSize:"1rem"}}> Pokedex made in ReacJS</p>
                        <div>
                            <Image onClick={handlegithubPokedex} src="/github.png" alt="github" width="50" height="50" />
                        </div>   
                    </div>

                    <div style={{borderColor: "#EC008C", background: "rgba(236, 0, 140, 0.3"}}>
                        <p style={{color: "#EC008C", fontSize:"2rem"}}> EB-money</p>
                        <p style={{color: "#737373", fontSize:"1rem"}}> Website for financial organization</p>
                        <div>
                            <Image onClick={handlegithubebmoney} src="/github.png" alt="github" width="50" height="50" />
                        </div>   
                    </div>

                    <div style={{borderColor: "#EC008C", background: "rgba(236, 0, 140, 0.3"}}>
                        <p style={{color: "#EC008C", fontSize:"2rem"}}> Plant Manager</p>
                        <p style={{color: "#737373", fontSize:"1rem"}}> Mobile app to schedule the watering of your plants</p>
                        <div>
                            <Image onClick={handlegithubPlantManager} src="/github.png" alt="github" width="50" height="50" />
                        </div>   
                    </div>

                    <div style={{borderColor: "#EC008C", background: "rgba(236, 0, 140, 0.3"}}>
                        <p style={{color: "#EC008C", fontSize:"2rem"}}> New Contact</p>
                        <p style={{color: "#737373", fontSize:"1rem"}}> This website! </p>
                        <div>
                            <Image onClick={handlegithubNewContact} src="/github.png" alt="github" width="50" height="50" />
                        </div>   
                    </div>

                </div>
            </div>

        </div>
    );
}