import { CONFIG, IBlogProps } from "@libs/config";
import { useEffect, useState } from "react";

import { Header } from "@components/Header";
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
  const [markdown, setMarkdown] = useState("");

  const DataGet = async(filename : string) => { 
    const file = await fetch("/md/" + filename)
    const text = await file.text()
    setMarkdown(text);
    }

  useEffect(() => {
    CONFIG.BLOG.filter(r => r.link === uid).map(async r => {
      setTitle(r.title)
      setDesc(r.desc)
      setPhoto(r.photo)      
      DataGet(r.file)
    })
  })


  return (
    <div>
      <NavbarPc />
      <div className="container mx-auto items-center w-9/12">
        <div className="flex p-4 bg-gray-900 bg-opacity-75 rounded-lg text-gray-100">
          <img src={ photo } className="flex w-auto h-20" alt="" />
          <div className="flex flex-col justify-center ml-5">
            {!title ? (
              <p className="bg-transparent ">Data bulunamadı</p>
            ) : (
              <p className="text-3xl bg-transparent ">{title}</p>
            )}
          
            <p className="bg-transparent text-gray-400">{ desc }</p>
          </div>
        </div>
        <div className="p-4 bg-gray-900 bg-opacity-75 rounded-lg text-gray-100 mt-5">
          <div className="bg-transparent w-10/12">

            { markdown.length === 0 || !markdown ? (
              <p className="bg-transparent ">Data bulunamadı</p>
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


