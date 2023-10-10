import { prisma } from "@/app/utils/connect"
import { NextRequest, NextResponse } from "next/server"

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params
    try {
        const body = await req.json()

        await prisma.order.update({
            where: {
                id: id
            },
            data: {
                status: body
            }
        })

        return NextResponse.json({ message: "Order has been updated." }, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}