import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import ErrorMessage from './components/ErrorMessage';
import LengthSelector from './components/LengthSelector';
import GenerateButton from './components/GenerateButton';
import SummaryResult from './components/SummaryResult';

function App() {
    const [file, setFile] = useState(null);
    const [length, setLength] = useState(null);
    const [error, setError] = useState(null);
    const [summary, setSummary] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        setError(null);
        setSummary(null);
        setLength(null);
        
        const uploadedFile = acceptedFiles[0];
        
        if (uploadedFile) {
            const validTypes = ['image/png', 'image/jpeg', 'application/pdf'];
            if (validTypes.includes(uploadedFile.type)) {
                setFile(uploadedFile);
            } else {
                setError('Please upload only PNG, JPEG, or PDF files.');
                setFile(null);
            }
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'application/pdf': ['.pdf']
        },
        multiple: false
    });

    const handleGenerate = async () => {
        if (!file || !length) {
            setError('Please upload a file and select a length option.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setSummary(null);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('length', length.toLowerCase());

        try {
            const endpoint = file.type === 'application/pdf' ? "http://localhost:8080/pdf" : "http://localhost:8080/image";

            console.log('Sending request to:', endpoint);
            console.log('File:', file);
            console.log('Length:', length);

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            });
            
            const { isData, data } = await response.json();
            
            if (!isData) {
                throw new Error();
            }

            setSummary(data);
        } catch (err) {
            setError('An error occurred while generating the summary. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-3xl">
                <div className="space-y-6">
                    <FileUpload
                        getRootProps={getRootProps}
                        getInputProps={getInputProps}
                        isDragActive={isDragActive}
                        file={file}
                    />
                    <ErrorMessage message={error || ''} />
                    <LengthSelector
                        selectedLength={length}
                        onLengthSelect={setLength}
                    />
                    <GenerateButton
                        onClick={handleGenerate}
                        disabled={!file || !length || isLoading}
                        isLoading={isLoading}
                    />
                    <SummaryResult summary={summary} />
                </div>
            </main>
        </div>
    );
}

export default App;