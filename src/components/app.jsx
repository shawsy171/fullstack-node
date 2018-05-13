import React from 'react';
import axios from 'axios';

// components
import Header from './header';
import ContestPreview from './ContestPreview';

/**
 * App Component
 */
class App extends React.Component {
  state = {
    pageHeader: 'Home Page',
    contests: [],
  }

  // static propTypes = {
  //   contests: PropTypes.array.isRequired,
  // }

  /**
   * set contest data
   */
  componentWillMount () {
    axios.get('/api/contests')
      .then((res) => {
        this.setState(() => ({
          contests: res.data.contests,
        }));
      })
      .catch(console.error);
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
