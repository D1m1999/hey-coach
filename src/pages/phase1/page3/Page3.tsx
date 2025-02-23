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

const Page3: React.FC = () => {
    const history = useHistory();
    const {setCoachingType} = useCoaching();

    const handleNavigation = (type: 'aktuelles' | 'neues') => {
        setCoachingType(type);
        history.push('/phase1/page4');
    };

    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        padding: '0 1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <IonCard
                        button
                        onClick={() => handleNavigation('aktuelles')}
                        className="light-orange-card"
                        style={{marginBottom: '1rem', fontSize: '1.5rem'}}
                    >
                        <IonCardHeader>
                            <IonCardTitle style={{textAlign: 'center'}}>
                                Aktuelles Coaching
                            </IonCardTitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard
                        button
                        onClick={() => handleNavigation('neues')}
                        className="light-orange-card"
                        style={{marginBottom: '1rem', fontSize: '1.5rem'}}
                    >
                        <IonCardHeader>
                            <IonCardTitle style={{textAlign: 'center'}}>
                                Neues Coaching
                            </IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page3;
