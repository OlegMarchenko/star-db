import React, { Component } from 'react';

import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="card-desc-item">
            <span className="card-desc-key">{label}:</span>
            <span className="card-desc-value">{item[field]}</span>
        </li>
    )
};

export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props;
        if(!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            })
    };

    render() {

        const { item, image } = this.state;
        if(!item) {
            return <span>Select a person form a list</span>
        }

        const { name } = item;

        return (
            <div className="details-items card">
                <div className="card-image">
                    <img src={image} alt={name}/>
                </div>
                <div className="card-desc">
                    <h2 className="card-title">{name}</h2>
                    <ul>
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    };
};