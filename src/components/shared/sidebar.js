import React from 'react';
import { Link, withRouter} from "react-router-dom";


export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <div className="footer">
                    <div className="container">
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer);