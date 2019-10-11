import React, {Component} from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import './person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    onPeopleListUpdated = (person) => {
        this.setState({
            person,
            loading: false,
            error: false
        })
    };

    updatePerson = () => {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then(this.onPeopleListUpdated)
            .catch(this.onError)
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    render() {

        const {person, loading, error} = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PersonView person={person}/> : null;

        if (!person) {
            return <span>Select a person form a list</span>
        }

        return (
            <div className="details-items card">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    };
};

const PersonView = ({person}) => {

    const {id, name, gender, birthYear, eyeColor} = person;

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
};