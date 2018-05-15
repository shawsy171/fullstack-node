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
  state = {
    pageHeader: 'Home Page',
    contests: this.props.initialContests,
    currentContestId: undefined,
  }

  static propTypes = {
    initialContests: PropTypes.object.isRequired,
  }

  /**
   * Fetch contest from the database
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
            pageHeader: contest.contestName,
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
   * show content based on currentContestId
   * @return { jsx } Component
   */
  currentContent = () => {
    if ( !this.state.currentContestId ) {
      return <ContestList
        contests={ this.state.contests }
        onContestClick={ this.fetchContest }
      />;
    } else {
      return <Contest
        { ...this.state.contests[this.state.currentContestId] }
      />;
    }
  }

  /**
   * Renders main App
   * @return { jsx } Header Component
   */
  render () {
    const {
      pageHeader,
    } = this.state;

    return (
      <div>
        <Header message={ pageHeader }/>
        { this.currentContent() }
      </div>
    );
  }
};

export default App;

// react/jsx-first-prop-new-line
