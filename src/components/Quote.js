import React from 'react'

function Quote({data}) {
  return (
    <div className='quote'>{data.id}) {data.quote}</div>
  )
}

export default Quote