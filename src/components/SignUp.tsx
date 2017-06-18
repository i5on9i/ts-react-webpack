import * as React from "react";
import {Link, Switch, Route} from 'react-router-dom'

import {Hello} from './Hello'


export interface SignUpProps { compiler: string; framework: string; }

// 'SignUpProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class SignUp extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
                
                <Switch>
                    <Route exact path='/' render={()=>(<h1>Test root </h1>)}/>
                    <Route path='/hello/:helloId' component={Hello}/>
                </Switch>
                <Link to='/hello/test'>to Hello</Link>

               
            </div>
        );
    }
}
