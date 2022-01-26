import { CONFIG } from "@libs/config";
import { NavbarPc } from "@components/NavbarPc";

const BlogIndex = () => {
  return (
    <div>
      <NavbarPc />
      <div className="mx-auto items-center w-9/12">
        <div className="">
          {CONFIG.BLOG.map((r) => (
            <div className="flex bg-gray-900 mt-5 p-5 rounded-xl">
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
    </div>

      
  )
};

export default BlogIndex;



