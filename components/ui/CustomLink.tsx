'use client'
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface CustomLinkProps{
    children: ReactNode;
    path: string;
}

const CustomLink = ({ children, path }: CustomLinkProps) => {
  const pathName = usePathname();
  const isSame = pathName === path;
  return (
    <a className={`${isSame? 'text-[#00d991]':''} font-semibold text-sm`} href={path}>
        {children}
    </a>
  );
};

export default CustomLink;