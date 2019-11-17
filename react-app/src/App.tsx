import { hot } from 'react-hot-loader/root'
import React from 'react';
import { Counter } from 'components/Counter'
import { CounterButtons } from 'components/CounterButtons'

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>My GSV</h1>
            <Counter />
            <CounterButtons />
        </div>
    )
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App

