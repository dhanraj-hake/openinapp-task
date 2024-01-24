import React from 'react'
import TopCard from './TopCard';

const TopCards = () => {

    const cards = [
        {
            img : "card1.svg",
            name : "Total Revenues",
            count : "$2,129,430",
            discount : "+2.5%"
        },
        {
            img : "total-transactions.svg",
            name : "Total Transactions",
            count : "1,520",
            discount : "+1.7%"
        },
        {
            img : "total-likes.svg",
            name : "Total Likes",
            count : "9,721",
            discount : "+1.4%"
        },
        {
            img : "total-users.svg",
            name : "Total Users",
            count : "9,721",
            discount : "+4.2%"
        },

    ];

  return (
    <div className='d-flex justify-content-between'>
            {
                cards.map((card, index) =>{
                    return(
                        <TopCard key={index} name={card.name} img={card.img} count ={card.count} discount={card.discount}/>
                    )
                })
            }
    </div>
  )
}

export default TopCards
