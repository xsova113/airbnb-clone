import { NextResponse } from "next/server";
import getCurrentUser from "@/app/action/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
    reservationId?: string;
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error();
    };

    const { reservationId } = params;
    if (!reservationId || typeof reservationId !== "string") {
        throw new Error("Invalid ID");
    };

    const reservation = await prisma.reservation.deleteMany({
        where: {
            id: reservationId,
            OR: [
                { id: currentUser.id },  // Creator of the reservation
                { listing: { userId: currentUser.id } } // Owner of the listing
            ]
        },
    });

    return NextResponse.json(reservation);
}