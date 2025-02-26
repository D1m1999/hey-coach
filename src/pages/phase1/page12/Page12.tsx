import React from "react";
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonImg,
    IonPage,
    IonRow
} from "@ionic/react";
import {home} from "ionicons/icons";
import './Page12.css';

const Page12: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div className="coach-message">
                    <p>
                        Hey du super Coach, motiviere dein Coachee. <br/> Mach
                        ihm/ihr
                        Mut.
                    </p>
                </div>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="auto">
                            <IonImg
                                src="/images/icon.png"
                                alt="Hey Coach Icon"
                                className="icon"
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div className="home-button-container">
                                <IonButton routerLink="/home"
                                           style={{
                                               fontSize: "1.5rem",
                                               marginRight: "16px"
                                           }}>
                                    Zurück zum Start
                                    <IonIcon slot="end" icon={home}></IonIcon>
                                </IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Page12;
