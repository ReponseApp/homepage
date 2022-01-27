import type { FC } from "react";
import Head from "next/head";
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
        <meta name="description" content="Communication has never been this easy"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://reponse.app"/>
        <meta property="og:title" content="Reponse App"/>
        <meta property="og:description" content="Send messages, Not personal data. Communication has never been this easy"/>
        <meta property="og:image" content="http://reponse.app/assets/logo.png"/>
        <meta property="theme-color" content="#9883E5"/>

        <meta property="twitter:url" content="https://reponse.app/"/>
        <meta property="twitter:title" content="reponse.app"/>
        <meta property="twitter:description" content="Send messages, Not personal data. Communication has never been this easy"/>
        <meta property="twitter:image" content="http://reponse.app/assets/logo.png"/>
        <meta property="twitter:domain" content="reponse.app"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      </Head>
    );
};
