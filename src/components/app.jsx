import React from 'react';
import Header from './header';

/**
 * App Component
 */
class App extends React.Component {
  state = {
    pageHeader: 'Home Page',
  }
  /**
   * Renders main App
   * @return { jsx } Header Component
   */
  render() {
    return (
      <div>
        <Header message="Well this is the truth"/>
      </div>
    );
  }
};

export default App;
