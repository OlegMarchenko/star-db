import React, {Component} from 'react';
import './item-list.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null,
        loading: true
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then(this.onPeopleListLoaded)
            .catch(this.onError)
    };

    onPeopleListLoaded = (peopleList) => {
        this.setState({
            peopleList,
            loading: false,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-item"
                    key={id}
                    onClick={() => this.props.OnItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const {peopleList} = this.state;

        if (!peopleList) {
            return <Spinner/>
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="list">
                {items}
            </ul>
        )
    }
};