import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './Loading.module.css';

const Loading = () => (
  <div className={classes.spinner_container}>
    <Spinner animation="border" role="status" variant="dark">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default Loading;
