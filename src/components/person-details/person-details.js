import React, {Component} from 'react';
import './person-details.css';
import SwapiService from "../../services/swapi-service";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({person})
            })
    };

    render() {

        if (!this.state.person) {
            return <span>Select a person form a list</span>
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.person;

        return (
            <div className="details-items card">
                <div className="card-image">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={`${name}`}/>
                </div>
                <div className="card-desc">
                    <h2 className="card-title">{name}</h2>
                    <ul>
                        <li className="card-desc-item">
                            <span className="card-desc-key">Gender:</span>
                            <span className="card-desc-value">{gender}</span>
                        </li>
                        <li className="card-desc-item">
                            <span className="card-desc-key">Birth Year:</span>
                            <span className="card-desc-value">{birthYear}</span>
                        </li>
                        <li className="card-desc-item">
                            <span className="card-desc-key">Hair Color:</span>
                            <span className="card-desc-value">{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
};