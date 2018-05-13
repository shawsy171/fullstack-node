import React from 'react';

import ContestPreview from './ContestPreview';

/**
 * @param {Array} contests
 * @return { [ jsx ] } [ ContestPreview ]
 */
const ContestList = ({ contests }) => (
  contests.map((contest) => <ContestPreview key={ contest.id } { ...contest }/>)
);

export default ContestList;
