import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Preview = styled.div`
  margin: 1em;
  border: 1px solid #ccc;
  border-radius: 10px 10px 0 0;
`;

const Category = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0.25em 0.5em;
  font-weight: bold;
  font-size: 18px;
  background-color: #3090C7;
  color: #FFF;
  /* #82CAFA */
  border-radius: 10px 10px 0 0;
`;

const Contest = styled.div`
  padding: 0.5em;
  cursor: pointer;
`;

/**
 * @param { object } contests
 * @return { jsx } ContestPreview
 */
class ContestPreview extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  /**
  * show
  */
  handleContestClick = () => {
    this.props.onClick(this.props.id);
  };

  /**
   * @return { jsx } Contest Preview
   */
  render () {
    const {
      categoryName,
      contestName,
    } = this.props;

    return (
      <Preview className="contest-preview">
        <Category>
          { categoryName }
        </Category>
        <Contest
          onClick={ this.handleContestClick }>
          { contestName }
        </Contest>
      </Preview>
    );
  }
}

export default ContestPreview;


