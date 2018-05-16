import React from 'react';
import { Link } from 'react-router-dom';


export default class extends React.Component {
    render() {
        return (
            <div>
                Home Page
                <Link to="/about">about page</Link>
            </div>
        );
    }
}