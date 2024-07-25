import { describe, it, expect } from 'vitest';
import { executeInstructions } from '../utils/executeInstructions';
import { Plateau, Rover } from '../types';

describe('executeInstructions', () => {
  it('should return the correct final position for Rover 1', () => {
    const plateau: Plateau = { width: 5, height: 5 };
    const rover: Rover = {
      id: 1,
      position: { x: 1, y: 2, direction: 'N' },
      instructions: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
    };
    const expectedResult = {
      id: 1,
      position: { x: 1, y: 3, direction: 'N' },
      instructions: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
      error: undefined
    };

    const result = executeInstructions(rover, plateau);

    expect(result).toEqual(expectedResult);
  });

  it('should return the correct final position for Rover 2', () => {
    const plateau: Plateau = { width: 5, height: 5 };
    const rover: Rover = {
      id: 2,
      position: { x: 3, y: 3, direction: 'E' },
      instructions: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']
    };
    const expectedResult = {
      id: 2,
      position: { x: 5, y: 1, direction: 'E' },
      instructions: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
      error: undefined
    };

    const result = executeInstructions(rover, plateau);

    expect(result).toEqual(expectedResult);
  });

  it('should set an error if the rover moves out of plateau bounds', () => {
    const plateau: Plateau = { width: 5, height: 5 };
    const rover: Rover = {
      id: 3,
      position: { x: 0, y: 0, direction: 'S' },
      instructions: ['M', 'M', 'M']
    };
    const expectedResult = {
      id: 3,
      position: { x: 0, y: 0, direction: 'S' }, 
      instructions: ['M', 'M', 'M'],
      error: 'Rover moved out of plateau bounds'
    };

    const result = executeInstructions(rover, plateau);

    expect(result).toEqual(expectedResult);
  });
});
