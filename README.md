
## Installation and Running the Project

1. **Clone the repository**:
/mars-rover-visualizer.git
    cd mars-rover-visualizer

2. **Install dependencies**:
    npm install

3. **Run the application**:
    npm run dev

4. **Open the application**:
    Open your browser and navigate to `http://localhost:5173/`.

## Usage

1. **Prepare the input file**: The input file should contain the plateau dimensions, rover starting positions, and movement instructions. 
    You can also navigate to mars-rover-visualizer/testData/input.txt and copy the txt file there.

Example:
    ```
    5 5
    1 2 N
    LMLMLMLMM
    3 3 E
    MMRMMRMRRM
    ```

2. **Upload the input file**: Use the upload form in the application to upload the prepared input file.

3. **View the results**:
   - The starting positions of the rovers will be displayed on the first grid.
   - Click the "Show Final Positions" button to calculate and display the final positions of the rovers on the second grid.
   - If any rover moves out of bounds, an error message will be displayed.

## Testing

1. **Run the tests**:
    npm run test

## Improvements

Didn't have enough time to add all the features I wanted. Here are some of the ways i'd have improved it:

1. **Add More Tests**:
   - Increase test coverage by adding more unit tests and integration tests.
   - Test edge cases more thoroughly, such as handling very large input files or unusual movement instructions.

2. **Improve the Design**:
   - Enhance the UI/UX with better styling and responsive design.
   - Add animations to visualize rover movements step-by-step.

3. **Better Validation**:
   - Implement more robust validation for the input file to handle various edge cases and provide more detailed error messages.
   - Validate the input data in real-time as the user uploads the file.

4. **Enhance Error Handling**:
   - Improve error handling to provide more detailed feedback to the user.
   - Display error messages inline with the relevant input fields or sections of the application.

5. **Performance Optimization**:
   - Optimize the code for better performance, especially for handling larger datasets.
   - Use memoization techniques where applicable to reduce unnecessary re-renders.

