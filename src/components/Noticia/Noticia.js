import React from 'react'

const Noticia = function(props) {
    const {urlToImage, url, title, description, source} = props.noticia;
    
    return  <div>
        <p>{props.noticia.content}</p>
    </div>
}

export default Noticia;