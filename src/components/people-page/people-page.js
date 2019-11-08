import React from 'react';

import {
    PersonDetails,
    PersonList,
} from '../sw-components';

import './people-page.css'
import ErrorBoundary from "../error-boundary";

const PeoplePage = () => {
    return (
        <ErrorBoundary>
            <PersonDetails itemId={11}/>
            <PersonList/>
        </ErrorBoundary>
    )
};

export default PeoplePage;

