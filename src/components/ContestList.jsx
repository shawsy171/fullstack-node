import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

/**
 * @param {Array} contests
 * @return { [ jsx ] } [ ContestPreview ]
 */
const ContestList = ({ contests, onContestClick }) => (
  Object.keys(contests).map((contestId) =>
    <ContestPreview
      { ...contests[contestId] }
      key={ contestId }
      onClick={ onContestClick }
    />
  )
);

ContestList.propTypes = {
  onContestClick: PropTypes.func.isRequired,
};

export default ContestList;
