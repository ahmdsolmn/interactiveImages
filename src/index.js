import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import routes from './routes';
import configureStore from './store/configureStore';
import { fetchTaps } from './actions';

ReactDOM.render(<App />, document.getElementById('root'));

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root'),
);


setInterval(() => {
    store.dispatch(fetchTaps());
}, 500);