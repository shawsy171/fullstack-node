import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContestDescription = styled.div`
  letter-spacing: 3px;
  background-color: #f7efa8;
`;

const BackButton = styled.button`
  background-color: blue;
  color: #fff;
  border: 0;
  padding: 10px 8px;
  cursor: pointer;
`;
/**
 * Contest
 */
class Contest extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    onBackToContests: PropTypes.func.isRequired,
  }

  /**
   * @return { jsx } Contest Component
   */
  render () {
    return (
      <div>
        <ContestDescription>
          {this.props.description}
        </ContestDescription>
        <BackButton onClick={ this.props.onBackToContests }>
          Back To Contests
        </BackButton>
      </div>
    );
  }
}

export default Contest;
