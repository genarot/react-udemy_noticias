import React,{Component} from 'react';
import Noticia from '../Noticia/Noticia';

export default class Noticias extends Component {

    render() {
        return (
            <div className="row">
               {
                this.props.noticias.map((noticia, index) => {
                    return <Noticia noticia={noticia} key={noticia.url}/>  
                })
                }
            </div>
        );
    }
}