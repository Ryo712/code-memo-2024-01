// POSTリクエスト
export async function POST(request) {
    return NextResponse.json("ハロー")
}

// DELETEリクエスト
export async function DELETE() {
    return NextResponse.json("ハロー")
}

// APIルートでPOST DELETEは明示して行おう