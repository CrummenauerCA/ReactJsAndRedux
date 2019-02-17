import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="Imagem de uma Pokebola"></img>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div>
          Sem postagens ainda...
      </div>
      );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci tellus, tincidunt ac risus nec, dictum consectetur mauris.
          Phasellus rhoncus est sit amet vulputate gravida. Integer sed erat justo. Donec nec tortor id erat tempus imperdiet.
          Aliquam sapien elit, lobortis sit amet egestas quis, tincidunt vitae tortor.
        Curabitur convallis pharetra malesuada. Nunc sed efficitur dolor. Morbi suscipit urna est, a tempor enim suscipit ornare.</p>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);