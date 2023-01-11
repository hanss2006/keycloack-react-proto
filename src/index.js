import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
import App from './App';
import UserService from "./services/UserService";
import HttpService from "./services/HttpService";

const app = createRoot(document.getElementById('root')).render(<App />)

UserService.initKeycloak(app);
HttpService.configure();
