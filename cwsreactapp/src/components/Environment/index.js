import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';

import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import {AgGridReact} from "ag-grid-react";
import * as firebase from "firebase";
import 'firebase/database';

import Navigation1 from "../NewFunctionalScore/Navigation1";

  class EnvironmentPage extends Component {
  constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: ""
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }
	
	 componentWillMount() {
    this.getData(66);
  }

  //firebase fetch
  getData(index) {
    var rootRef = firebase
      .database()
      .ref()
      .child("patient")
      .child("0")
      .child("reports")
      .child("Environment");

    var Data = [];
	
    rootRef.on("child_added", snapshot => {
      // Store all the labels in array
	   Data.push(snapshot.val());
	   
	   });	    

     this.setState({
      rowData: Data
    });

  }

    createColumnDefs() {
        return [
            {headerName: "Domain", field: "domain",
			cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }},
            {headerName: "Sub Domain", field: "subDomain" ,
			cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }},
            {headerName: "CareProvider", field: "careProvider", width: 100,
			cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }},
			{headerName: "AssessmentDate", field: "assessmentDate", width: 100,
			cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }},
		  
			{headerName: "Barriers",
          children: [{headerName: "-4", field: "Completebarrier", width: 30,
          cellClassRules: {
            "rag-red": "x === -4",
			"rag-grey": "rowIndex % 2 === 1 && x !== -4"
          }},
		  {headerName: "-3", field: "Severebarrier", width: 30,
          cellClassRules: {
            "rag-orange": "x === -3",
			"rag-grey": "rowIndex % 2 === 1 && x !== -3"
          }},
		  {headerName: "-2", field: "Moderatebarrier", width: 30,
          cellClassRules: {
            "rag-yellow": "x === -2",
			"rag-grey": "rowIndex % 2 === 1 && x !== -2"
          }},
		  {headerName: "-1", field: "Mildbarrier", width: 30,
          cellClassRules: {
			"rag-cream": "x === -1",
			"rag-grey": "rowIndex % 2 === 1 && x !== -1"
          }},
		  ]},
		  {headerName: "0", field: "Nobarrierfacilitator", width: 30,
          cellClassRules: {
			"rag-blue": "x === 0",
			"rag-grey": "rowIndex % 2 === 1 && x !== 0"
          }},
		  
		  {headerName: "Facilitators",
          children: [
		  {headerName: "1", field: "Mildfacilitator", width: 30,
          cellClassRules: {
            "rag-green1": "x === 1",
			"rag-grey": "rowIndex % 2 === 1 && x !== 1"
          }},
		  {headerName: "2", field: "Moderatefacilitator", width: 30,
          cellClassRules: {
            "rag-green2": "x === 2",
			"rag-grey": "rowIndex % 2 === 1 && x !== 2"
          }},
		  {headerName: "3", field: "Substantialfacilitator", width: 30,
          cellClassRules: {
			"rag-green3": "x === 3",
			"rag-grey": "rowIndex % 2 === 1 && x !== 3"
          }},
		  {headerName: "4", field: "Completefacilitator", width: 30,
          cellClassRules: {
			"rag-green4": "x === 4",
			"rag-grey": "rowIndex % 2 === 1 && x !== 4"
          }},
		  ]},
		  {headerName: "Comment", field: "comment", width: 120,
			cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }}
		  
        ];
    }
	
  
 
  
    render() {
        let containerStyle = {
            height: 500,
            width: 1250
        };

        return (
		<div>
		<Navigation1 />
		
            <div style={containerStyle} className="ag-fresh">
                <h1>Environment</h1>
                <AgGridReact
                    // properties
                    columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}
					enableSorting
					enableFilter
					floatingFilter
					rowSelection="multiple"
					


                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
			</div>
        )
    }
}


const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('userStore'),
  observer
)(EnvironmentPage);

