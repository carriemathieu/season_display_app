import React from 'react'

const Spinner = (props) => {

    // uses semantic UI library for "loading" spinner
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner