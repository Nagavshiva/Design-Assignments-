import React from 'react'

const CoinCard = ({ data }) => {
    return (
        <div className='crypto_list'>
            {data.map((data, index) => (
                <div className='card' key={index}>
                    <div className='card_image'>
                        <img src={data.image} alt="images" />
                    </div>
                    <div className='card_info'>
                        <h2>{data.name}</h2>
                        <h3>${data.current_price}</h3>
                    </div>

                </div>

            ))}

        </div>
    )
}

export default CoinCard;