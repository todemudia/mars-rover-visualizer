export type Position = {
  x: number;
  y: number;
  direction: Direction;
};

export type Plateau = {
  width: number;
  height: number;
};

export type Direction = 'N' | 'E' | 'S' | 'W';

export type Movement = 'L' | 'R' | 'M';

export type Rover = {
  id: number;
  position: Position;
  instructions: Movement[];
  error?: string;
};

export type RoverData = {
  plateau: Plateau;
  rovers: Rover[];
};
