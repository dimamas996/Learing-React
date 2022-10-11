import React from "react";
import Author from "./Author";

export default function AuthorList({ authors }) {
  const authorsArr = authors.map((author) => {
    return <Author key={author.id} author={author} />;
  });
  return <div className="authors-list">{authorsArr}</div>;
}
