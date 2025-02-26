import React from "react";
import {IonButton, IonContent, IonIcon, IonImg, IonPage} from "@ionic/react";
import {home} from "ionicons/icons";

const Page14: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div style={{textAlign: 'center', padding: '2rem'}}>
                    <p style={{fontSize: '5rem', margin: '1rem 0'}}>
                        Yeah! <br/> Gib deinem Coachee ein High-five!
                        <br/> und klopf
                        ihm/ihr auf die Schulter.
                    </p>
                </div>
                <IonImg src="/images/icon.png"
                        alt="Hey Coach Icon"
                        style={{
                            width: "192px",
                            height: "192px",
                            display: "block",
                            margin: "0 auto"
                        }}/>
                <div style={{
                    display: 'flex',
                    justifyContent: "flex-end",
                    padding: '2rem'
                }}>
                    <IonButton
                        routerLink="/home"
                        style={{fontSize: '1.5rem', marginRight: "16px"}}
                    >
                        Zurück zum Start
                        <IonIcon slot="end" icon={home}></IonIcon>
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page14;
