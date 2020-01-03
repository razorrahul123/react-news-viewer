import React, { Component, useEffect, useState } from "react";
import likeLogo from "../assets/thumbs-up-regular.svg";
import dislikeLogo from "../assets/thumbs-down-regular.svg";
import regBook from "../assets/bookmark-regular.svg";
import solidBook from "../assets/bookmark-solid.svg";
import { connect } from "react-redux";
import {
  deletePost,
  likePost,
  dislikePost,
  markPost
} from "../actions/postActions";

const Post = ({
  post,
  history,
  likePost,
  dislikePost,
  deletePost,
  markPost
}) => {
  const handleClick = () => {
    deletePost(post.id);
    history.push("/");
  };

  const handleLike = () => {
    likePost(post.id);
  };

  const handleDislike = () => {
    dislikePost(post.id);
  };

  const handleBookMark = () => {
    markPost(post.id);
  };

  return (
    <div className="container-post">
      {post ? (
        <div className="post" key={post.id}>
          <div className="img-container">
            <img src={post.imgSrc} alt="A Pokeball" />
          </div>
          <div className="card-content-wrapper">
            <span className="center">{post.title}</span>
            <p>{post.body}</p>
            <div className="features-container">
              <div className="like-container">
                <img onClick={handleLike} src={likeLogo} />
                <p>{post.like}</p>
              </div>
              <div className="dislike-container">
                <img onClick={handleDislike} src={dislikeLogo} />
                <p>{post.dislike}</p>
              </div>
              <div className="bookmark-container">
                <img
                  onClick={() => {
                    handleBookMark(post.id);
                  }}
                  src={post.isBookMark ? solidBook : regBook}
                />
              </div>
              <div className="read-more-container">
                {post.moreLink && (
                  <a href={post.moreLink} target="_blank">
                    Read More
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="delete-container">
            <button className="btn grey" onClick={handleClick}>
              Delete Post
            </button>
          </div>
        </div>
      ) : (
        <div className="center">Loading post...</div>
      )}
    </div>
  );
};

// class Post extends Component {
//   handleClick = () => {
//     this.props.deletePost(this.props.post.id);
//     this.props.history.push("/");
//   };

//   handleLike = () => {
//     this.props.likePost(this.props.post.id);
//   };

//   handleDislike = () => {
//     this.props.dislikePost(this.props.post.id);
//   };

//   handleBookMark = () => {
//     this.props.markPost(this.props.post.id);
//   };

//   render() {
//     console.log("props", this.props);
//     const post = this.props.post ? (
//       <div className="post" key={this.props.post.id}>
//         <div className="img-container">
//           <img src={this.props.post.imgSrc} alt="A Pokeball" />
//         </div>
//         <div className="card-content-wrapper">
//           <span className="center">{this.props.post.title}</span>
//           <p>{this.props.post.body}</p>
//           <div className="features-container">
//             <div className="like-container">
//               <img onClick={this.handleLike} src={likeLogo} />
//               <p>{this.props.post.like}</p>
//             </div>
//             <div className="dislike-container">
//               <img onClick={this.handleDislike} src={dislikeLogo} />
//               <p>{this.props.post.dislike}</p>
//             </div>
//             <div className="bookmark-container">
//               <img
//                 onClick={() => {
//                   this.handleBookMark(post.id);
//                 }}
//                 src={this.props.post.isBookMark ? solidBook : regBook}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="delete-container">
//           <button className="btn grey" onClick={this.handleClick}>
//             Delete Post
//           </button>
//         </div>
//       </div>
//     ) : (
//       <div className="center">Loading post...</div>
//     );

//     return <div className="container-post">{post}</div>;
//   }
// }

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id),
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id)),
    likePost: id => dispatch(likePost(id)),
    dislikePost: id => dispatch(dislikePost(id)),
    markPost: id => dispatch(markPost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
