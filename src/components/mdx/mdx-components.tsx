// Components
import Image from "next/image";

// Contentlayer
import { useMDXComponent } from "next-contentlayer/hooks";

import "@/styles/mdx.css";

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
