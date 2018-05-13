import React from 'react';
import PropTypes from 'prop-types';

// components
import Header from './header';
import ContestList from './ContestList';

/**
 * App Component
 */
class App extends React.Component {
  state = {
    pageHeader: 'Home Page',
    contests: this.props.initialContests,
  }

  static propTypes = {
    initialContests: PropTypes.array.isRequired,
  }

  /**
   * Renders main App
   * @return { jsx } Header Component
   */
  render () {
    // const { contests } = this.props;
    const { contests } = this.state;
    return (
      <div>
        <Header message="Sections"/>
        <ContestList contests={ contests }/>
      </div>
    );
  }
};

export default App;

// react/jsx-first-prop-new-line
