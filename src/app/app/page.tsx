import ProductsList from "../../components/ProductsList";

export default function Main() {
  return ( 
    <div className="w-full">
      LISTA DE COMPRAS
      <ProductsList products={['Leite', 'Batata Palha', 'Manteiga', 'Queijo', 'Iogurte']}/>
    </div>
  );
}
