import React from 'react'
import EmptyState from '../components/EmptyState'
import getCurrentUser from '../action/getCurrentUser'
import PropertiesClient from './PropertiesClient'
import getListings from '../action/getListings'


const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return <EmptyState
            title='Unauthorized'
            subtitle='Please login to view this page'
        />
    }

    const listings = await getListings({
        userId: currentUser.id
    });

    if (listings.length === 0) {
        return <EmptyState
            title='No properties found'
            subtitle='Looks like you have no properties'
        />
    }

    return (
        <PropertiesClient
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default PropertiesPage