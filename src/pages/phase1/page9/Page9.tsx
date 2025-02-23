import React from "react";
import {IonContent, IonImg, IonPage} from "@ionic/react";

const Page9: React.FC = () => {
    return (
        <IonPage>
            <IonContent
                fullscreen
                className="lightblue-background"
                style={{
                    display: "flex",
                    alignItems: "center" // Centers content vertically
                }}
            >
                <div style={{
                    padding: "2rem",
                    width: "100%",
                    height: "100vh",
                    alignContent: "center",
                    justifyItems: "center"
                }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "2rem"
                        }}
                    >
                        <IonImg
                            src="/images/Lego-Stein.webp"
                            alt="Icon 1"
                            style={{
                                width: "11rem",
                                height: "11rem",
                                marginRight: "1rem"
                            }}
                        />
                        <p style={{fontSize: "5rem", margin: 0, width: "11ch"}}>
                            Baue ein Modell von...
                        </p>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <IonImg
                            src="/images/Lego-Stein.webp"
                            alt="Icon 2"
                            style={{
                                width: "11rem",
                                height: "11rem",
                                marginRight: "1rem"
                            }}
                        />
                        <p style={{fontSize: "5rem", margin: 0, width: "11ch"}}>
                            Baue Ideale von...
                        </p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page9;
