import React, {Component} from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import './random-planet.css';
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
      this.setState({
          planet,
          loading: false,
          error: false
      });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 3;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {

        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-item card">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    };
};

const PlanetView = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <div className="card-image">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
            </div>
            <div className="card-desc">
                <h2 className="card-title">{name}</h2>
                <ul>
                    <li className="card-desc-item">
                        <span className="card-desc-key">Population:</span>
                        <span className="card-desc-value">{population}</span>
                    </li>
                    <li className="card-desc-item">
                        <span className="card-desc-key">Rotation Period:</span>
                        <span className="card-desc-value">{rotationPeriod}</span>
                    </li>
                    <li className="card-desc-item">
                        <span className="card-desc-key">Diameter:</span>
                        <span className="card-desc-value">{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};








