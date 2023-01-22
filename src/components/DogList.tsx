import React from 'react'
import {useQuery} from '@tanstack/react-query'

function DogList() {

    const {data} = useQuery({
        queryKey: ['dog'],
        queryFn: ()=>{
            return;
        }
    })

    // console.log(data)
  return (
    <div></div>
  )
}

export default DogList