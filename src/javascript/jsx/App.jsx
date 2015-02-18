var React = require('react');
var fullpage = require('fullPage');

var LocationSel = require('./LocationSel.jsx');
var DateSel = require('./DateSel.jsx');
var ContactSel = require('./ContactSel.jsx');
var ConfirmationPage = require('./ConfirmationPage.jsx');
var AddtoCal = require('./AddtoCal.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      cityIdx: 0,
      dates: []
    };
  },
  cities: [
    'Barcelona', 
    'Verisailles',
    'Redmond',
    'Barcelonazoo'
  ],
  getClickedCityIdx: function(idx) {
    this.setState({cityIdx: idx});
    fullpage.controls.moveTo(2);
  },
  getSelectedDates: function(selection) {
    this.setState({dates: selection});
  },
  componentDidMount: function() {
    fullpage.init('#main', {
      resize: false,
      navigation: true,
      css3:true
    });
  },
  render: function() {
    return (
      <div id="main">
        <div className="section">
          <LocationSel onClick={this.advancePage} cities={this.cities} onChosenCity={this.getClickedCityIdx}></LocationSel>
        </div>
        <div className="section">
          <DateSel onDatesSelected={this.getSelectedDates} currentCity={this.cities[this.state.cityIdx]}></DateSel>
        </div>
        <div className="section">
          <ContactSel></ContactSel>
        </div>
        <div className="section">
          <AddtoCal></AddtoCal>
        </div>
        <div className="section">
          <ConfirmationPage></ConfirmationPage>
        </div>
      </div>
    );
  }
});

module.exports = App;
