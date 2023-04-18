import ProductsList from "../../components/ProductsList";

export default function Main() {
  return ( 
    <div>
      LISTA DE COMPRAS
      <ProductsList products={['Leite', 'Batata Palha', 'Manteiga', 'Queijo', 'Iogurte']}/>
    </div>
  );
}
