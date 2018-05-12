import React from 'react';
import PropTypes from 'prop-types';

// components
import Header from './header';
import ContestPreview from './ContestPreview';

/**
 * App Component
 */
class App extends React.Component {
  state = {
    pageHeader: 'Home Page',
  }

  static propTypes = {
    contests: PropTypes.array.isRequired,
  }

  /**
   * Renders main App
   * @return { jsx } Header Component
   */
  render() {
    const { contests } = this.props;
    return (
      <div>
        <Header message="Well this is the truth"/>
        {
          contests.map((contest) => {
            return <ContestPreview key={ contest.id } { ...contest }/>;
          })
        }
      </div>
    );
  }
};

export default App;

// react/jsx-first-prop-new-line
