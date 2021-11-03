import React from 'react';
import PropTypes from 'prop-types';
// import flower from '../assets/flower.png';

function PlantTable({locations}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>name</th>
          <th>exposure</th>
          <th>moisture</th>
        </tr>

      </tbody>
    </table>
  );
}

PlantTable.propTypes = {
  locations: PropTypes.array
}

export default PlantTable;