import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Repo.css';

class Repo extends Component {

    render() {
        return (
            <section className="repo">
                <h2 className="repo__title">{this.props.title}</h2>
                <p className="repo__body">{this.props.body}</p>
                <div className="repo__footer">
                    <span><i className="fa fa-code-fork"></i> {this.props.fork_num}</span>
                    <span><i className="fa fa-commenting-o"></i> {this.props.comment_num}</span>
                    <span><i className="fa fa-star-o"></i> {this.props.star_num}</span>
                </div>
            </section>
        );
    }
}

export default Repo;