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
import {arrowBack} from "ionicons/icons";

const Page5: React.FC = () => {
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
                <IonGrid>
                    <IonRow>
                        <IonCol sizeMd="6" offsetMd="3"
                                style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">Wie fühlst du
                                        dich?</h1>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">Beschäftigt dich
                                        etwas?</h1>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">
                                        Welches Wetter passt zu deinem Gefühl?
                                        (Stürmisch, Sonnig, Schnee)
                                    </h1>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div style={{display: 'flex'}}>
                                <IonButton
                                    routerLink="/phase1/page4"
                                    routerDirection="back"
                                    fill="outline"
                                    style={{fontSize: '1.5rem'}}
                                >
                                    <IonIcon slot="icon-only" icon={arrowBack}/>
                                </IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Page5;
