import React from 'react';
import styled from 'styled-components';
import { Rover, Plateau } from '../types';

interface GridProps {
  plateau: Plateau;
  positions: Rover[];
  label: string;
  color: string;
}

const GridContainer = styled.div<{ width: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 50px);
  gap: 5px;
`;

const Cell = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  color: white;
  position: relative;
`;

const Identifier = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 12px;
  color: black;
`;

const Grid: React.FC<GridProps> = ({ plateau, positions, label, color }) => {
  return (
    <div>
      <h2>{label}</h2>
      <GridContainer width={plateau.width}>
        {Array.from({ length: plateau.height * plateau.width }).map((_, index) => {
          const x = index % plateau.width;
          const y = Math.floor(index / plateau.width);
          const positionData = positions.find(p => p.position.x === x && p.position.y === (plateau.height - 1 - y));

          return (
            <Cell key={index} color={positionData ? color : 'white'}>
              {positionData ? positionData.position.direction : ''}
              {positionData && <Identifier>{positionData.id}</Identifier>}
            </Cell>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default Grid;
