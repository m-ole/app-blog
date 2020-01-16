import React from "react";
import styles from "./styles.module.scss";

const getListPosts = () => {
  const url =
    "http://blog.api.axenov-it.com/v1/posts?api_key=c752061ad9008659a4f477b8e6f896ba";

  return fetch(url).then(response => response.json());
};

const ListPosts = () => {
  getListPosts();
  return <h1>Hello List Posts</h1>;
};

export default ListPosts;
