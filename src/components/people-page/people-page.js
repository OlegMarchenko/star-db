import React, {Component} from 'react';
import './people-page.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";

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
        return (
            <ErrorBoundry>
                <div className="people-page">
                    <ItemList
                        OnItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItems={({name, birthYear}) => (
                            `${name} (${birthYear})`)}/>
                    <PersonDetails personId={selectedPerson}/>
                </div>
            </ErrorBoundry>
        )
    }
};

