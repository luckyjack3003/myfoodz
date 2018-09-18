import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import AppHomeComponent from '../components/AppHome/AppHomeComponent'
import OwnReduxComponent from '../components/OwnReduxComponent/OwnReduxComponent'
import FoodzHeader from '../components/TopNav/FoodzHeader'

const MainComponent = ({ match,props }) => (
    <div >
        <FoodzHeader>
        </FoodzHeader>
        <main>
            <Switch>
                <Route path={`${match.path}`} exact component={AppHomeComponent} />
                <Route path={`${match.path}/youfoodz`} exact component={AppHomeComponent} />
                <Route path={`${match.path}/myRedux`} exact component={OwnReduxComponent} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default MainComponent