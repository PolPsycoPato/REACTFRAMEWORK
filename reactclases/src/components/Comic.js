import { Component } from "react";

class Comic extends Component {
    render() {
        return (<div>
            <h3>{this.props.comic.titulo}</h3>
            <p>{this.props.comic.descripcion}</p>
            <img src={this.props.comic.imagen} style={{ width: "200px", height: "300px" }}></img>
            <button onClick={() => {
                //Llamamos al metodo del padre
                this.props.seleccionarFavorito(this.props.comic);
            }}>FAVORITO</button>
            <button onClick={() => {
                var index = parseInt(this.props.id);
                this.props.deleteComic(index);
            }}>BORRAR</button>

        </div>);
    }
}



export default Comic;