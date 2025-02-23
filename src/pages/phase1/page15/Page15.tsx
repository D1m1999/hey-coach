import React from 'react';
import {
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonIcon,
    IonPage
} from '@ionic/react';
import {arrowBack} from 'ionicons/icons';

const Page15: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div style={{textAlign: 'center', padding: '2rem'}}>
                    <p className="title-text" style={{margin: '1rem 0'}}>
                        Haben wir noch ein angefangenes Ziel?
                    </p>
                </div>
                <div style={{padding: '0 1rem'}}>
                    <IonCard
                        button
                        routerLink="/phase1/page13"
                        className="light-orange-card"
                        style={{marginBottom: '1rem', fontSize: '1.5rem'}}
                    >
                        <IonCardHeader>
                            <IonCardTitle
                                style={{textAlign: 'center'}}>Ja</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                    <IonCard
                        button
                        routerLink="/phase1/page6"
                        className="light-orange-card"
                        style={{marginBottom: '1rem', fontSize: '1.5rem'}}
                    >
                        <IonCardHeader>
                            <IonCardTitle
                                style={{textAlign: 'center'}}>Nein, noch
                                nicht</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
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
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page15;
