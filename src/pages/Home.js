import React, { Component } from 'react';
import { Table } from 'react-bootstrap';



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        this._getData();
    }
    async _getData() {
        const options = {
            headers: { 'Content-Type': 'application/json' },
            mehod: 'GET'
        };
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users', options);
            const jsonData = await data.json();
            this.setState({ items: jsonData });
        } catch (e) {
            console.log(e);
        }

    }
    render() {
        const { items } = this.state;
        return (
            <div>
                <h1>User Home</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(data => {
                            return (
                                <tr key={data.id} >
                                    <td>{data.id} </td>
                                    <td>{data.name} </td>
                                    <td>{data.email} </td>
                                    <td>{data.phone} </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}