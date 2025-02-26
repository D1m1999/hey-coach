import React from "react";
import {
    IonButton,
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonImg,
    IonPage,
    IonRow
} from "@ionic/react";
import {arrowForward} from "ionicons/icons";

const Page8: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginInlineStart: "16px",
                                    marginTop: "24px"
                                }}>
                                <img
                                    src="/images/Lego-Stein.webp"
                                    alt="Icon 2"
                                    style={{
                                        width: "11rem",
                                        height: "11rem",
                                        marginRight: "1rem",
                                        borderRadius: "18px"
                                    }}
                                />
                                <p style={{
                                    fontSize: "4rem",
                                    margin: 0,
                                }}>
                                    Baue eine bestimmte Situation nach.
                                </p>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard
                                className="light-orange-card">
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Gruppenarbeit.webp"
                                                alt="Image 1"/>
                                        </IonCol>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Pausenplatz.webp"
                                                alt="Image 2"/>
                                        </IonCol>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Schulweg.webp"
                                                alt="Image 3"/>
                                        </IonCol>
                                        <IonCol size="6">
                                            <IonImg
                                                src="/images/Schulzimmer.webp"
                                                alt="Image 4"/>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow style={{fontSize: '1.5rem'}}>
                                        <IonCol size="4">
                                            <ul>
                                                <li>Angst vor Fehler</li>
                                                <li>Abschreiben</li>
                                                <li>Abgelenkt sein</li>
                                            </ul>
                                        </IonCol>
                                        <IonCol size="4">
                                            <ul>
                                                <li>Unkonzentriert sein</li>
                                                <li>Eigene Meinung</li>
                                            </ul>
                                        </IonCol>
                                        <IonCol size="4">
                                            <ul>
                                                <li>Arbeitsplatz</li>
                                                <li>Streit mit jemandem</li>
                                            </ul>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
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
                                <IonButton routerLink="/phase1/page6"
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

export default Page8;
