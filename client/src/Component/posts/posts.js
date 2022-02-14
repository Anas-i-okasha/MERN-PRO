import React, { Component } from "react";
import Post from "./post/post";
class post extends Component {
  render() {
    return (
      <>
        <h2>posts</h2>
        <Post />
        <Post />
      </>
    );
  }
}

export default post;
