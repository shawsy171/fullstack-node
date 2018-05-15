import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Contest
 */
class Contest extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
  }

  /**
   * @return { jsx } Contest Component
   */
  render () {
    return (
      <div>
        {this.props.description}
      </div>
    );
  }
}

export default Contest;
