import React from 'react'
import ReactDOM from 'react-dom'

import data from './data.json'
console.log(data)

class Root extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hello: 'Hello!',
            data : data
        }
    }

    

    render() {
        const header = ["name", "username", "email", "gender", "street", "suite", "city", "zipcode", "phone", "website"];
        const theader = header.map((h, i) => <th key={i}>{h}</th> );
        const items = this.state.data.map((d, key) => {
            return (
                <tr key={key}> 
                    <td>{d.name}</td>
                    <td>{d.username}</td>
                    <td>{d.email}</td>
                    <td>{d.gender}</td>
                    <td>{d.street}</td>
                    <td>{d.suite}</td>
                    <td>{d.city}</td>
                    <td>{d.zipcode}</td>
                    <td>{d.phone}</td>
                    <td>{d.website}</td>
                </tr>
                );
        });

        return (
            <div>
                <h2>{this.state.hello}</h2>
                <table border="1">
                    <thead>
                        <tr>{theader}</tr>
                    </thead>
                    <tbody>{items}</tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'))
