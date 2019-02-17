import React from 'react';

const Contact = (props) => {
  console.log(props);
  setTimeout(() => {
    props.history.push('/');
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci tellus, tincidunt ac risus nec, dictum consectetur mauris.
        Phasellus rhoncus est sit amet vulputate gravida. Integer sed erat justo. Donec nec tortor id erat tempus imperdiet.
        Aliquam sapien elit, lobortis sit amet egestas quis, tincidunt vitae tortor.
        Curabitur convallis pharetra malesuada. Nunc sed efficitur dolor. Morbi suscipit urna est, a tempor enim suscipit ornare.</p>
    </div>
  )
}

export default Contact;