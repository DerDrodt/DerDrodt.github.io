import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import avatar from '../assets/avatar_400x400.jpg';

import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: rhythm(2.5),
        }}>
        <img
          src={avatar}
          alt="Daniel Drodt"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ margin: 0 }}>
          Written by <strong>Daniel Drodt</strong>.{' '}
          <a href="https://twitter.com/DerDrodt">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    );
  }
}

export default Bio;
