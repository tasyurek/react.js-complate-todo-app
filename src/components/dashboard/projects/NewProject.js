import React, { Component } from "react";
import createProject from "../../../store/actions/createProject";
import { connect } from "react-redux";

export class NewProject extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let input = this.state.input;

    if (!input.trim()) {
      return;
    }
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6 offset-m3 l4 offset-l4">
            <h3>Create Project</h3>
            <form>
              <label htmlFor="title">
                Project name
                <input
                  type="text"
                  id="title"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
              </label>
              <div
                className="btn"
                onClick={() => this.props.createProject(this.state.input)}
              >
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: title => {
      dispatch(createProject(title));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewProject);
