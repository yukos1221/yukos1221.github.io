import React from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import MainPage from '../../pages/Main'

import styles from './styles'

const RouteComponent = () => (
	<Router>
		<Switch>
			<Route path="/">
				<MainPage />
			</Route>
		</Switch>
	</Router>
)

export default withStyles(styles)(RouteComponent)
