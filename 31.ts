const SingleBlog = () => {
    return (
        <h1>SingleBlogページ</h1>
    )
}

export default SingleBlog

export async function generateStaticParams() {
    //マークダウンファイルや外部データベースなどからURL名/ファイル名を取得するコード

    return paths
}

//動的ページのURL生成・登録のために使われる generateStaticParams()