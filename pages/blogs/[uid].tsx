import { CONFIG, IBlogProps } from "@libs/config";
import { useEffect, useState } from "react";

import { Header } from "@components/Header";
import { NavbarPc } from "@components/NavbarPc";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
import matter from 'gray-matter';
const Post = ({ data } : any) => {
  const router = useRouter()
  const { uid } = router.query
  const [title, setTitle] = useState("")
  const [desc , setDesc] = useState("")
  const [photo , setPhoto] = useState("")
  const [markdown, setMarkdown] = useState("");
  const [err,setErr] = useState("")
  const DataGet = async(filename : any) => { 
    const file = await fetch("/md/" + filename + ".md")
    if(!file) return setErr("hata var olum")
    const text = await file.text()
    let asd = await matter(text).content
    setMarkdown(await matter(text).content)
    let dataset = await matter(text).data
    await setTitle(dataset.title)
    await setDesc(dataset.description)
    await setPhoto(dataset.photo)  
    }

  useEffect(() => {
    DataGet(uid)
   
  })

  return (
    <div>
      <NavbarPc />
      <div className="container mx-auto items-center w-9/12">
        <div className="flex p-4 bg-gray-900 bg-opacity-75 rounded-lg text-gray-100">
          <img src={ photo } className="flex w-auto h-20" alt="" />
          <div className="flex flex-col justify-center ml-5">
            {
             err && !title ? (
              <p className="bg-transparent ">Data bulunamadı</p>
            ) : (
              <p className="text-3xl bg-transparent ">{title || "Data bulunamadı"}</p>
            )}
          
            <p className="bg-transparent text-gray-400">{ desc }</p>
          </div>
        </div>
        <div className="p-4 bg-gray-900 bg-opacity-75 rounded-lg text-gray-100 mt-5">
          <div className="bg-transparent w-10/12">
            
          { markdown.length === 0 || !markdown || markdown.includes("DOCTYPE") ? (
              <p className="bg-transparent ">Data Yükleniyor</p>
            ) : (
              <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            )}
          </div>
        </div>
      </div>
      <Header title={title}/>
    </div>


  )

};

/*
dangerouslySetInnerHTML={ { __html: markdown } }
*/

/*
export async function getStaticProps() {
  const router = useRouter()
  const { uid } = router.query
  let data;
  CONFIG.BLOG.filter(r => r.link === uid).map(r => {
    data = getSortedData(r.file)
  })
  return {
    props : {
      data
    }
  }
}
*/


export default Post;




`
---
description: blog
title: Noir's Code
date: 2008
photo: https://i.imgur.com/WJKrFHY.png
title: Hello World
desc: This is a blog post
file: hello-world.md
link: helloworld
---
`