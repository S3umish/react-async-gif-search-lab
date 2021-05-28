import React from 'react'

export default function GifList(props) {

    const images = props.gifs.map(gif => <img key={gif} src={gif} alt="" ></img>)
    return (
        <div>
        {images}
            
        </div>
    )
}

