import EmptyState from "../components/EmptyState";
import getCurrentUser from "../action/getCurrentUser";
import getReservations from "../action/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState
            title="Unauthorised"
            subtitle="Please login to view this page"
        />;
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if (reservations.length === 0) {
        return <EmptyState 
            title="No reservations found"
            subtitle="Looks like you don't have any reservations on your properties"
        />
    }

    return (
        <ReservationsClient 
            reservations={reservations}
            currentUser={currentUser}
        />
    )
}

export default ReservationsPage;