import type { FC } from "react";
import Head from "next/head"
interface IProps {
  title: string
}
export const Header:FC<IProps> = function({title="Reponse App"}){
    return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Created by Reponse Team" />
        <link rel="icon" href="assets/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </Head>
    )
}