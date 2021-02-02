import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client'
import { Provider } from './context/context';
import App from './App'

import './index.css'

ReactDOM.render(
    <SpeechProvider appId="2c7d44cd-0180-41c8-9683-aa626dfb945f" language="en-US">
    <Provider>
        <App/>
    </Provider>
    </SpeechProvider>
, document.getElementById('root'));
