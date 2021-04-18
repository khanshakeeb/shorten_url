import React from "react";
import {Table} from "react-bootstrap";

const List = ({listData}) => {
    if (!listData.length) return (
        <React.Fragment>
            <p>No record found </p>
        </React.Fragment>
    );
    return(
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>_id</th>
                <th>Short code</th>
                <th>Short cod url</th>
                <th>Original url</th>
            </tr>
            </thead>
            <tbody>
            {
                listData.map(item => {
                    return (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.shortCode}</td>
                            <td><a href={item.shortURL}>{item.shortURL}</a></td>
                            <td>{item.longUrl}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
    );
};

export default List;