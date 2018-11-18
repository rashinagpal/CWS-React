import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import Select from "react-select";

import withAuthorization from "../Session/withAuthorization";
import { AgGridReact } from "ag-grid-react";
import * as firebase from "firebase";
import "firebase/database";

import Navigation1 from "../NewFunctionalScore/Navigation1";

class ImpairmentofBodyFunctionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [],
      selectedPatient: {},
      patientName: "",
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
  deleteReport(patientId, reportId) {
    var deleteRef = firebase
      .database()
      .ref()
      .child("patients")
      .child(patientId)
      .child("reports")
      .child("Impairement of Body Functions")
      .child("");
    deleteRef.remove(reportId);
  }
  getPatients() {
    var rootRef = firebase
      .database()
      .ref()
      .child("patient");

    rootRef.on("child_added", snapshot => {
      let element = {
        value: snapshot.val().label.split(" - ")[0],
        label: snapshot.val().label
      };
      this.setState(prevState => ({
        patients: [...prevState.patients, element]
      }));
    });
  }

  getReports(patientId) {
    var rootRef = firebase
      .database()
      .ref()
      .child("patient")
      .child(patientId)
      .child("reports")
      .child("Impairment of Body Functions");

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

  handleChangePatient = selectedPatient => {
    this.getReports(selectedPatient.value);
    this.setState({ selectedPatient });
  };

  createColumnDefs() {
    return [
      {
        headerName: "Domain",
        field: "domain",
        filter: "agTextColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        },
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      },
      {
        headerName: "Subdomain",
        field: "subDomain",
        filter: "agTextColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        },
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      },
      {
        headerName: "Care Provider",
        field: "careProvider",
        width: 100,
        filter: "agTextColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        },
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      },
      {
        headerName: "Assessment Date",
        field: "assessmentDate",
        width: 100,
        filter: "agDateColumnFilter",
        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            var dateParts = dateAsString.split("/");
            var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
              return 0;
            }
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              }
              if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
            },
            clearButton: true
            },
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      },
      {
        headerName: "0",
        field: "NoImpairment",
        width: 30,
        filter: "agNumberColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        },
        cellClassRules: {
          "rag-green": "x === 0",
          "rag-grey": "rowIndex % 2 === 1 && x !== 0"
        }
      },
      {
        headerName: "1",
        field: "MildImpairment",
        width: 30,
        filter: "agNumberColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        },
        cellClassRules: {
          "rag-lime": "x === 1",
          "rag-grey": "rowIndex % 2 === 1 && x !== 1"
        }
      },
      {
        headerName: "2",
        field: "ModerateImpairment",
        width: 30,
        filter: "agNumberColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        },
        cellClassRules: {
          "rag-yellow": "x === 2",
          "rag-grey": "rowIndex % 2 === 1 && x !== 2"
        }
      },
      {
        headerName: "3",
        field: "SevereImpairment",
        width: 30,
        filter: "agNumberColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        },
        cellClassRules: {
          "rag-orange": "x === 3",
          "rag-grey": "rowIndex % 2 === 1 && x !== 3"
        }
      },
      {
        headerName: "4",
        field: "CompleteImpairment",
        width: 30,
        filter: "agNumberColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        },
        cellClassRules: {
          "rag-red": "x === 4",
          "rag-grey": "rowIndex % 2 === 1 && x !== 4",
          width: 100
        }
      },
      {
        headerName: "Comment",
        field: "comment",
        filterParams: {
          applyButton: true,
          clearButton: true
        },
        cellClassRules: {
          "rag-grey": "rowIndex % 2 === 1"
        }
      }
    ];
  }

  render() {
    let containerStyle = {
      height: 500,
      width: 1250
    };

    return (
      <div>
        <b>Select Patient</b>
        <Select
          className="m-2"
          options={this.state.patients}
          value={this.state.selectedPatient.querySelector}
          onChange={this.handleChangePatient}
          patientName={this.state.selectedPatient.label}
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
          <button onClick={this.deleteReport}> Delete </button>
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
)(ImpairmentofBodyFunctionsPage);
