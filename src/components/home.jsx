import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Pokeball from "../Capture.PNG";
import { connect } from "react-redux"; // a function that call a Higher order component to connect to redux store
class Home extends Component {
  render() {
    const { posts } = this.props;
    const postsList = posts.length ? (
      posts.map(post => {
        const path = "/" + post.id;
        return (
          <div
            className="card m-1 "
            style={{ overflow: "hidden", paddingLeft: 140 }}
            key={post.id}
          >
            <img
              style={{
                position: "absolute",
                top: 0,
                left: -130,
                opacity: 0.5
              }}
              src={Pokeball}
            />
            <div className="card-footer ">
              <NavLink to={path}>
                <h4 className="card-title text-danger">{post.title} </h4>
              </NavLink>

              <p className="card-body">{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts Yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postsList}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(Home);
