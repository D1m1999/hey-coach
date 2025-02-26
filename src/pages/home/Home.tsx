import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonImg,
    IonPage
} from '@ionic/react';

const Home: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div style={{textAlign: 'center', padding: '2rem'}}>
                    <p className={"title-text"} style={{
                        margin: '1rem 0'
                    }}>
                        Hey Coach!
                    </p>
                </div>

                <div style={{padding: '0 1rem'}}>

                    <IonImg src="/images/icon.png"
                            alt="Hey Coach Icon"
                            style={{
                                width: "192px",
                                height: "192px",
                                display: "block",
                                margin: "0 auto"
                            }}/>
                    <IonCard
                        button
                        routerLink="/phase1/page1"
                        className="light-orange-card"
                        style={{marginBottom: '1rem', fontSize: '1.5rem'}}
                    >

                        <IonCardHeader>
                            <IonCardTitle
                                style={{textAlign: 'center'}}>Start</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
