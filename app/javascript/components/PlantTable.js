import React from 'react';
import PropTypes from 'prop-types';
import flower from '../assets/flower.png';

function PlantTable({plants}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>name</th>
          <th>flowers?</th>
          <th>flower color</th>
        </tr>
        { plants.map((plant, i) => (
          <tr key={i}>
            <td>{plant.name}</td>
            <td>{plant.flowers && <img className="flower-icon" src={flower} />}</td>
            <td>{plant.flowers && plant.flower_color}</td>
          </tr>
          ))}
      </tbody>
    </table>
  );
}

PlantTable.propTypes = {
  plants: PropTypes.array
}

export default PlantTable;