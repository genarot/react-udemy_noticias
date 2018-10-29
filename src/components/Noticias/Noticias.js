import React,{Component} from 'react';
import Noticia from '../Noticia/Noticia';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
export default class Noticias extends Component {

    render() {
        return (
            <div className="row">
                <TransitionGroup>
                {
                    this.props.noticias.map((noticia, index) => {
                        return <CSSTransition
                                    key={noticia.url}
                                    classNames="fade"
                                    timeout={700}
                                    >
                                    <Noticia noticia={noticia}/>  
                                </CSSTransition>
                    })
                }
                </TransitionGroup>
            </div>
        );
    }
}