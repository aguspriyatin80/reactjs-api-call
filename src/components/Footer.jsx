import React from 'react'

export default function Footer() {
    return (

        <div className="container">
            <div style={{ display: 'flex', alignItems: 'stretch', width: '100%', height: '100px', backgroundColor: 'lightGrey', margin: '10px 5px', justifyContent: 'space-around' }}>
                <div style={{ flex: '2', padding: '20px' }}>
                    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
                </div>
                <div style={{ flex: '1', textAlign: 'center', alignSelf: 'center', alignItems: 'center', alignContent: 'center', padding: '0', margin: '0' }}>
                    <a className="btn btn-danger" href="#">Back to top</a>
                </div>
            </div >
        </div>

    )
}
