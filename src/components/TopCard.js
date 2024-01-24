import React from 'react'

const TopCard = ({name, img, count, discount}) => {
  return (
    <div className='d-flex flex-column top-card p-3 justify-content-between'>
      <img src={img} alt="" width="35px"/>
      <p className='m-0'>{name}</p>
      <div className="d-flex justify-content-between align-items-center">
      <p className='m-0 card-count'>{count}</p>
      <div className='discount'>
        {discount}
      </div>
      </div>
    </div>
  )
}

export default TopCard
