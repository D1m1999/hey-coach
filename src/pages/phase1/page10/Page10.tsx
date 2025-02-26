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

const Page10: React.FC = () => {
    // Inline styles for the flex container and card stretching
    const colStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column"
    };

    const cardStyle: React.CSSProperties = {
        flex: 1
    };

    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div style={{textAlign: 'center', padding: '2rem'}}>
                    <p style={{fontSize: '2.5rem', margin: '1rem 0'}}>
                        Lösungsfindung
                    </p>
                </div>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeMd="6" offsetMd="3"
                                style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">Kennt der Coachee
                                        seine Stärken?</h1>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">Kennt der Coachee
                                        seine Möglichkeiten?</h1>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">
                                        Wie kann der Coachee damit seinem Wunsch
                                        näher kommen?
                                    </h1>
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
                                <IonButton routerLink="/phase1/page11"
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

export default Page10;
