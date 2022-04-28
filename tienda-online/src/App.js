import Directorio from "./componentes/directorio/directorio.component";
const App = () => {
  const categorias = [
    {
      id : 1,
      titulo: 'Rosas',
      subtitulo: 'Comprar Ahora',
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      
    },
    {
      id : 2,
      titulo: 'Jasminez',
      subtitulo: 'Comprar Ahora',
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id : 3,
      titulo: 'Violetas',
      subtitulo: 'Comprar Ahora',
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id : 4,
      titulo: 'Girasoles',
      subtitulo: 'Comprar Ahora',
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id : 5,
      titulo: 'Ruda',
      subtitulo: 'Comprar Ahora',
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  return (
    <Directorio key={categorias.id} categorias={ categorias }></Directorio>
  );
}

export default App;
