import React from "react";
import Item from "../Item";
import styles from "./styles.module.scss";

const List = ({ posts, removePost, showEditForm }) => {
  const postsList = posts.map(post => {
    return (
      <Item
        key={post.id}
        post={post}
        showEditForm={showEditForm}
        removePost={removePost}
      />
    );
  });

  return <div className={styles.root}>{postsList}</div>;
};

export default List;
