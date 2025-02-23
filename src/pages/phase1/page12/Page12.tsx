import React from "react";
import {IonContent, IonPage} from "@ionic/react";

const Page12: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="lightblue-background">
                <div style={{textAlign: 'center', padding: '2rem'}}>
                    <p style={{fontSize: '5rem', margin: '1rem 0'}}>
                        Hey du super Coach, motiviere dein Coachee. <br/> Mach
                        ihm/ihr
                        Mut.
                    </p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page12;
