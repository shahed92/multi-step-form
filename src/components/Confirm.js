import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import { ListItem, RaisedButton, List } from 'material-ui';

class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Confirm Information" />

          <List>
            <ListItem
              primaryText="Name"
              secondaryText={firstName + ' ' + lastName}
            />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>

          <RaisedButton
            label="Confirm & Continue"
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
export default Confirm;
