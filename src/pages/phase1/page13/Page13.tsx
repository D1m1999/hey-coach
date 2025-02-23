import React from "react";
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow
} from "@ionic/react";

const Page13: React.FC = () => {
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
                        <IonCol style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">Welches Ziel hat
                                        der Coachee verfolgt?</h1>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>

                        <IonCol style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">Wie hat er/sie
                                        das getan?</h1>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{
                        borderBottom: "5px solid gray",
                    }}>
                        <IonCol style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">was wären
                                        Hürden?</h1>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol style={colStyle}>
                            <IonCard style={cardStyle}
                                     className="light-orange-card">
                                <IonCardHeader style={{textAlign: "center"}}>
                                    <h1 className="title-text">
                                        was hat funktioniert?
                                    </h1>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div style={{textAlign: 'center', padding: '2rem'}}>
                                <p style={{
                                    fontSize: '2.5rem',
                                    margin: '1rem 0'
                                }}>
                                    Müssen wir daran weiterarbeiten?
                                </p>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard
                                button
                                routerLink="/phase1/page10"
                                className="light-orange-card"
                                style={{
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem'
                                }}
                            >
                                <IonCardHeader>
                                    <IonCardTitle
                                        style={{textAlign: 'center'}}>Ja</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard
                                button
                                routerLink="/phase1/page14"
                                className="light-orange-card"
                                style={{
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem'
                                }}
                            >
                                <IonCardHeader>
                                    <IonCardTitle
                                        style={{textAlign: 'center'}}>Nein</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Page13;
