import React from 'react';
import { Link, withRouter} from "react-router-dom";


export class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <div className="header">
                    <div className="container">
                        <div className="header-menu">
                            <ul>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);