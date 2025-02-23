import React from "react";
import {IonButton, IonContent, IonIcon, IonPage} from "@ionic/react";
import {arrowForward, handLeftOutline} from "ionicons/icons";

const Page14: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div style={{textAlign: 'center', padding: '2rem'}}>
                    <p style={{fontSize: '5rem', margin: '1rem 0'}}>
                        Yeah! <br/> Gib deinem Coache ein High-five!
                        <IonIcon style={{paddingLeft: "1rem"}}
                                 icon={handLeftOutline}/> <br/> und klopf
                        ihm/ihr auf die Schulter.
                    </p>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "flex-end",
                    padding: '2rem'
                }}>
                    <IonButton
                        routerLink="/phase1/page6"
                        style={{fontSize: '1.5rem', marginRight: "16px"}}
                    >
                        <IonIcon slot="icon-only"
                                 icon={arrowForward}/>
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page14;
