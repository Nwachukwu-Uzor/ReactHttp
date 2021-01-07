import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;