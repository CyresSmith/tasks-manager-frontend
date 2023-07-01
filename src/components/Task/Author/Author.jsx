import React from 'react';
import { AuthorInfo } from './Author.styled';

const Author = ({ author }) => {
  return (
    <div>
      <h3>Author</h3>
      <AuthorInfo>
        <span>Email: {author.email}</span>
        <span>Role: {author.role}</span>
      </AuthorInfo>
    </div>
  );
};

export default Author;
