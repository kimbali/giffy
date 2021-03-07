import React from 'react'
import Gif from '../../components/Gif'
import useSingleGif from 'hooks/useSingleGif'

export default function Detail({ params }) {
    const gif = useSingleGif({ id: params.id });

    return <Gif {...gif} />
}