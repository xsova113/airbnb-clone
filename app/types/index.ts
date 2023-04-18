import { User, Listing, Reservation } from "@prisma/client"

export type SafeListing = Omit<
    Listing,
    "createdAt"
> & {
    createdAt: string;
}

export type SafeReservations = Omit<
    Reservation,
    "createdAt" | "startDate" | "endDate" | "listing"
> & {
    createdAt: string;
    startDate: string;
    endDate: string;
    listing: SafeListing;
}

export type SafeUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'> & {
    createdAt?: string;
    updatedAt?: string;
    emailVerified?: string | null;
};