import React from "react";
import {
    IonButton,
    IonCard,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonImg,
    IonPage,
    IonRow
} from "@ionic/react";
import "./Page1.css";
import {arrowBack, arrowForward} from "ionicons/icons";

const Page1: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <IonGrid>
                    <IonRow>
                        <IonCol className="card-col">
                            <IonCard className="light-orange-card">
                                <IonCardHeader>
                                    <h1 className="title-text">Coach</h1>
                                </IonCardHeader>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Ipad.webp"
                                                alt="Coach image 1"/>
                                        </IonCol>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Anti-stress-ball.webp"
                                                alt="Coach image 2"/>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Lego-Seckli.webp"

                                                alt="Coach image 3"/>
                                        </IonCol>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Notizblock-ohne-Stift.webp"
                                                alt="Coach image 4"/>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        </IonCol>
                        <IonCol className="card-col">
                            <IonCard className="light-orange-card">
                                <IonCardHeader>
                                    <h1 className="title-text">Coachee</h1>
                                </IonCardHeader>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Lego-Seckli.webp"
                                                alt="Coachee image 1"/>
                                        </IonCol>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Notizblock-ohne-Stift.webp"
                                                alt="Coachee image 2"/>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Stift.webp"
                                                alt="Coachee image 3"/>
                                        </IonCol>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Anti-stress-ball.webp"
                                                alt="Coachee image 4"/>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div className="bottom-buttons-container">
                    <IonButton
                        routerLink="/home"
                        routerDirection="back"
                        fill="outline"
                        style={{fontSize: "1.5rem"}}
                    >
                        <IonIcon slot="icon-only" icon={arrowBack}/>
                    </IonButton>
                    <IonButton
                        routerLink="/phase1/page2"
                        style={{fontSize: "1.5rem"}}
                    >
                        <IonIcon slot="icon-only" icon={arrowForward}/>
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page1;
