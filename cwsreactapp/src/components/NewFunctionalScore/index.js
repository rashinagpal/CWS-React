import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import Select from "react-select";

import withAuthorization from "../Session/withAuthorization";
import { AgGridReact } from "ag-grid-react";
import * as firebase from "firebase";
import "firebase/database";

import Navigation1 from "../NewFunctionalScore/Navigation1";
import ImpairmentModal from '../Modal/ImpairmentModal';

const reportCategories = [
  { value: 'Impairment of Body Functions', label: 'Impairment of Body Functions'},
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
      columnDefs: this.createColumnDefs(),
      rowData: ""
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
    console.log('Checking reports');
    // Check if both a patient and category have been selected before querying the DB
    if (this.state.selectedPatient.label && this.state.selectedReportCategory.label) {
      console.log('Querying DB');
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
    this.setState({ selectedReportCategory }, () => this.getReports());
  }

  // TODO: Dynamic grid changing when a different category is selected

  createColumnDefs() {
    return [
      {
        headerName: "Domain",
        field: "domain",
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      },
      {
        headerName: "Subdomain",
        field: "subDomain",
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      },
      {
        headerName: "Care Provider",
        field: "careProvider",
        width: 100,
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      },
      {
        headerName: "Assessment Date",
        field: "assessmentDate",
        width: 100,
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      },
      {
        headerName: "0",
        field: "NoImpairment",
        width: 30,
        cellClassRules: {
          "rag-green": "x === 0",
          "rag-grey": "rowIndex % 2 === 1 && x !== 0"
        }
      },
      {
        headerName: "1",
        field: "MildImpairment",
        width: 30,
        cellClassRules: {
          "rag-lime": "x === 1",
          "rag-grey": "rowIndex % 2 === 1 && x !== 1"
        }
      },
      {
        headerName: "2",
        field: "ModerateImpairment",
        width: 30,
        cellClassRules: {
          "rag-yellow": "x === 2",
          "rag-grey": "rowIndex % 2 === 1 && x !== 2"
        }
      },
      {
        headerName: "3",
        field: "SevereImpairment",
        width: 30,
        cellClassRules: {
          "rag-orange": "x === 3",
          "rag-grey": "rowIndex % 2 === 1 && x !== 3"
        }
      },
      {
        headerName: "4",
        field: "CompleteImpairment",
        width: 30,
        cellClassRules: {
          "rag-red": "x === 4",
          "rag-grey": "rowIndex % 2 === 1 && x !== 4",
          width: 100
        }
      },
      {
        headerName: "Comment",
        field: "comment",
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      }
    ];
  }

  handleClose() {
    // this.setState(({  }));
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
          isSelectedd={true}
          handleClose={this.handleClose}
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

        <Navigation1 />

        <div style={containerStyle} className="ag-fresh">
          <h1>Impairment of Body Functions</h1>
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
  inject("userStore"),
  observer
)(NewFunctionalScorePage);
