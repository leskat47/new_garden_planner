import React from 'react';
import PropTypes from 'prop-types';

function PlantTable({plantings}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>name</th>
          <th>exposure</th>
          <th>moisture</th>
        </tr>
        { plantings.map((plant, i) => (
          <tr key={i}>
            <td>{plant.plant.name}</td>
            <td>{plant.plant.exposure}</td>
            <td>{plant.plant.moisture}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

PlantTable.propTypes = {
  plantings: PropTypes.array
}

export default PlantTable;