import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import AuthService from './service/auth_service';
import ImageService from './service/image_service';
import ImageFileInput from './components/ImageFileInput/imageFileInput';

const authService = new AuthService();
const imageService = new ImageService();
const FileInput = (props) => (
  <ImageFileInput {...props} imageService={imageService} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root'),
);
