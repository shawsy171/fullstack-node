import React from 'react';
import PropTypes from 'prop-types';

// components
import Header from './header';
import ContestList from './ContestList';
import Contest from './Contest';

// services
import { pushState } from './../services/routing';
import * as api from './../services/api';

/**
 * App Component
 * @param { number } contestId
 * @return { jsx } App Component
 */
class App extends React.Component {
  state = this.props.initialData;

  static propTypes = {
    initialData: PropTypes.object.isRequired,
  }

  /**
   * Fetch contest from the database
   * and Route to url
   * @param { number } contestId
   */
  fetchContest = (contestId) => {
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`,
    );
    console.log(contestId);
    api.fetchContest(contestId)
      .then((contest) => {
        this.setState(() => (
          {
            currentContestId: contest.id,
            contests: {
              ...this.state.contests,
              [contest.id]: contest,
            },
          }
        ));
      });
  };

  /**
   * Fetch contest list from the database
   * and Route to url
   */
  fetchContestList = () => {
    pushState(
      { currentContestId: null },
      `/`,
    );
    api.fetchContestList()
      .then((contests) => {
        console.log(contests);
        this.setState(() => (
          {
            currentContestId: null,
            contests,
          }
        ));
      });
  };

  /**
   * @return { object } current contest
   */
  currentContest () {
    return this.state.contests[this.state.currentContestId];
  }

  /**
   * @return { string } page header
   */
  pageHeader = () => {
    return this.state.currentContestId ?
      this.currentContest().contestName :
      'Contests';
  }

  /**
   * show content based on currentContestId
   * @return { jsx } Component
   */
  currentContent () {
    if ( !this.state.currentContestId ) {
      return <ContestList
        contests={ this.state.contests }
        onContestClick={ this.fetchContest }
      />;
    }

    return <Contest
      onBackToContests={ this.fetchContestList }
      { ...this.currentContest() } />;
  }

  /**
   * Renders main App
   * @return { jsx } Header Component
   */
  render () {
    return (
      <div>
        <Header message={ this.pageHeader() }/>
        { this.currentContent() }
      </div>
    );
  }
};

export default App;

// react/jsx-first-prop-new-line
