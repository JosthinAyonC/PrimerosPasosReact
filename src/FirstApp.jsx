import PropTypes from 'prop-types';


export const FirstApp = ( {tittle, subtittle } ) => {


    return (
        <>
            <h1>{ tittle }</h1>
            {/* {<code>{ JSON.stringify(hola) }</code>} */}
            <p>{subtittle }</p>
        </>
    )
}


FirstApp.propTypes = {
    tittle: PropTypes.string.isRequired,
    subtittle: PropTypes.number
}

FirstApp.defaultProps = {
    tittle : 'Habla mariguanero',
    subtittle: 123
}