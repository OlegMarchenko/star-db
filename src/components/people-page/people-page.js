import React, {Component} from 'react';
import './people-page.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Row from "../row";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
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

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        const {selectedPerson} = this.state;

        const itemList = (
            <ItemList
                OnItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <PersonDetails personId={selectedPerson}/>
        );

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        )
    }
};

