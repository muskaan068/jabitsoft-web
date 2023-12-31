import Document from 'next/document'
import {Html,Head,Main,NextScript} from 'next/document'

class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png" />
                    <link rel="theme-color" href="#fff" />

                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

 export default MyDocument;