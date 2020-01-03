import React, { Component } from "react";
import { Link } from "react-router-dom";
import likeLogo from "../assets/thumbs-up-regular.svg";
import dislikeLogo from "../assets/thumbs-down-regular.svg";
import regBook from "../assets/bookmark-regular.svg";
import solidBook from "../assets/bookmark-solid.svg";
import { connect } from "react-redux";
import { likePost, dislikePost, markPost } from "../actions/postActions";

const Home = ({ posts, likePost, dislikePost, markPost }) => {
  const handleLike = id => {
    likePost(id);
  };

  const handleDislike = id => {
    dislikePost(id);
  };

  const handleBookMark = id => {
    markPost(id);
  };

  return (
    <div>
      <div className="container home">
        {posts.length ? (
          posts.map(post => {
            return (
              <div className="post card" key={post.id}>
                <div className="img-container">
                  <img src={post.imgSrc} alt="A Pokeball" />
                </div>
                <div className="card-content-wrapper">
                  <Link to={"/" + post.id}>
                    <span className="title-text">{post.title}</span>
                  </Link>
                  <p>{post.body}</p>
                  <div className="features-container">
                    <div className="like-container">
                      <img
                        onClick={() => {
                          handleLike(post.id);
                        }}
                        src={likeLogo}
                      />
                      <p>{post.like}</p>
                    </div>
                    <div className="dislike-container">
                      <img
                        onClick={() => {
                          handleDislike(post.id);
                        }}
                        src={dislikeLogo}
                      />
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
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="center">No posts to show</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    likePost: id => dispatch(likePost(id)),
    dislikePost: id => dispatch(dislikePost(id)),
    markPost: id => dispatch(markPost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
