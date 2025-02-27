import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import "@/assets/js/components/AnimationModule";
import App from "@/assets/js/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (module.hot) {
  module.hot.accept();
}