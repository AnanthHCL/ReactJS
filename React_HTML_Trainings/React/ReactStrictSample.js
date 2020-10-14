import React from 'react';
import StrictComponent from 'StrictComponent'; 

function ReactStrictSample() {
  return (
    <div>
      <React.StrictMode>
        <div>
          <StrictComponent />
        </div>
      </React.StrictMode>
      
    </div>
  );
}