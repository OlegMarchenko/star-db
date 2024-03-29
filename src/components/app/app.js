import React, { Component } from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ErrorBoundary from "../error-boundary";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../sw-service-context";

import './app.css'


export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="app">
                            <Header/>
                            <Route path="/"
                                   render={() => <h2>Welcome to StarDB</h2>}
                                   exact/>
                            <RandomPlanet/>
                            <Route path="/people/" exact component={PeoplePage}/>
                            <Route path="people/:id"
                                   render={() => <ItemDetails/>}/>
                        </div>

                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    };

};