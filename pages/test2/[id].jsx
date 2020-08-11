import { useRouter } from 'next/router'
import React from "react";

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div>
      <h1>Note: {id} </h1>
    </div>
  )
}
