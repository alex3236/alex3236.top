'use client';

import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import copy from 'copy-to-clipboard';
import { redirect, RedirectType } from 'next/navigation';
import { Tooltip } from 'react-tooltip'


function Icon({ name }: IconBaseProps) {
  const IconModule = require(`react-icons/fa6`); // eslint-disable-line @typescript-eslint/no-require-imports
  const Icon = IconModule[name as keyof typeof IconModule] as IconType;
  return <Icon className='inline svg-icon mr-[.15rem]' />;
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  icon?: string;
  name?: string;
  tooltip?: string;
  url?: string;
  disabled?: boolean;
}

export default function Badge({ disabled = false, className, icon = "FaReact", name = "Test", tooltip, url, ...props }: BadgeProps) {
  return (

    <button data-tooltip-id="tooltip-provider" data-tooltip-content={tooltip} className={`inline-block rounded-full px-3 py-[.3rem] mx-1 mt-3 ${disabled ? "cursor-default" : "hover:border hover:border-white"} ${className}`} {...props} role="button" onClick={(e) => {
      if (disabled) return;
      if (url === undefined) {
        copy(name);
        const t = e.currentTarget;
        t.setAttribute("data-tooltip-content", "已复制到剪贴板");
        setTimeout(() => {
          t.setAttribute("data-tooltip-content", tooltip ?? "");
        }, 1500);
      } else
        redirect(url, RedirectType.push);
    }}>
      <Icon name={icon} /> {name}
    </button>
  );
}

export function TooltipProvider() {
  return <Tooltip id="tooltip-provider" style={{
    backgroundColor: "rgb(108, 108, 108)",
    borderRadius: "9999px",
    opacity: "1",
  }} />
}