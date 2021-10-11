import { Switch, Route } from 'react-router-dom'
import Grant from '../views/Grant/Grant'
import Home from '../views/Home/Home'
import Register from '../views/Register/Register'
import UserInfo from '../views/UserInfo/UserInfo'

const Routes = ({ updateUserData, updateUserEmail, currentUserData, currentUserEmail }) => {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/conseguir-beca' render={(props) => <UserInfo updateUserData={updateUserData} {...props} />} />
			<Route exact path='/registro' render={(props) => <Register updateUserEmail={updateUserEmail} {...props}/>} />
			<Route exact path='/becas' render={(props) => <Grant currentUserData={currentUserData} currentUserEmail={currentUserEmail} {...props}/>} />
		</Switch>
	)
}
export default Routes
