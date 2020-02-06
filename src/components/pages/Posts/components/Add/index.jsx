import React from "react";
import { getListPosts } from "./node_modules/components/pages/Posts/helpers";
import Item from "../Item";
import styles from "./styles.module.scss";

const Nav = () => {
  return (
    <div className={styles.root}>
      <h1>Posts</h1>
      <button type="button">Add post</button>
    </div>
  );
};

export default Nav;
