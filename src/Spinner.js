import React from 'react'

const Spinner = () => {

    // uses semantic UI library for "loading" spinner
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                Loading...
            </div>
        </div>
    )
}

export default Spinner