import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const styles = {
    // Customize the root svg element
    root: {},
    // Customize the path, i.e., the progress bar
    path: {
      stroke: 'cornflowerblue',
      strokeLinecap: 'round',
      transition: 'stroke-dashoffset 0.5s ease 0s',
    },
    // Customize the trail, i.e., the background of the progress bar
    trail: {
      stroke: '#ddd',
      strokeLinecap: 'round',
    },
  };


  function ProgressBar() {
    const percentage = 66; // Change this value to update the progress
    return (
      <div className="container">

        <div className='row text-center'>

            <div className='col-lg-2'>
            <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={styles}
        />
            </div>

            <div className='col-lg-2'>
            <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={styles}
        />
            </div>

            <div className='col-lg-2'>
            <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={styles}
        />
            </div>

            <div className='col-lg-2'>
            <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={styles}
        />
            </div>


        </div>
       
      </div>
    );
  }
  
  export default ProgressBar;