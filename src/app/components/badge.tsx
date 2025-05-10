'use client';

import React from 'react';
import {IconBaseProps, IconType} from 'react-icons';
import copy from 'copy-to-clipboard';
import {Tooltip} from 'react-tooltip';

function Icon({name}: IconBaseProps) {
  const IconModule = require(`react-icons/fa6`); // eslint-disable-line @typescript-eslint/no-require-imports
  const Icon = IconModule[name as keyof typeof IconModule] as IconType;
  return <Icon className='inline svg-icon mr-[.15rem]'/>;
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children?: React.ReactNode;
  icon?: string;
  name?: string;
  tooltip?: string;
  url?: string;
  content?: string;
  disabled?: boolean;
  strikeThrough?: boolean;
}

export default function Badge(
  {
    disabled = false,
    className,
    children,
    icon = 'FaReact',
    name,
    tooltip,
    url,
    content,
    strikeThrough = false,
    ...props
  }: BadgeProps) {
  const btn = (
    <button
      data-tooltip-id='tooltip-provider'
      data-tooltip-content={tooltip}
      className={`inline-block rounded-full px-3 py-[.3rem] mx-1 mt-3 ${
        disabled ? 'cursor-default' : 'hover:text-sky-200'
      } ${className}`}
      {...props}
      role='button'
      onClick={(e) => {
        if (disabled) return;
        if (url === undefined) {
          const text = content ?? name;
          if (text === undefined) return;
          copy(text);
          const t = e.currentTarget;
          t.setAttribute('data-tooltip-content', '已复制到剪贴板');
          setTimeout(() => {
            t.setAttribute('data-tooltip-content', tooltip ?? '');
          }, 1500);
        } else {
          window.open(url, '_blank')?.focus();
        }
      }}
    >
      <Icon name={icon}/> {strikeThrough ? <s>{name}</s> : name}
      {children}
    </button>
  );
  return btn;
}

export function TooltipProvider() {
  return (
    <Tooltip
      id='tooltip-provider'
      opacity={1}
      style={{
        backgroundColor: 'rgb(88, 88, 88)',
        borderRadius: '9999px',
        zIndex: 9999,
      }}
    />
  );
}
