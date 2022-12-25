import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html style={{ scrollBehavior: "smooth" }}>
            <Head />
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Source+Code+Pro&display=swap"
                rel="stylesheet"
            ></link>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
