import React, { Component } from "react";
import createProject from "../../../store/actions/createProject";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export class NewProject extends Component {
  state = {
    input: "",
    redirect: false
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
    this.setState({ input: "", redirect: true });
  };

  render() {
    const createProjectForm = (
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
              className="btn yellw"
              onClick={() => {
                this.props.createProject(this.state.input);
                this.setState({ redirect: true });
              }}
            >
              Create
            </div>
          </form>
        </div>
      </div>
    );

    return (
      <div>
        {createProjectForm}
        {this.state.redirect && <Redirect to="/" />}
      </div>
    );
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
)(NewProject);

/**
 *  import React, { PropTypes } from 'react'; 
 * import ReactDOM from 'react-dom'; 
 * import { BrowserRouter } from 'react-router-dom'; 
 * import { Redirect } from 'react-router'
 *  import SignUpForm from '../../register/components/SignUpForm';
 *  import styles from './PagesStyles.css';
 *  import axios from 'axios';
 *  import Footer from '../../shared/components/Footer';
 *  class SignUpPage extends React.Component
 *  { constructor(props) 
 * { super(props);
 *  this.state = {
 *  errors: {},
 *  callbackResponse: null,
 *  client: { userclient: '', clientname: '', clientbusinessname: '', password: '', confirmPassword: '' } };
 *  this.processForm = this.processForm.bind(this);
 *  this.changeClient = this.changeClient.bind(this); 
 * } changeClient(event) { const field = event.target.name; 
 * const client = this.state.client; client[field] = event.target.value; 
 * this.setState({ client }); } processForm(event) { event.preventDefault();
 * const userclient = this.state.client.userclient; 
 * const clientname = this.state.client.clientname; 
 * const clientbusinessname = this.state.client.clientbusinessname; 
 * const password = this.state.client.password; 
 * const confirmPassword = this.state.client.confirmPassword; 
 * const formData = { userclient, clientname, clientbusinessname, password, confirmPassword };
 *  axios.post('/signup', 
 * formData, 
 * { headers: {'Accept': 'application/json'} })
 *  .then((response) => { 
 * this.setState({ 
 * callbackResponse: {response.data}, }); }).catch((error) => {
 *  const errors = error.response.data.errors ? error.response.data.errors : {}; errors.summary = error.response.data.message;
 *  this.setState({ errors }); }); } const renderMe = ()=>{
 *  return( this.state.callbackResponse ?
 *  <SignUpForm onSubmit={this.processForm} onChange={this.changeClient} errors={this.state.errors} client={this.state.client} /> 
 * : <Redirect to="/"/> )} 
 * render() { 
 * return ( <div className={styles.section}> <div className={styles.container}> <img src={require('./images/lisa_principal_bg.png')} className={styles.fullImageBackground} /> {renderMe()} <Footer /> </div> </div> ); } } 
 * export default SignUpPage; 

 */
