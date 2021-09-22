/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { ProductContext } from '../../helpers/context'
import { GET_POKEMON } from '../../helpers/endpoint'
import executeAxios from '../../helpers/executeAxios'
import ListCard from '../molecules/list-card'

const Home = () => {
  const { setData } = useContext(ProductContext) as any
  const pokemon: { name: any; image: any }[] = []
  const [product, setProduct] = useState([] as any)
  const url = []

  const getData = async () => {
    try {
      const response = await executeAxios({
        method: 'GET',
        url: `${GET_POKEMON}/?limit=10`,
      })
      if (response.status === 200) {
        setProduct(response.data?.results)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getDataDetail = async (id: any) => {
    try {
      const response = await executeAxios({
        method: 'GET',
        url: id,
      })
      if (response.status === 200) {
        const poke = response.data
        const data = {
          name: poke.name,
          image: poke.sprites?.front_default,
        }
        pokemon.push(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (product.length > 0) {
    for (let i = 0; i < product.length; i++) {
      url.push(product[i]?.url)
    }
    if (url.length > 0) {
      url.forEach((link) => getDataDetail(link))
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(pokemon)

  const handleClick = (data: any) => {
    setData(data)
  }

  return (
    <div className="flex w-full flex-col sm:px-24 items-center flex-wrap">
      <p className="p-8 font-bold text-3xl">Pokedex</p>
      <div className="flex w-full flex-wrap">
        {product.length > 0 ? (
          product?.map((e: any, i: any) => (
            <ListCard
              onClick={() => handleClick(e.url)}
              key={i}
              href={e.name}
              name={e.name}
              url={e.url}
            ></ListCard>
          ))
        ) : (
          <p>No Pokemon...</p>
        )}
      </div>
    </div>
  )
}

export default Home
