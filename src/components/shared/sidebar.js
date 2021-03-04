import React from 'react';
import { Link, withRouter} from "react-router-dom";


export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <div className="sidebar">
                    <div className="container">
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Sidebar);