import React from 'react';

function Item(props) {
    return(
        <div className="container">
            <table className="table table-bordered">
                <thead className="bg-danger">
                    <tr>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Country</td>
                        <td>State</td>
                    </tr>
                </thead>
                <tbody className="bg-light">
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.loc}</td>
                        <td>{props.country}</td>
                        <td>{props.state}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Item;