import React from 'react'
import EmptyState from '../components/EmptyState'
import getCurrentUser from '../action/getCurrentUser'
import getReservations from '../action/getReservations'
import TripsClient from './TripsClient'


const TripsPage = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return <EmptyState
            title='Unauthorized'
            subtitle='Please login to view this page'
        />
    }

    const reservations = await getReservations({
        userId: currentUser.id
    });

    if (reservations.length === 0) {
        return <EmptyState
            title='No trips found'
            subtitle='You have no trips reserved yet'
        />
    }

    return (
        <TripsClient
            reservations={reservations}
            currentUser={currentUser}
        />
    )
}

export default TripsPage