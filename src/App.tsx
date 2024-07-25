import React, { useMemo, useState } from 'react';
import UploadForm from './components/UploadForm';
import Grid from './components/Grid';
import { RoverData, Rover } from './types';
import { executeInstructions } from './utils/executeInstructions';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const App: React.FC = () => {
  const [roverData, setRoverData] = useState<RoverData | null>(null);
  const [finalResults, setFinalResults] = useState<Rover[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (data: RoverData) => {
    setRoverData(data);
    setFinalResults(null);
    setError(null);
  };

  const handleShowFinalPositions = () => {
    if (roverData) {
      const results = roverData.rovers.map(rover => executeInstructions(rover, roverData.plateau));
      setFinalResults(results);
      const errors = results.filter(result => result.error !== undefined);
      if (errors.length > 0) {
        setError('Some rovers moved out of plateau bounds. Check final positions.');
      } else {
        setError(null);
      }
    }
  };

  const startingPositions = useMemo(() => {
    return roverData?.rovers || [];
  }, [roverData]);

  return (
    <Container>
      <h1>Mars Rover Visualizer</h1>
      <UploadForm onFileUpload={handleFileUpload} />
      {roverData && (
        <>
          <GridsContainer>
            <Grid 
              plateau={roverData.plateau} 
              positions={startingPositions} 
              label="Starting Positions" 
              color="blue" 
            />
            {finalResults && (
              <Grid 
                plateau={roverData.plateau} 
                positions={finalResults} 
                label="Final Positions" 
                color="red" 
              />
            )}
          </GridsContainer>
          <button onClick={handleShowFinalPositions}>Show Final Positions</button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      )}
    </Container>
  );
};

export default App;
