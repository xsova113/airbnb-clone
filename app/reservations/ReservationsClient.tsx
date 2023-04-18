'use client';

import axios from "axios";
import { SafeReservations, SafeUser } from "../types";
import Toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface ReservationsClientProps {
    reservations: SafeReservations[];
    currentUser?: SafeUser | any;
}

const ReservationsClient = ({
    reservations,
    currentUser,
}: ReservationsClientProps) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    // Delete reservation with delete method api call
    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
            .then(() => {
                Toast.success('Reservation deleted');
                router.refresh();
            })
            .catch(() => {
                Toast.error("Something went wrong");
            })
            .finally(() => {
                setDeletingId('');
            })
    }, [router]);

    return (
        <Container>
            <Heading
                title="Reservations"
                subtitle="Bookings on your properties"
            />
            <div
                className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8"
            >
                {reservations.map(reservation => (
                    <ListingCard
                        key={reservation.id}
                        data={reservation.listing}
                        reservation={reservation}
                        actionId={reservation.id}
                        onAction={onCancel}
                        disabled={deletingId === reservation.id}
                        actionLabel="Cancel guest reservation"
                        currentUser={currentUser}
                    />))}
            </div>
        </Container>
    )
}

export default ReservationsClient