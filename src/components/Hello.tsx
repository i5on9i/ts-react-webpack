
import * as Styles from './sty.css';
import * as React from "react";
import {RouteComponentProps, Link} from 'react-router-dom';

export interface HelloProps extends RouteComponentProps<any>, React.Props<any> {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (
            <div>
                <h1 className={Styles.test}>
                    Hello from {
                        // param from <Route>
                        this.props.match.params.helloId} and {this.props.framework}!
                </h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </div>
        );
    }
}