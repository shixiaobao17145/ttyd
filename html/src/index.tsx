import { h, render } from 'preact';
import { App } from './components/app';
import './style/index.scss';
require('fast-text-encoding');

render(<App />, document.body);
