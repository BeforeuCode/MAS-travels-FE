import React, { FC } from 'react';

interface IProps {
  isFocused?: boolean;
}

export const DashboardIcon: FC<IProps> = ({ isFocused }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.22222 1H1V9.22223H7.22222V1Z"
        stroke={isFocused ? '#FFF' : '#61657E'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0001 1H10.7778V5.22224H17.0001V1Z"
        stroke={isFocused ? '#FFF' : '#61657E'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0001 8.77783H10.7778V17.0001H17.0001V8.77783Z"
        stroke={isFocused ? '#FFF' : '#61657E'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.22222 12.7778H1V17.0001H7.22222V12.7778Z"
        stroke={isFocused ? '#FFF' : '#61657E'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
