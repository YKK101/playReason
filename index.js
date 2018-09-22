/** @format */

import {AppRegistry} from 'react-native';
import { app } from './lib/js/re/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => app);
