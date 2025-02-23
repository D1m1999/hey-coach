import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
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
                        In welcher Phase des Coachings seid Ihr?
                    </p>
                </div>

                <div style={{padding: '0 1rem'}}>
                    <IonCard
                        button
                        routerLink="/phase1/page1"
                        className="light-orange-card"
                        style={{marginBottom: '1rem', fontSize: '1.5rem'}}
                    >
                        <IonCardHeader>
                            <IonCardTitle style={{textAlign: 'center'}}>Phase
                                1</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard
                        button
                        className="light-orange-card"
                        style={{marginBottom: '1rem', fontSize: '1.5rem'}}
                    >
                        <IonCardHeader>
                            <IonCardTitle style={{textAlign: 'center'}}>Phase
                                2</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard
                        button
                        className="light-orange-card"
                        style={{marginBottom: '1rem', fontSize: '1.5rem'}}
                    >
                        <IonCardHeader>
                            <IonCardTitle style={{textAlign: 'center'}}>Phase
                                3</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
