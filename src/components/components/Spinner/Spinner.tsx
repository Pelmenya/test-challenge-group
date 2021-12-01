import React from 'react';
import Loader from 'react-loader-spinner';

import './Spiner.css';

export const Spinner = () => (
    <div className="spinner">
        <Loader type="BallTriangle" color="var(--main)" width="200" height="200" />
    </div>
);
