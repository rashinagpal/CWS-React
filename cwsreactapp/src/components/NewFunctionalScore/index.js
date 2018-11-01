import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import Select from "react-select";

import withAuthorization from "../Session/withAuthorization";
import { AgGridReact } from "ag-grid-react";
import * as firebase from "firebase";
import "firebase/database";

import ImpairmentModal from '../Modal/ImpairmentModal';
import '../../constants/column-defs';
import columnDefs from "../../constants/column-defs";

const reportCategories = [
  { value: 'Impairment of Body Functions', label: 'Impairment of Body Functions' },
  { value: 'Capacity and Performance', label: 'Capacity and Performance' },
  { value: 'Environment', label: 'Environment' },
];

class NewFunctionalScorePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [],
      selectedPatient: {},
      selectedReportCategory: {},
      columnDefs: columnDefs.getImpairmentColumns(),
      rowData: "",
      selectedModal: undefined
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  componentWillMount() {
    this.getPatients();
  }

  getPatients() {
    var rootRef = firebase
      .database()
      .ref()
      .child("patient");

    rootRef.on("child_added", snapshot => {
      let element = {
        value: snapshot.val().label.split(' - ')[0],
        label: snapshot.val().label
      };
      this.setState(prevState => ({
        patients: [...prevState.patients, element]
      }));
    });
  }

  getReports() {
    // Check if both a patient and category have been selected before querying the DB
    if (this.state.selectedPatient.label && this.state.selectedReportCategory.label) {
      var rootRef = firebase
        .database()
        .ref()
        .child("patient")
        .child(this.state.selectedPatient.value)
        .child("reports")
        .child(this.state.selectedReportCategory.value);

      let data = [];

      rootRef.on("child_added", snapshot => {
        // Store all the labels in array
        data.push(snapshot.val());
        // TODO: Sorting every time an item is added, not very efficient. Upgrade if necessary later
        data.sort((a, b) => {
          if (a.id === b.id) {
            // Sort by date when they are part of the same subdomain
            return new Date(b.assessmentDate) - new Date(a.assessmentDate);
          }
          return a.id > b.id ? 1 : -1;
        });
      });
      this.setState({
        rowData: data
      });
    }
  }

  handleChangePatient = selectedPatient => {
    this.setState({ selectedPatient }, () => this.getReports());
  };

  handleChangeCategory = selectedReportCategory => {
    let newState = {
      selectedReportCategory,
      columnDefs: columnDefs.getImpairmentColumns()
    };

    if (selectedReportCategory.value === reportCategories[0].value) {
      newState.columnDefs = columnDefs.getImpairmentColumns();
    }
    else if (selectedReportCategory.value === reportCategories[1].value) {
      newState.columnDefs = columnDefs.getCapacityColumns();
    }
    else if (selectedReportCategory.value === reportCategories[2].value) {
      newState.columnDefs = columnDefs.getEnvironmentColumns();
    }
    
    this.setState({ 
        selectedReportCategory: newState.selectedReportCategory,
        columnDefs: newState.columnDefs
      }, () => this.getReports());
  }

  handleCloseModal = () => {
    this.setState(() => ({ selectedModal: false }))
  }

  handleOpenModal = () => {
    this.setState(() => ({ selectedModal: true }))
  }

  render() {
    let containerStyle = {
      height: 500,
      width: 1250
    };

    return (
      <div>
        <b>Select Patient</b>
        <ImpairmentModal
          selectedModal={this.state.selectedModal}
          handleCloseModal={this.handleCloseModal}
          sessionStore={this.props.sessionStore}
        />
        <Select
          className="m-2"
          options={this.state.patients}
          value={this.state.selectedPatient.querySelector}
          onChange={this.handleChangePatient}
        />

        <br />

        <b>Select the Category of Report</b>
        <Select
          className="m-2"
          options={reportCategories}
          value={this.state.selectedReportCategory.querySelector}
          onChange={this.handleChangeCategory}
        />

        <br />

        <button onClick={this.handleOpenModal}>Add New Functional Score</button>

        <div style={containerStyle} className="ag-fresh">
          <h1>{this.state.selectedReportCategory.value}</h1>
          <AgGridReact
            // properties
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            enableSorting
            enableFilter
            floatingFilter
            rowSelection="multiple"
            // events
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject("sessionStore"),
  observer
)(NewFunctionalScorePage);
