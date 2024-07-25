import React, { useRef } from 'react';
import { parseInput } from '../utils/inputParser';
import { RoverData } from '../types';

interface UploadFormProps {
  onFileUpload: (data: RoverData) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        try {
          const data = parseInput(text);
          onFileUpload(data);
        } catch (error) {
          console.error('Failed to parse file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} />
    </div>
  );
};

export default UploadForm;
