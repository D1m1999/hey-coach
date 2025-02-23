import React from 'react';
import {useHistory} from 'react-router-dom';
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
import {useCoaching} from "../../../common/CoachingContext";

const Page4: React.FC = () => {
    const history = useHistory();
    const {coachingType} = useCoaching();

    // Determine the destination for the "Ja" card based on the coaching type.
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
                    {/* "Ja" card navigates conditionally */}
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

                    {/* "Nein" card navigates to a fixed route */}
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

                    <div style={{display: 'flex'}}>
                        <IonButton
                            routerLink="/phase1/page3"
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

export default Page4;
