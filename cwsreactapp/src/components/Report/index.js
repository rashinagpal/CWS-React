import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';

const ReportPage = () =>
  <div>
    <h1>This is Report Page</h1>
    <h2>Select the category of Report</h2>
	<li><Link to={routes.IMPAIRMENT_OF_BODY_FUNCTIONS}>Impairment of Body Functions</Link></li>
	<li><Link to={routes.CAPACITY_AND_PERFORMANCE}>Capacity and Performance</Link></li>
	<li><Link to={routes.ENVIRONMENT}>Environment</Link></li>

  </div>

export default ReportPage;