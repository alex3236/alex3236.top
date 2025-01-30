import React from "react";

export function PartHolder(
  {
    title,
    children,
  }: {
    title: React.ReactNode;
    children: React.ReactNode;
  }) {
  return (
    <>
      <h3 className='mt-3 text-xl text-sky-900 dark:text-sky-200 leading-relaxed'>{title}</h3>
      <p>{children}</p>
    </>
  );
}

export function B({children}: { children: React.ReactNode }) {
  return <strong className='font-bold ml-1'>{children}</strong>;
}
