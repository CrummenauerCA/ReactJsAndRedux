import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci tellus, tincidunt ac risus nec, dictum consectetur mauris.
        Phasellus rhoncus est sit amet vulputate gravida. Integer sed erat justo. Donec nec tortor id erat tempus imperdiet.
        Aliquam sapien elit, lobortis sit amet egestas quis, tincidunt vitae tortor.
        Curabitur convallis pharetra malesuada. Nunc sed efficitur dolor. Morbi suscipit urna est, a tempor enim suscipit ornare.</p>
    </div>
  )
}

export default Rainbow(About);