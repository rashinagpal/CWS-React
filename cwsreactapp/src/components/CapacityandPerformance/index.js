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

  class CapacityandPerformancePage extends Component {
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
      .child("Capacity and Performance");

      let data = [];
	
      rootRef.on("child_added", snapshot => {
        // Store all the labels in array
        data.push(snapshot.val());
       console.log(data);
       
       });	    
        this.setState({
        rowData: data
      });
  }

    createColumnDefs() {
        return [
            {headerName: "Domain", field: "domain",
            filter: "agTextColumnFilter",
            filterParams: {
            applyButton: true,
            clearButton: true
            },
			cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }},
            {headerName: "Sub Domain", field: "subDomain" ,
            filter: "agTextColumnFilter",
            filterParams: {
            applyButton: true,
            clearButton: true
            },
			cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }},
            {headerName: "CareProvider", field: "careProvider", width: 100,
            filter: "agTextColumnFilter",
            filterParams: {
            applyButton: true,
            clearButton: true
            },
            cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }},
			{headerName: "AssessmentDate", field: "assessmentDate", width: 100,
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
          }},
		  
			{headerName: "Capacity",
          children: [{headerName: "0", field: "NoImpairmentC", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
            "rag-green": "x === 0",
			"rag-grey": "rowIndex % 2 === 1 && x !== 0"
          }},
          {headerName: "1", field: "MildImpairmentC", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
            "rag-lime": "x === 1",
			"rag-grey": "rowIndex % 2 === 1 && x !== 1"
          }},
          {headerName: "2", field: "ModerateImpairmentC", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
            "rag-yellow": "x === 2",
            filter: "agNumberColumnFilter",
            filterParams: {
            applyButton: true,
            clearButton: true
            },
			"rag-grey": "rowIndex % 2 === 1 && x !== 2"
          }},
          {headerName: "3", field: "SevereImpairmentC", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
            "rag-orange": "x === 3",
            filter: "agNumberColumnFilter",
            filterParams: {
            applyButton: true,
            clearButton: true
            },
			"rag-grey": "rowIndex % 2 === 1 && x !== 3"
          }},
          {headerName: "4", field: "CompleteImpairmentC", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
			"rag-red": "x === 4",
			"rag-grey": "rowIndex % 2 === 1 && x !== 4"
          }},
		  {headerName: "Comment", field: "capacitycomment", width: 120,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },  
          cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }}]},
		  
		  {headerName: "Performance",
          children: [{headerName: "0", field: "NoImpairmentP", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
            "rag-green": "x === 0",
			"rag-grey": "rowIndex % 2 === 1 && x !== 0"
          }},
		  {headerName: "1", field: "MildImpairmentP", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
            "rag-lime": "x === 1",
			"rag-grey": "rowIndex % 2 === 1 && x !== 1"
          }},
		  {headerName: "2", field: "ModerateImpairmentP", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
            "rag-yellow": "x === 2",
			"rag-grey": "rowIndex % 2 === 1 && x !== 2"
          }},
		  {headerName: "3", field: "SevereImpairmentP", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
			"rag-orange": "x === 3",
			"rag-grey": "rowIndex % 2 === 1 && x !== 3"
          }},
		  {headerName: "4", field: "CompleteImpairmentP", width: 30,
          filter: "agNumberColumnFilter",
          filterParams: {
          applyButton: true,
          clearButton: true
          },
          cellClassRules: {
			"rag-red": "x === 4",
			"rag-grey": "rowIndex % 2 === 1 && x !== 4"
          }},
		  {headerName: "Comment", field: "performancecomment", width: 120,
          filterParams: {
          applyButton: true,
          clearButton: true
          },  
          cellClassRules: {
			"rag-grey": "rowIndex % 2 === 1"
          }}]}
		  
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
                <h1>Capacity and Performance</h1>
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
)(CapacityandPerformancePage);
