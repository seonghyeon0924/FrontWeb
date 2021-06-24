import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignupForm from './Signup/SignupForm';
import LoginForm from './Login/LoginForm';
import MainForm from './Main/MusicForm';
import FindAccount from './Accounts/FindAccount';
import history from './history';
import BoardUpload from './Main/BoardUpload';
import Myinfo from './Mypage/Myinfo';
import BoardForm from './Main/BoardForm';
import MusicUpload from './Main/MusicUpload';

class Routes extends React.Component {
    render() {
      return (
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/main" component={MainForm} />
            <Route exact path="/find" component={FindAccount}/>
            <Route exact path="/boardup" component={BoardUpload}/>
            <Route exact path="/board" component={BoardForm}/>
            <Route exact path="/mypage" component={Myinfo}/>
            <Route exact path="/musicup" component={MusicUpload}></Route>
          </Switch>
        </Router>
      )
    }
  }
  
  export default Routes;