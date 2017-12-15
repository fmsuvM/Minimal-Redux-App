import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';

import RequestButton from './RequestButton';
import Explanation from './Explanation';
import Result from './Result';

ReactDOM.render(
    <div className="body">
        <Explanation />
        <RequestButton />
        <Result />
    </div>,
    document.getElementById('app')
);