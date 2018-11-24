import React, { createElement } from 'react';
import { render } from 'react-dom';
import AppRouter from './router';

render(AppRouter(), document.getElementById('app'));
