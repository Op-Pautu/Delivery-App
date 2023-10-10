import { getAuthSession } from "@/app/utils/auth";
import { prisma } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    const session = await getAuthSession()

    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: session?.user.email!
    //     }
    // })

    if (!session) {
        return NextResponse.json({ message: "You are not authenticated!" }, { status: 500 })
    }

    try {
        if (session.user.isAdmin) {
            const orders = prisma.order.findMany()
            return NextResponse.json(orders, { status: 200 })
        }
        const orders = prisma.order.findMany({
            where: {
                userEmail: session.user.email!
            }
        })
        return NextResponse.json(orders, { status: 200 })

    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
    }
}