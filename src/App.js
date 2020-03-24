import React, { Component } from 'react'
import Login from './pages/login'
import Naviga from "./pages/naviga"
import Sign from './pages/sign'
import Map from './pages/maplist'
import Locations from './pages/locations'
import { HashRouter, Switch, Route } from 'react-router-dom'
export default class app extends Component {
    render() {
        return (
            <div style={{ width: '100%',height:'100%' }}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Naviga}/>
                        <Route path="/login" component={Login} />
                        <Route path="/sign" component={Sign} />
                        <Route path="/maplist" component={Map} />
                        <Route path="/locations" component={Locations} />
                        <Route component={Naviga} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
