import { useEffect, useState } from 'react';

type Product = {
  id: string;
  title: string;
  thumbnail?: string;
};

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div style={{ display: 'flex', gap: '20px',backgroundColor: '#fff', flexDirection: 'column'}}>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <img src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </div>
  );
}
