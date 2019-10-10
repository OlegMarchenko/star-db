import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">BOOM!</span>
            <p>Something has gone terribly wrong</p>
            <p>(but we already sent droids to fix it)</p>
        </div>
    )
};

export default ErrorIndicator;
