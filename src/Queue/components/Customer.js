import React from 'react';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';

const Customer = (customer) => {
    return (
        <CustomerCard>
            <ProfilePicture>
                <img src={`https://gravatar.com/avatar/${customer.image}`} alt='' width='100%' />
            </ProfilePicture>
            <Content>
                <Name>{customer.name}</Name>
                <div>{customer.expectedTime}</div>
            </Content>
        </CustomerCard>
    )
}

export default Customer;