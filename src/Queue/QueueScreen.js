import React, { Component } from 'react';
import { fetchQueueData } from "../mockApi";

// eslint-disable-next-line
import base64 from 'base-64';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            name: ""
        };
    }

    componentDidMount() {
        fetchQueueData()
            .then(response => response.json())
            .then(json => {
                this.setState({
                    customers: json.queueData.queue.customersToday
                })
            });
    }

    render() {

        const handleChange = (e) => {
            e.preventDefault();
            this.setState({
                name: e.target.value
            });
        };

        let customersArray = [];
        for (let i = 0; i < this.state.customers.length; ++i) {
            customersArray.push(
                <div key={this.state.customers[i].id}>
                    <div>
                        {this.state.customers[i].customer.name}
                    </div>
                </div>
            );
        }

        return (
            <div>
                <input placeholder="Enter Name" onChange={handleChange} />
                {
                    customersArray.filter(customer => {
                        if (this.state.name === "") {
                            return customer;
                        } else if (customer.props.children.props.children.toLowerCase().includes(this.state.name.toLowerCase())) {
                            return customer.props.children.props.children;
                        }
                    }).map((customer, index) => (
                        <div key={index}>
                            <p>{customer.props.children.props.children}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}
