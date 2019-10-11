import React, {Component} from 'react';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import './item-list.css'

export default class ItemList extends Component {


    state = {
        itemList: null,
        loading: true
    };

    componentDidMount() {

        const {getData} = this.props;

        getData()
            .then(this.onItemListLoaded)
            .catch(this.onError)
    };

    onItemListLoaded = (itemList) => {
        this.setState({
            itemList,
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

    renderItems = (arr) => {
        return arr.map((item) => {

            const {id} = item;
            const label = this.props.renderItems(item);

            return (
                <li className="list-item"
                    key={id}
                    onClick={() => this.props.OnItemSelected(id)}>
                    {label}
                </li>
            )
        })
    };

    render() {
        
        const {itemList, loading, error} = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? this.renderItems(itemList) : null;

        return (
            <ul className="list">
                {errorMessage}
                {spinner}
                {content}
            </ul>
        )
    }
};