import React from "react";
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonPage,
    IonRow
} from "@ionic/react";
import "./Page2.css";
import {arrowForward} from "ionicons/icons";

const Page2: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <IonGrid>
                    <IonRow>
                        <IonCol className="card-col">
                            <IonCard className="light-orange-card">
                                <IonCardHeader>
                                    <h1 className="title-text">Vergiss nicht zu
                                        sagen</h1>
                                </IonCardHeader>
                                <IonCardContent style={{fontSize: '1.5rem'}}>
                                    <ul>
                                        <li>danke darf ich dich begleiten</li>
                                        <li>Schweigepflicht (Coach, Coachee,
                                            Lehrpersonen)
                                        </li>
                                        <li>Umgang Lego</li>
                                    </ul>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol className="card-col">
                            <IonCard className="light-orange-card">
                                <IonCardHeader>
                                    <h1 className="title-text">merke dir</h1>
                                </IonCardHeader>
                                <IonCardContent style={{fontSize: '1.5rem'}}>
                                    <ul>
                                        <li>Fragen stellen</li>
                                        <li>vertrauen</li>
                                        <li>gleichzeitig bauen</li>
                                    </ul>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end"
                                }}
                            >
                                <IonButton routerLink="/phase1/page3"
                                           style={{
                                               fontSize: "1.5rem",
                                               marginRight: "16px"
                                           }}>
                                    <IonIcon slot="icon-only"
                                             icon={arrowForward}/>
                                </IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Page2;
