import "./categoria-item.style.scss"

const CategoriaItem = ( {categoria} ) => {
    const {imageUrl, titulo, id} = categoria;
    return (
        <div key={id} className="contenedor-categoria">
          <div className="background-image" style={{
            backgroundImage : `url(${imageUrl})`
          }}>

          </div>
          <div className="contenedor-body-categoria">
            <h2>{ titulo } </h2>
            <p>Descripcion de las rosas</p>
          </div>
          
        </div>
    )
}
export default CategoriaItem