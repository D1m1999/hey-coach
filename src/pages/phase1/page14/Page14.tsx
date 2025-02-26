import React from "react";
import {IonButton, IonContent, IonIcon, IonImg, IonPage} from "@ionic/react";
import {home} from "ionicons/icons";
import './Page14.css';

const Page14: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div className="celebration-message">
                    <p>
                        Yeah! <br/> Gib deinem Coachee ein High-five!
                        <br/> und klopf
                        ihm/ihr auf die Schulter.
                    </p>
                </div>
                <IonImg 
                    src="/images/icon.png"
                    alt="Hey Coach Icon"
                    className="centered-icon"
                />
                <div className="home-button-container">
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
