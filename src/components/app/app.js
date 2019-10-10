import React, {Component} from 'react';

import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-planet";

import './app.css'

export default class App extends Component {

    state = {
        selectedPerson: 2
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const {selectedPerson} = this.state;

        return (
            <div className="app">
                <Header/>
                <RandomPlanet/>
                <ItemList OnItemSelected={this.onPersonSelected}/>
                <PersonDetails personId={selectedPerson}/>
            </div>
        );
    };
};