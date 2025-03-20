import React from 'react'

const APIForm = ({inputs, handleChange, onSubmit, currentImage}) => {
    const inputsInfo = [
        "Input a link to any website you would like to take a screenshot of. Do not include https or any protocol in the URL",
        "Input which image format you would prefer for your screenshot: jpeg, png, or webp",
        "Input true or false if you would like your website screenshot to not contain any ads",
        "Input true or false if you would like your website screenshot to not contain of those annoying 'allow cookies' banners",
        "Choose the width of your screenshot (in pixels)",
        "Choose the height of your screenshot (in pixels)",
      ];
  return (
    <div>
        <h2>Select your Image Attributes</h2>
        <form className="form-container">
            {inputs && Object.entries(inputs).map(([category,value],index) => (
                <li className="form" key={index}>
                    <h2>{category}</h2>
                    <input 
                    type="text"
                    name={category}
                    value={value}
                    placeholder='Input this attribute...'
                    onChange={handleChange}
                    className='textbox' 
                    />
                <br></br>
                
                <p>{inputsInfo[index]}</p>
                </li>
                
            ))
            }
        </form>
        <button type='submit' className='button' onClick={onSubmit}>
            Take that Pic!
        </button>
        {currentImage ? (<img className='screenshot'
        src={currentImage}
        alt="Screenshot returned"/>):
        <div></div>}
    <div className='container'>
    <h3>Current Query status:</h3>
    <p>
    https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY
    <br />
    &url ={inputs.url} <br />
    &format ={inputs.format} <br />
    &width = {inputs.width} <br />
    &height = {inputs.height} <br />
    &no_cookie_banners = {inputs.no_cookie_banners} <br />
    &no_ads = {inputs.no_ads} <br />

    </p>

    </div>
    
        </div>
  )
}

export default APIForm