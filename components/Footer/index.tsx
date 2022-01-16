import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="w-full flex justify-center text-center">
      <div className="-my-4">
        <h1 className="text-white text-lg">
          Made With ❤️ by{" "}
          <a href="https://github.com/benerenla" className="text-indigo-600">
            atlasvh
          </a>{" "}
          using{" "}
          <a href="https://nextjs.org/" className="text-gray-400">
            Next.js
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com/" className="text-pink-800">
            TailwindCSS
          </a>
        </h1>
      </div>
    </footer>
  );
};
