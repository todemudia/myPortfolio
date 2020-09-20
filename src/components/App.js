import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';
import Todo from './todoapp/Todo';
import GitProfile from './gitprofile/GitProfile';
import Counter from './counter/Counter';
import TicTacToe from './tictac/TicTacToe';

const App = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/todo' component={Todo} />
                <Route path='/gitprofile' component={GitProfile} />
                <Route path='/counter' component={Counter} />
                <Route path='/courses' component={CoursesPage} />
                <Route path='/tictac' component={TicTacToe} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default App;