import React, {Component} from 'react';
import Row from "../row";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import ItemDetails, {Record} from "../item-details/item-details";

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import './people-page.css'
import ErrorBoundary from "../error-boundary";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const {selectedPerson} = this.state;
        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.swapiService;

        const itemList = (
            <ItemList
                getData={getAllPeople}
                onItemSelected={this.onPersonSelected}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ItemDetails
                itemId={selectedPerson}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>

            </ItemDetails>
        );

        return (
            <ErrorBoundary>
                <PersonDetails itemId={11} />

                <PlanetDetails itemId={5} />

                <StarshipDetails itemId={9} />

                <PersonList />

                <StarshipList />

                <PlanetList />
            </ErrorBoundary>
        )
    }
};

