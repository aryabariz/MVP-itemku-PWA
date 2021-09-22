/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../helpers/context'
import executeAxios from '../../helpers/executeAxios'
import Card from '../molecules/card'
import Link from 'next/link'

const PokemonDetail = () => {
  const { data } = useContext(ProductContext) as any

  const [poke, setPoke] = useState({
    name: '',
    sprites: {
      front_default: '',
    },
    base_experience: '',
  })

  const getDatas = async () => {
    try {
      const response = await executeAxios({
        method: 'GET',
        url: data,
      })
      if (response.status === 200) {
        setPoke(response.data)
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDatas()
  }, [])

  console.log(poke)
  console.log(data)

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <p className="p-8 font-bold text-3xl">Pokemon</p>
      <Card
        name={poke.name}
        image={poke.sprites.front_default}
        exp={poke.base_experience}
      ></Card>
      <div className="p-8">
        <Link href="/">
          <button className="outline-none bg-purple p-4 text-white text-base rounded-xl hover:opacity-80">
            {' '}
            {`<< Back`}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PokemonDetail
