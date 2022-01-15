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
        title : "Features",
        href : "#"
    },
    {
        title : "Feedbacks",
        href : "#"
    }
  ] as INavbarProps[],
};

interface INavbarProps {
  title: string;
  href: string;
}
