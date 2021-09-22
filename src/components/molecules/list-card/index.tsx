/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import React from 'react'

interface IProps {
  url?: any
  name?: any
  href?: any
  onClick?: any
}

const ListCard = (props: IProps) => {
  return (
    <Link href={`/detail/${props.href}`}>
      <div
        onClick={props.onClick}
        className="hover:border-purple hover:border-2 hover:transform hover:-translate-y-4 transition ease-in-out duration-300 m-4 w-96 rounded-2xl bg-white shadow-lg cursor-pointer flex flex-col p-4 "
      >
        <div className="flex flex-col my-4 justify-between">
          <p className="text-xl text-black font-bold text-purple py-4 capitalize">
            {props.name}
          </p>
          <p className="text-xl text-black hover:text-purple">{props.url}</p>
        </div>
      </div>
    </Link>
  )
}

export default ListCard
