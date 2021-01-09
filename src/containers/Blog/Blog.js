import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import asynComponent from '../../hoc/asyncComponent';
// import axios from 'axios';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asynComponent(() => {
    return import ('./NewPost/NewPost');
})


class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: "#fa923f",
                                    textDecoration: "underline"
                                }}
                            >
                                Posts
                            </NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>Not found</h1>}/>
                    {/*<Redirect from="/" to="/posts" />*/}
                    {/*<Route path="/" component={Posts}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;