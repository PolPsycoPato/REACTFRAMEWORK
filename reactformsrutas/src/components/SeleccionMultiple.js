import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {

    selectMultiple = React.createRef();

    mostrarSeleccionado=(event)=>{
        event.preventDefault();
        let options = this.selectMultiple.current.options;
        var data = "";
        for(var option of options){
            if (option.selected==true) {
                console.log(option.value);
                data = data + option.value + ",";
            }
            
        }
        this.setState({seleccionados:data});
    }

state={
    seleccionados:""
}

    render() {
        return (
            <div>
                <h1>Seleccion multiple</h1>
                <h2></h2>
                <form>
                    <label>Seleccione varios elementos</label>
                    <select size={"10"} multiple ref={this.selectMultiple}>
                        <option>Elemento 1</option>
                        <option>Elemento 2</option>
                        <option>Elemento 3</option>
                        <option>Elemento 4</option>
                        <option>Elemento 5</option>
                        <option>Elemento 6</option>
                    </select>
                    <button>Mostrar Seleccionados</button>
                </form>
            </div>
        )
    }
}
