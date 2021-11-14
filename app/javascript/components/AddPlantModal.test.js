import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddPlantModal from './AddPlantModal';

describe('Plant modal tests', () => {

  it('shows a form in the modal', () => {
    render(<AddPlantModal reloadPlants={() => {}}  />);

    const openButton = screen.getByTestId('add-plant');  
    fireEvent.click(openButton);

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
