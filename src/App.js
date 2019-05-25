import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreate from './containers/QuizCreator/QuizCreator';
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";
import {autoLogin} from "./store/actions/auth";

class App extends React.Component {

    componentDidMount() {
        this.props.authLogin()
    }

    render() {

        let routes = (
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/quiz/:id" component={Quiz}/>
                <Route path="/" component={QuizList}/>
                <Redirect to='/'/>
            </Switch>
        )

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/quiz-creator" component={QuizCreate}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/" component={QuizList}/>
                    <Route path="/logout" component={Logout}/>
                    <Redirect to='/'/>
                </Switch>
            )
        }

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    console.log('tok', state.auth.token)
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
