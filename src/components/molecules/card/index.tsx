/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface IProps {
  exp?: any
  name?: any
  category?: any
  image?: any
}

const Card = (props: IProps) => {
  return (
    <div className="hover:border-2 m-4 w-96 rounded-2xl bg-white shadow-lg cursor-pointer  border-purple flex flex-col p-4 hover:transform hover:-translate-y-4 transition ease-in-out duration-300">
      <div className="bg-cover bg-center w-full border-2 border-purple h-48 rounded-lg">
        <div className="bg-blueOcean m-2 text-purple w-12 h-6 rounded-xl absolute r-0 text-sm font-bold flex justify-center items-center">
          {props.exp}
        </div>
        <img
          className="rounded-xl h-48 w-full bg-cover bg-center"
          src={props.image}
          alt={props.name}
        ></img>
      </div>
      <div className="flex my-4 justify-between">
        <p className="text-xl text-purple font-bold capitalize">{props.name}</p>
      </div>
    </div>
  )
}

export default Card
