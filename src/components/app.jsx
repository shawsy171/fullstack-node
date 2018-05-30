import React from 'react';
import PropTypes from 'prop-types';

// components
import Header from './header';
import ContestList from './ContestList';
import Contest from './Contest';

// services
import { pushState } from './../services/routing';
import * as api from './../services/api';

class App extends React.Component {
  state = this.props.initialData;

  static propTypes = {
    initialData: PropTypes.object.isRequired,
  }

  /**
   * current route state
   * @param { function } handler
   */
  onPopState = (handler) => {
    // let window;

    if (!process.env.BROWSER) {
      // window = {}; // Temporarily define window for server-side
    }

    // if (typeof window === 'undefined') {
    //   global.window = {};
    // }

    // if (window !== undefined) {
    window.onpopstate = handler;
    // }
  }

  /**
   * Inital function
   */
  componentDidMount () {
    this.onPopState((e) => {
      this.setState(() => (
        {
          currentContestId: (e.state || {}).currentContestId,
        }
      ));
    });
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
    api.fetchContest(contestId)
      .then((contest) => {
        this.setState(() => (
          {
            currentContestId: contest._id,
            contests: {
              ...this.state.contests,
              [contest._id]: contest,
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
        this.setState(() => (
          {
            currentContestId: null,
            contests,
          }
        ));
      });
  };

  /**
   * @param { array } nameIds
   */
  fetchNames = (nameIds) => {
    if (nameIds.length === 0) {
      return;
    }
    api.fetchNames(nameIds)
      .then((names) => {
        this.setState(() => ({
          names,
        }));
      });
  }

  /**
   * current contest from state
   * @return { object }
   */
  currentContest () {
    return this.state.contests[this.state.currentContestId];
  }

  /**
   * Get page header based on current contest
   * @return { string }
   */
  pageHeader = () => {
    return this.state.currentContestId ?
      this.currentContest().contestName :
      'Contests';
  }

  addName = (name, contestId) => {
    api.addName(name, contestId)
      .then(((res) => {
        this.setState(() => ({
          contests: {
            ...this.state.contests,
            [res.updatedContest._id]: res.updatedContest,
          },
          names: {
            ...this.state.names,
            [res.newName._id]: res.newName,
          },
        }));
      }));
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
      fetchNames={ this.fetchNames }
      lookupName={ this.lookupName }
      addName={ this.addName }
      { ...this.currentContest() } />;
  }

  lookupName = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]) {
      return {
        name: '...',
      };
    }

    return this.state.names[nameId];
  }

  /**
   }* clear popstate when component unmounts
   */
  componentWillUnmount () {
    this.onPopState(null);
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
