import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";

import React from 'react'
import { HomeScreen } from "../components/HomeScreen";
import { Works } from "../components/Works";
import { Certificates } from "../components/Certificates";
import { UiModal } from "../components/ui/UiModal";


export const AppRouter = () => {
    return (
        <div>
            <HashRouter>
                
                <div className="interno">
                <UiModal/>
                    <Switch>
                        <Route path='/' exact component={HomeScreen} />
                        {/* <Route path='/work' exact component={Works} />
                        <Route path='/certificates' exact component={Certificates} /> */}
                    </Switch>
                </div>
                <div className="externo">
                <UiModal/>
                <Switch>
                        <Route path='/work' exact component={Works} />
                        <Route path='/certificates' exact component={Certificates} />
                    </Switch>
                </div>
                
            </HashRouter>
        </div>

    )
}
