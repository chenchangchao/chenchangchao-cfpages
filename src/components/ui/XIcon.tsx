import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const XIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L.826 2.25H8.084l4.707 6.214 5.453-6.214zm-1.161 19.35h1.833L7.045 4.126H5.078l12.005 17.474z" />
  </svg>
);

export default XIcon;