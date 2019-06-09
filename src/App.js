import React from 'react';
import * as views from './views'

const mapObject = (obj, funk) => Object.keys(obj).map((key, index) => funk(obj[key], index))

const App = (props) =>
    <div>
        {mapObject(views, (View, key) => <View key />)}
    </div>


export default App;