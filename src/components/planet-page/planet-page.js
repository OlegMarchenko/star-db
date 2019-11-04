import React, {Component} from 'react';
import './planet-page.css';
import ErrorBoundary from "../error-boundary";
import Row from "../row";

export default class PlanetPage extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Row left={itemList} right={planetDetails}/>
            </ErrorBoundary>
        )
    }
}