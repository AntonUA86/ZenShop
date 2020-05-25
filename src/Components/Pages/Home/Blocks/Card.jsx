import React, { useState } from 'react';
import { Card as AntdCard } from 'antd';
import ReactCardFlip from 'react-card-flip';

const { Meta } = AntdCard;


export const Card = ({ item }) => {
    const [isFlipped, changeFlipped] = useState(false)
    const clickCard = () => {
        changeFlipped(!isFlipped)
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

            <AntdCard
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image}
                    onClick={clickCard}
                />}
            >
                <Meta title={item.nema} />
            </AntdCard>

            <AntdCard
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image}
                    onClick={clickCard}
                />}
            >
                <Meta title={item.nema} />
            </AntdCard>
        </ReactCardFlip>
    )
}
