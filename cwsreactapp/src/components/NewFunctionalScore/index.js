import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import Select from "react-select";

import withAuthorization from "../Session/withAuthorization";
import { AgGridReact } from "ag-grid-react";
import * as firebase from "firebase";
import "firebase/database";

import ImpairmentModal from '../Modal/ImpairmentModal';
import CapacityAndPerformanceModal from '../Modal/CapacityAndPerformanceModal';
import EnvironmentModal from '../Modal/EnvironmentModal';
import '../../constants/column-defs';
import '../../constants/domainSubdomain';
import columnDefs from "../../constants/column-defs";
import * as domainSubdomain from '../../constants/domainSubdomain';
import Navigation1 from "./Navigation1";
import "../.././styles.css";

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
      rowData: '',
      selectedModal: undefined,
      modalOpen: false,
      rowSelection: "multiple",
      //filtering
      selectedDomain: domainSubdomain.domainOptionsImpairment[0],
      selectedSubDomain: domainSubdomain.subdomainOptionsImpairment[0],
      optdomain: undefined,
      optsubdomain: undefined,
      careprovider: [{ value: 'All', label: 'All' }],
      selectedUser: {}
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  onNewColumnsLoaded = (event) => {
    event.api.sizeColumnsToFit();
  }

  componentWillMount() {
    this.getPatients();
    this.getcareProvider();
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

  getcareProvider() {
    var rootRef = firebase
      .database()
      .ref()
      .child("users");

    rootRef.on("child_added", snapshot => {
      let provider = {
        value: snapshot.val().email.split('@')[0],
        label: snapshot.val().email.split('@')[0]
      };
      this.setState(prevState => ({
        careprovider: [...prevState.careprovider, provider]
      }));
    });
  }

  getReports = () => {
    // Clear rowData first
    this.setState({
      rowData: undefined
    });
    console.log(`getReports called for Patient: ${this.state.selectedPatient.value} and Category: ${this.state.selectedReportCategory.value}`);
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
      let Domain = this.state.selectedDomain.value;
      let SubDomain = this.state.selectedSubDomain.value;
      if(this.state.selectedDomain.value==="All"){
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
    }
    else if((this.state.selectedDomain.value!=="All")&&(this.state.selectedSubDomain.value==="All"))
    {
      rootRef.orderByChild("domain").equalTo(Domain).on("child_added", snapshot => {
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
     }
     else if((this.state.selectedDomain.value!=="All")&&(this.state.selectedSubDomain.value!=="All"))
    {
      rootRef.orderByChild("subDomain").equalTo(SubDomain).on("child_added", snapshot => {
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
     }
      
      this.setState({
        rowData: data
      });
    }
  }
handleChangeDomain = selectedDomain => {
    this.setState({ selectedDomain }, () => this.getReports());
};

handleChangeSubDomain = selectedDomain => {
    this.setState({ selectedSubDomain: selectedDomain }, () => this.getReports());
};

handleChangeUser = selectedUser => {
  this.setState({ selectedUser }, () => this.getReports());
};

  deleteReport(patientId, reportId) {
    var deleteRef = firebase
      .database()
      .ref()
      .child('patient')
      .child(patientId)
      .child('reports')
      .child(this.state.selectedReportCategory.value)
      .child("");
    deleteRef.remove(reportId);
  }


  handleChangePatient = selectedPatient => {
    this.setState({ selectedPatient }, () => this.getReports());
  };

  handleChangeCategory = selectedReportCategory => {
    let newState = {
      selectedReportCategory,
      columnDefs: columnDefs.getImpairmentColumns(),
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
        columnDefs: newState.columnDefs,
        selectedDomain: domainSubdomain.domainOptionsImpairment[0],
        selectedSubDomain: domainSubdomain.subdomainOptionsImpairment[0],
      }, () => this.getReports());
  }

  handleDeleteRow = () => {

  }

  handleCloseModal = () => {
    this.setState(() => ({ modalOpen: false }))
  }

  handleOpenModal = () => {
    this.setState(() => ({ modalOpen: true }))
  }

  render() {
    let containerStyle = {
      height: 500,
      width: 1250
    };
  let filteredOptionsImp;
  if (this.state.selectedDomain) {
    filteredOptionsImp = domainSubdomain.subdomainOptionsImpairment.filter(
          o => o.link === this.state.selectedDomain.value
      );
  }
  let filteredOptionsCapPer;
  if (this.state.selectedDomain) {
    filteredOptionsCapPer = domainSubdomain.subdomainOptionsCapPer.filter(
          o => o.link === this.state.selectedDomain.value
      );
  }
  

  if (this.state.selectedReportCategory.value==='Impairment of Body Functions'){
   var optdomain = domainSubdomain.domainOptionsImpairment;
   var optsubdomain = filteredOptionsImp;
  }
  else if (this.state.selectedReportCategory.value==='Capacity and Performance'){
  var optdomain = domainSubdomain.domainOptionsCapPer;
  var optsubdomain = filteredOptionsCapPer;
  }
  else if (this.state.selectedReportCategory.value==='Environment'){
    var optdomain = domainSubdomain.domainOptionsEnv;
    }



    return (
      <div>
        <b>Select Patient</b>
        <ImpairmentModal
          selectedModal={this.state.modalOpen && this.state.selectedReportCategory.value == reportCategories[0].value }
          handleCloseModal={this.handleCloseModal}
          sessionStore={this.props.sessionStore}
          patient={this.state.selectedPatient.value}
          scoreCategory={this.state.selectedReportCategory.value}
          handleRefresh={this.getReports}
          rowData={this.state.rowData}
        />
        <CapacityAndPerformanceModal
          selectedModal={this.state.modalOpen && this.state.selectedReportCategory.value == reportCategories[1].value}
          handleCloseModal={this.handleCloseModal}
          sessionStore={this.props.sessionStore}
          patient={this.state.selectedPatient.value}
          scoreCategory={this.state.selectedReportCategory.value}
          handleRefresh={this.getReports}
          rowData={this.state.rowData}
        />
        <EnvironmentModal
          selectedModal={this.state.modalOpen && this.state.selectedReportCategory.value == reportCategories[2].value}
          handleCloseModal={this.handleCloseModal}
          sessionStore={this.props.sessionStore}
          patient={this.state.selectedPatient.value}
          scoreCategory={this.state.selectedReportCategory.value}
          handleRefresh={this.getReports}
          rowData={this.state.rowData} 
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

        <button 
          onClick={this.handleOpenModal}
          disabled={!!!(this.state.selectedPatient.value && this.state.selectedReportCategory.value)}
        >
          Add New Functional Score
        </button>

        {/* <button onClick={this.getReports}>
          Refresh
        </button> */}

        <br/>
        <br/>
        
        <b>Filtering</b> <br/>
        <b>Select Domain</b>
        <Select
          className="dark-theme"
          value={this.state.selectedDomain.querySelector}
          onChange={this.handleChangeDomain}
          options={optdomain}
        />
        
       
        <b>Select Subdomain</b>
        <Select
          className="dark-theme"
          value={this.state.selectedSubDomain.querySelector}
          onChange={this.handleChangeSubDomain}
          options={optsubdomain}
        />
        <b>Select CareProvider</b>
        <Select
          className="dark-theme"
          options={this.state.careprovider}
          value={this.state.selectedUser.querySelector}
          onChange={this.handleChangeUser}
        />

        <div style={containerStyle} className="ag-fresh">
          <AgGridReact
            // properties
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            enableSorting
            enableFilter
            floatingFilter
            rowSelection={this.state.rowSelection}
            // events
            onGridReady={this.onGridReady}
            onNewColumnsLoaded={this.onNewColumnsLoaded}
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
