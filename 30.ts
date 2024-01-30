
import { NextResponse } from "next/server"

export async function POST(request) {
    const reqBody = await request.json()
    console.log(reqBody) //リクエストbodyの中身が表示
    return NextResponse.json("ハロー")
}
//リクエストに含まれるデータ（Body）はrequest.json()を使って確認。