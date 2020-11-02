import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

import { RaisedButton } from 'material-ui';

export class UserPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  ///back button
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter Your Personal Details" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLableText="Your Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your city"
            floatingLableText="Last Name"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your bio"
            floatingLableText="Bio "
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            onClick={this.back}
            style={backButtonStyle}
          />
        </>
      </MuiThemeProvider>
    );
  }
}
const backButtonStyle = {
  marginLeft: '5px',
};
export default UserPersonalDetails;
