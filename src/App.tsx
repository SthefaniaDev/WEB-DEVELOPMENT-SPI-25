import { useEffect, useState } from 'react';
import Input from './components/Input';

type Product = {
  id: string;
  title: string;
  thumbnail?: string;
  description?: string
};

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // filteredProducts recebe apenas os produtos cujo título contém o texto digitado no input toLowerCase() garante que a busca não diferencie maiúsculas de minúsculas includes() verifica se o texto do input está contido no título do produto
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <Input
        id='input'
        value={search}
        onChange={setSearch}
        placeholder="Digite o nome do produto"
      />

      <div style={{ display: 'flex', gap: '20px', backgroundColor: '#fff', flexDirection: 'column' }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h4>{product.title}</h4>
            {product.thumbnail && <img src={product.thumbnail} alt={product.title} />}
            <p >{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
