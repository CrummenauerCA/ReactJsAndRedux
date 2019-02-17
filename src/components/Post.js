import React, { Component } from 'react';
import axios from 'axios';

export default class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
      console.log(res.data);
      this.setState({
        post: res.data
      })
    }).catch(error => {
      console.log('Erro ao usar api: ' + error);
    });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="post">
        <h4 className="center">Carregando postagem...</h4>
      </div>
    )
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}