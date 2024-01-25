// app/api/hello/route.js

import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json("ハロー")
}

/*Next.js Appフォルダ */
/* AppフォルダでAPI開発。GETリクエストの最もベーシックなコード*/