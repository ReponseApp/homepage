import type { FC } from "react";
import Head from "next/head"
interface IProps {
  title: string
}
export const Header:FC<IProps> = function({title}){
    return (
    <Head>
        <title>{title} | Reponse App</title>
        <meta name="description" content="Created by Reponse Team" />
        <link rel="icon" href="assets/pinklogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<meta name="title" content="Reponse App | Send messages, Not personal data."/>
<meta name="description" content="Communication has never been this easy":>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://reponse.app/">
<meta property="og:title" content="Reponse App | Send messages, Not personal data."/>
<meta property="og:description" content="Communication has never been this easy"/>
<meta property="og:image" content="https://reponse.app/assets/pinklogo.png"/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://reponse.app/"/>
<meta property="twitter:title" content="Reponse App | Send messages, Not personal data."/>
<meta property="twitter:description" content="Communication has never been this easy"/>
<meta property="twitter:image" content="https://reponse.app/assets/pinklogo.png"/>

      </Head>
    )
}
