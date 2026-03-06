"use client";

import { Tabs } from "@/app/components/ui/10-ui";
import Image from "next/image";

export function Component10() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: <TabContent title="Product Tab" img="/img/a.jpg" />,
    },
    {
      title: "Services",
      value: "services",
      content: <TabContent title="Services Tab" img="/img/b.jpg" />,
    },
    {
      title: "Playground",
      value: "playground",
      content: <TabContent title="Playground Tab" img="/img/c.jpg" />,
    },
    {
      title: "Content",
      value: "content",
      content: <TabContent title="Content Tab" img="/img/d.jpg" />,
    },
    {
      title: "Random",
      value: "random",
      content: <TabContent title="Random Tab" img="/img/a.jpg" />,
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TabContent = ({ title, img }: { title: string; img: string }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary-general to-violet-black">
      <p>{title}</p>

      <Image
        src={img}
        alt={title}
        width={1000}
        height={900}
        className="object-cover object-left-top h-[40%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        priority={false}
      />
    </div>
  );
};
