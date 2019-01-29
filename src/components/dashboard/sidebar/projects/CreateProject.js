import React, { Component } from "react";
import createProject from "../../../../store/actions/createProject";
import { connect } from "react-redux";

export class CreateProject extends Component {
  state = { input: "", show: false, error: "" };

  handleClick = () => {
    this.setState(prevState => ({
      input: "",
      show: !prevState.show,
      error: ""
    }));
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleCreate = e => {
    e.preventDefault();

    if (this.state.input.trim()) {
      this.props.createProject(this.state.input);
      this.setState(prevState => ({ input: "", show: !prevState.show }));
    } else {
      this.setState({ error: "It should not be empty!" });
    }
  };

  render() {
    const defaultState = (
      <div className="button-field">
        <button className="button" onClick={this.handleClick}>
          Create New Project
        </button>
      </div>
    );

    const error = <div className="warn-text">{this.state.error}</div>;

    const createProjectForm = this.state.show ? (
      <form>
        <h4 className="form-header">Create Project</h4>
        <div className="input-field">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
        </div>
        <div className="input-field">
          <button className="button" onClick={this.handleCreate}>
            Create
          </button>
          <button className="button right" onClick={this.handleClick}>
            Cancel
          </button>
        </div>
        <div className="error-field">{this.state.error && error}</div>
      </form>
    ) : (
      <div>{defaultState}</div>
    );
    return <div>{createProjectForm}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: title => dispatch(createProject(title))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
