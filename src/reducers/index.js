import { combineReducers } from 'redux';
import hero from './hero';
import ui from './ui';

export default combineReducers({ hero, ui });
