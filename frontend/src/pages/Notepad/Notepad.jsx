import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsFileEarmarkPlus, BsDownload } from 'react-icons/bs';
import { FaFolderOpen } from 'react-icons/fa';
import { BsImage } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Dropzone from 'react-dropzone';
import { saveAs } from 'file-saver';

const Notepad = () => {
  const [filename, setFilename] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [files, setFiles] = useState([]);

  const handleFilenameChange = (e) => {
    setFilename(e.target.value);
  };

  const handleFileContentChange = (e) => {
    setFileContent(e.target.value);
  };

  const handleFileUpload = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const handleFileSave = () => {
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${filename}.txt`);
    setFilename('');
    setFileContent('');
  };

  const handleFileOpen = () => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setFileContent(e.target.result);
    };
    fileReader.readAsText(files[0]);
  };

  const handleDownload = () => {
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${filename}.txt`);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>Notepad App</h2>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Form.Group>
            <Form.Control type="text" placeholder="Filename" value={filename} onChange={handleFilenameChange} />
          </Form.Group>
        </Col>
        <Col className="text-end">
          <Button variant="outline-primary" size="sm" onClick={handleFileSave}>
            <IconContext.Provider value={{ className: 'fs-4' }}>
              <BsFileEarmarkPlus />
            </IconContext.Provider>{' '}
            Save
          </Button>{' '}
          <Button variant="outline-success" size="sm" onClick={() => document.getElementById('file-input').click()}>
            <IconContext.Provider value={{ className: 'fs-4' }}>
              <BsImage />
            </IconContext.Provider>{' '}
            Add Image
          </Button>{' '}
          <Button variant="outline-secondary" size="sm" onClick={handleFileOpen} disabled={files.length !== 1}>
            <IconContext.Provider value={{ className: 'fs-4' }}>
              <FaFolderOpen />
            </IconContext.Provider>{' '}
            Open File
          </Button>{' '}
          <Button variant="outline-info" size="sm" onClick={handleDownload}>
            <IconContext.Provider value={{ className: 'fs-4' }}>
              <BsDownload />
            </IconContext.Provider>{' '}
            Download
          </Button>
          <Dropzone
            id="file-input"
            onDrop={handleFileUpload}
            onError={(error) => console.log(error)}
            accept="image/*"
            multiple={false}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control as="textarea" rows={10} value={fileContent} onChange={handleFileContentChange} />
      </Form.Group>
    </Col>
  </Row>
</Container>
);
};

export default Notepad;