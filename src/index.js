import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
export const avatarPopup = document.querySelector('.popup_type_avatar-edit');
export const profileEdit = document.querySelector('.popup_type_profile-edit');
export const imageEditor = document.querySelector('.popup_type_photo-edit');
export const likeNumber = document.querySelector('.card__likes-number');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
;