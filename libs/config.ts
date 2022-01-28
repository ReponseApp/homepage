

export const CONFIG = {
  NAVBAR_LIST: [
    {
      title: "Contact",
      href: "#",    
    },
    {
        title : "Retro",
        href : "#"
    },
    {
        title : "Blog",
        href : "/blogs"
    },
    {
        title : "Feedbacks",
        href : "#"
    }
  ] as INavbarProps[],

  BLOG: [
    { 
      photo: "https://i.imgur.com/WJKrFHY.png",
      title: "Hello World",
      desc: "This is a blog post",
      file: "hello-world.md",
      link: "helloworld",
    }
  ] as IBlogProps[],
};

interface INavbarProps {
  title: string;
  href: string;
}

export interface IBlogProps {
  photo: string;
  title: string;
  desc: string;
  link: string;
  file: any;
}
