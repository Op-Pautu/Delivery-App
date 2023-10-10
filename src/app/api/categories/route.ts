import { prisma } from "@/app/utils/connect";
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()

        return NextResponse.json(categories, { status: 200 })
        // return new NextResponse(
        //     JSON.stringify(categories),
        //     { status: 200 }
        // )
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
    }
}