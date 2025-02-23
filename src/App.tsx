import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import Home from './pages/home/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */
/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
/* import '@ionic/react/css/palettes/dark.system.css'; */
/* Theme variables */
import './theme/variables.css';
import React from "react";
import Page1 from "./pages/phase1/page1/Page1";
import Page2 from "./pages/phase1/page2/Page2";
import Page3 from "./pages/phase1/page3/Page3";
import Page4 from "./pages/phase1/page4/Page4";
import Page5 from "./pages/phase1/page5/Page5";
import Page6 from './pages/phase1/page6/Page6';
import Page7 from "./pages/phase1/page7/Page7";
import Page8 from "./pages/phase1/page8/Page8";
import Page9 from "./pages/phase1/page9/Page9";
import {CoachingProvider} from "./common/CoachingContext";
import Page10 from "./pages/phase1/page10/Page10";
import Page11 from "./pages/phase1/page11/Page11";
import Page12 from "./pages/phase1/page12/Page12";
import Page14 from "./pages/phase1/page14/Page14";
import Page13 from "./pages/phase1/page13/Page13";
import Page15 from "./pages/phase1/page15/Page15";

setupIonicReact({
    mode: "ios"
});

const App: React.FC = () => (
    <IonApp>
        <CoachingProvider>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/" exact={true}>
                        <Redirect to="/home"/>
                    </Route>
                    <Route path="/home" exact={true}>
                        <Home/>
                    </Route>
                    <Route path="/phase1/page1">
                        <Page1></Page1>
                    </Route>
                    <Route path="/phase1/page2">
                        <Page2></Page2>
                    </Route>
                    <Route path="/phase1/page3">
                        <Page3></Page3>
                    </Route>
                    <Route path="/phase1/page4">
                        <Page4></Page4>
                    </Route>
                    <Route path="/phase1/page5">
                        <Page5></Page5>
                    </Route>
                    <Route path="/phase1/page6">
                        <Page6></Page6>
                    </Route>
                    <Route path="/phase1/page7">
                        <Page7></Page7>
                    </Route>
                    <Route path="/phase1/page8">
                        <Page8></Page8>
                    </Route>
                    <Route path="/phase1/page9">
                        <Page9></Page9>
                    </Route>
                    <Route path="/phase1/page10">
                        <Page10></Page10>
                    </Route>
                    <Route path="/phase1/page11">
                        <Page11></Page11>
                    </Route>
                    <Route path="/phase1/page12">
                        <Page12></Page12>
                    </Route>
                    <Route path="/phase1/page13">
                        <Page13></Page13>
                    </Route>
                    <Route path="/phase1/page14">
                        <Page14></Page14>
                    </Route>
                    <Route path="/phase1/page15">
                        <Page15></Page15>
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </CoachingProvider>
    </IonApp>
);

export default App;
