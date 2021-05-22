import { createAppContainer } from 'react-navigation';

import AppNavigator from './src/stackNavigator';

const App = createAppContainer(AppNavigator);
export default App;