import CategoriaItem from "../categoria-item/categoria-item.componente"
import "./directorio.style.scss"
const Directorio = ({ categorias }) =>{
    return (
        <div className="directorio-container" >
        { categorias.map(( categoria) => (        
          <CategoriaItem key={categoria.id} categoria = { categoria } ></CategoriaItem>
        ) ) }
    </div>
    )
}
export default Directorio