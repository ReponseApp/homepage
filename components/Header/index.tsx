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

      </Head>
    )
}