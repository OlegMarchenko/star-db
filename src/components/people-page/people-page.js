import React, {Component} from 'react';
import './people-page.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

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
            <div className="people-page">
                <ItemList
                    OnItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}
                    renderItems={({name, gender, birthYear}) => (
                        `${name} (${gender}, ${birthYear})`)} />
                <PersonDetails personId={selectedPerson}/>
            </div>
        )
    }
};

