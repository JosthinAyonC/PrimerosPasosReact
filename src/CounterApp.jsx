import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {
        
        setCounter(counter + 1);

    };

    const handleDelete = () => {
        
        setCounter(counter - 1);

    };

    const handleRestart = () => {
    
            setCounter(value);  

    };

    return (
        <>
            <h1>CounterApp</h1>
            <p> { counter } </p>

            <button onClick={ handleAdd }>
                +1
            </button>
            <span>  </span>

            <button onClick={ handleDelete }>
                -1
            </button>
            <span>  </span>

            <button onClick={ handleRestart }>
                Restart
            </button>
            
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}