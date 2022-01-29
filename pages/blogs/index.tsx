import { CONFIG } from "@libs/config";
import { NavbarPc } from "@components/NavbarPc";
import { Header } from "@components/Header";
import { useEffect, useState } from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
function BlogIndex( turned:any ) {
  console.log("zurting: ",turned)
  return (
    <div> 
      <NavbarPc />
      <div className="mx-auto items-center w-9/12">
        <div className="">
          {turned.turned.length > 0 && turned.turned.map((r:any,i:any) => (
            <div className="flex bg-gray-900 mt-5 p-5 rounded-xl" key={i}>
              <div className="bg-transparent">
                <img src={r.photo} className="h-20 rounded-lg" alt="" />
              </div>
              <div className="bg-transparent ml-5">
                <a href={"/blogs/" + r.link} key={r.title} className="bg-transparent text-gray-100 text-4xl">
                  {r.title}
                </a>
                <p className="bg-transparent text-gray-400">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Header title="Blog"/>
    </div>

      
  )
};
export async function getStaticProps(context:any) {
  let data: any[] = [];
  const file =  fs.readdirSync("./public/md",) 
  const data2 = file.map(async(value) => {
   let file = fs.readFileSync("./public/md/"+value)
    let dataset =  matter(file).data
    let link = value.split(".")[0]
    let title = dataset.title
    let desc = dataset.description
    let photo = dataset.photo
    data.push({link,title,desc,photo})
  })
 console.log("detta: ",data)
  return {
    props: {
      turned: data
    }
    
  }

}
export default BlogIndex;





