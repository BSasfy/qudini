import React, { Component } from 'react';
import { fetchQueueData } from "../mockApi";

// eslint-disable-next-line
import base64 from 'base-64';

import Customer from './components/Customer';
import createGravatarHash from '../gravatarHash'


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
            const hash = createGravatarHash(this.state.customers[i].customer.emailAddress);
            customersArray.push(
                <div key={this.state.customers[i].id}>
                    <div>
                        {this.state.customers[i].customer.name}
                        {this.state.customers[i].expectedTime}
                        {hash}
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
                        } else if (customer.props.children.props.children[0].toLowerCase().includes(this.state.name.toLowerCase())) {
                            return customer.props.children.props.children;
                        }
                    }).map((customer, index) => (
                        <div key={index}>
                            <img src={`https://gravatar.com/avatar/${customer.props.children.props.children[2]}`} />
                            <p>{customer.props.children.props.children[0]}</p>
                            <p>{customer.props.children.props.children[1]}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}
