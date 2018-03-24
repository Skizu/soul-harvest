import * as React from 'react';
import '../style/ActionBar.css';

export default class ActionBar extends React.Component {
    render() {
        return (
            <div className="ActionBar">
                <div className="ActionBar-action">
                    1
                </div>
                <div className="ActionBar-action">
                    2
                </div>
                <div className="ActionBar-action">
                    3
                </div>
                <div className="ActionBar-action">
                    4
                </div>
                <div className="ActionBar-action">
                    Potion
                </div>
                <div className="ActionBar-option">
                    I
                </div>
                <div className="ActionBar-option">
                    H
                </div>

                <div className="ActionBar-option">
                    S
                </div>
            </div>
        );
    }
}
