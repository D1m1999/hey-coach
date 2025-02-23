import React from 'react';
import {useHistory} from 'react-router-dom';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonPage
} from '@ionic/react';
import {useCoaching} from "../../../common/CoachingContext";

const Page4: React.FC = () => {
    const history = useHistory();
    const {coachingType} = useCoaching();

    const jaRoute =
        coachingType === 'aktuelles'
            ? '/phase1/page15'
            : coachingType === 'neues'
                ? '/phase1/page6'
                : '/phase1/page6'; // fallback route if not set

    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div style={{textAlign: 'center', padding: '2rem'}}>
                    <p className="title-text" style={{margin: '1rem 0'}}>
                        Weiss ich wie es meinem Coachee geht und warum?
                    </p>
                </div>
                <div style={{padding: '0 1rem'}}>
                    <IonCard
                        button
                        onClick={() => history.push(jaRoute)}
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
                        routerLink="/phase1/page5"
                        className="light-orange-card"
                        style={{marginBottom: '1rem', fontSize: '1.5rem'}}
                    >
                        <IonCardHeader>
                            <IonCardTitle
                                style={{textAlign: 'center'}}>Nein</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page4;
