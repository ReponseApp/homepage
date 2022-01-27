import * as fs from 'fs'

import { CONFIG, IBlogProps } from "@libs/config";
import { useEffect, useState } from "react";

import { NavbarPc } from "@components/NavbarPc";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";

const Post = ({ data } : any) => {

  const router = useRouter()
  const { uid } = router.query
  const [title, setTitle] = useState("")
  const [desc , setDesc] = useState("")
  const [photo , setPhoto] = useState("")
  const [file, setFile] = useState("")


  const getData = async (fileName : string) => {
    const data = await fetch(fileName);
    const body = await data.text()
    setFile(body)
  }

  useEffect(() => {
    
    getData(file)
    CONFIG.BLOG.filter(r => r.link === uid).map(r => {
      setTitle(r.title)
      setDesc(r.desc)
      setPhoto(r.photo)
      setFile(r.file)
      
    })
  })

  const [markdown, setMarkdown] = useState("");


  return (
    <div>
      <NavbarPc />
      <div className="container mx-auto items-center w-9/12">
        <div className="p-4 bg-gray-900 bg-opacity-75 rounded-lg text-gray-100">
          <img src={ photo } className="flex w-auto h-20" alt="" />
          {!title ? (
            <p className="bg-transparent ">Data bulunamadı</p>
          ) : (
            <p className="text-3xl bg-transparent ">{title}</p>
          )}
        
          <p className="bg-transparent text-gray-400">{ desc }</p>
        </div>
        <div className="p-4 bg-gray-900 bg-opacity-75 rounded-lg text-gray-100 mt-5">
          <div className="bg-transparent">
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>
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


