import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const { id } = params;
    if (id) {
        const response = await fetch(`http://127.0.0.1:8080/cliente/${id}`)
        const data = await response.json()
        return NextResponse.json(data)
    }
}



export async function POST( request ) {
    const responseData = await request.json()

    const response = await fetch(`http://127.0.0.1:8080/client/cadastro`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
    });
    const data = await response.json()
    return NextResponse.json(data)
}
