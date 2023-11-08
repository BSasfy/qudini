import React from 'react';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';

const Customer = (name) => {
    return (
        <CustomerCard>
            <ProfilePicture />
            <Content>
                <Name>{name.name}</Name>
                <div></div>
            </Content>
        </CustomerCard>
    )
}

export default Customer;