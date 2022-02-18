import React from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, value, measurementUnit, image } = this.props
    return (
      <div>
        <img src= { image } alt="" />
        <li>Nome: { name }</li>
        <li>Tipo: { type }</li>
        <li>Peso médio: {value} {measurementUnit}</li>
      </div>
    )
  }
}

export default Pokemon;