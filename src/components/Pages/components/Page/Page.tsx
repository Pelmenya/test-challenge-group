import React from 'react';

import './Page.css';

interface PageProps {
    children: JSX.Element;
}

export const Page = (props: PageProps) => (
    <div className="page-wrap-column">
        <div className="page-wrap-row">{props.children}</div>
    </div>
);
