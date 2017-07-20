import React from 'react';
import ReactDOM from 'react-dom';

import ColorContainer from"./container/color-container";

class App extends React.Component {
render(){
return (
<div>
<ColorContainer />
</div>
)
}
}




ReactDOM.render(<App />, document.getElementById('root'));