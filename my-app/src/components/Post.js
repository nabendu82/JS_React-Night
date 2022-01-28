import React from 'react';
import './Post.css';
import styled from 'styled-components';

const headerStyle = {
    fontSize: '26px',
    color: 'red'
}

const SubTitle = styled.h3`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Post = ({ post }) => {
    return (
        <div className="item">
            <h1 style={headerStyle}>id: {post.id}</h1>
            <SubTitle>Title: {post.title}</SubTitle>
            <p style={{ fontWeight: 'bolder', color: 'green'}}>{post.body}</p>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
};

export default Post;
