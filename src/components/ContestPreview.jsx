import React from 'react';
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
`;

/**
 * @param { object } contests
 * @return { jsx } ContestPreview
 */
 const ContestPreview = (contests) => (
  <Preview className="contest-preview">
    <Category>{ contests.categoryName }</Category>
    <Contest>{ contests.contestName }</Contest>
  </Preview>
);

export default ContestPreview;
