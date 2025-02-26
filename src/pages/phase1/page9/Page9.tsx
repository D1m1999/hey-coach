import React from "react";
import {
    IonButton,
    IonCard,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonPage,
    IonRow
} from "@ionic/react";
import {arrowForward} from "ionicons/icons";
import "./Page9.css"

const Page9: React.FC = () => {
    return (
        <IonPage>
            <IonContent
                fullscreen
                className="lightblue-background"
            >
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="auto">
                            <img
                                src="/images/Lego-Stein.webp"
                                alt="Icon 1"
                                style={{
                                    width: "11rem",
                                    height: "11rem",
                                    borderRadius: "18px",
                                    marginTop: "5rem",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)"
                                }}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="card-col">
                            <IonCard
                                className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">Baue ein Model
                                        von...</h1>
                                </IonCardHeader>
                            </IonCard>

                        </IonCol>
                        <IonCol className="card-col">
                            <IonCard
                                className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">Baue dein
                                        Ideales...</h1>
                                </IonCardHeader>
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
                                <IonButton routerLink="/phase1/page7"
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

export default Page9;
