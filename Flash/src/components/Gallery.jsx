import React from 'react'

function Gallery({images}) {
  return (
    <div>
        <h2> Your Screenshot Gallery</h2>
        {images ? <div>
            {images.map((item, index) => (
                <li className='gallery' key={index}>
                    <img 
                    className='gallery-screenshot'
                    src={item} 
                    alt="undefined screenshot from query"
                    width="500" />
                </li>
            ))}
        </div>:
        "No Images currenly"}
    </div>
  )
}

export default Gallery