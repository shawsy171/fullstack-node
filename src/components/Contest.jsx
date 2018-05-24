import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// styles
const ContestDescription = styled.div`
  letter-spacing: 3px;
  background-color: #f7efa8;
`;

const BackButton = styled.button`
  background-color: blue;
  color: #fff;
  border: 0;
  padding: 10px 8px;
  cursor: pointer;
`;
/**
 * Contest
 */
class Contest extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    onBackToContests: PropTypes.func.isRequired,
    fetchNames: PropTypes.func.isRequired,
    nameIds: PropTypes.arrayOf(PropTypes.string),
    lookupName: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    /**
     * where does this.props.nameIds come from?
     * =========================================
     * this.props.nameIds comes from
     * { ...this.currentContest() } passed in App.js
     * { ...this.currentContest() } is an individual contest
     */
    this.props.fetchNames(this.props.nameIds);
  }

  /**
   * @return { jsx } Contest Component
   */
  render () {
    return (
      <div className="Contest">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Contest Description</h3>
          </div>
          <div className="panel-body">
            <ContestDescription>
              {this.props.description}
            </ContestDescription>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Proposed Names</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {
                this.props.nameIds.map((nameId) => (
                  <li className="list-group-item" key={ nameId }>
                    {this.props.lookupName(nameId).name}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Propose a New Name</h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="New Name Here..."
                  className="form-control"
                />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-info">Sumbit</button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <BackButton onClick={ this.props.onBackToContests }>
          Back To Contests
        </BackButton>
      </div>
    );
  }
}

export default Contest;
