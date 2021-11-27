import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlantModal from './PlantModal';
import { Form } from "antd";

describe('Plant modal tests', () => {

  it('shows a form in the modal', () => {
    render(<PlantModal
      onFinish={() => {}} 
      handleCancel={() => {}}
      visible={true}
      />);

    const nameInput = screen.getByLabelText('Name');
    const exposureInput = screen.getByLabelText('Exposure');
    const moistureInput = screen.getByLabelText('Moisture');
    const descriptionInput = screen.getByLabelText('Description');

    fireEvent.change(nameInput, {target: {value: 'A'}});
    expect(nameInput.value).toBe('A');
    fireEvent.change(exposureInput, {target: {value: 'B'}});
    expect(exposureInput.value).toBe('B');
    fireEvent.change(moistureInput, {target: {value: 'C'}});
    expect(moistureInput.value).toBe('C');
    fireEvent.change(descriptionInput, {target: {value: 'D'}});
    expect(descriptionInput.value).toBe('D');
  });
});
