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
                            <IonCard style={{maxHeight: "80vh"}}
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
                                    </IonRow>
                                    <IonRow>
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
                                           style={{fontSize: "1.5rem"}}>
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
