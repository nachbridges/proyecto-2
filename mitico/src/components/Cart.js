import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: "Chilaquiles Míticos", price: 95, quantity: 1 },
  { id: 2, name: "Yogurt con fruta", price: 80, quantity: 1 },
  { id: 3, name: "Hot Cakes", price: 95, quantity: 1 },
  { id: 4, name: "Cheese Cake", price: 110, quantity: 1 },
  { id: 5, name: "Molletes Salados", price: 85, quantity: 1 },
  { id: 6, name: "Toast Mítico", price: 150, quantity: 1 },
  { id: 7, name: "Quesadillas a la plancha", price: 65, quantity: 1 },
  { id: 8, name: "Bistec a la mexicana", price: 130, quantity: 1 },
  { id: 9, name: "Sandwich Roast Beef", price: 180, quantity: 1 },
];

function Cart() {
  const [products, setProducts] = useState(initialProducts);

  const incrementQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    setProducts(updatedProducts);
  };

  const decrementQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const calculateTotal = () => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="cart-item">
              {product.name} - ${product.price} x {product.quantity}
              <button onClick={() => incrementQuantity(product.id)}>+</button>
              <button onClick={() => decrementQuantity(product.id)}>-</button>
              <button className="remove-btn" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total: ${calculateTotal()}</h2>
    </div>
  );
}

export default Cart;
