// Updated Deserts Component with consistent card layout
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/CartSlice'; // ✅ adjust path if needed

const desertItems = [
  { id: 1, name: 'Chocolate Cake', price: 500, desc: 'Rich and moist chocolate cake.', image: 'chocolatecake.jpg' },
  { id: 2, name: 'Ice Cream', price: 150, desc: 'Creamy and delicious ice cream.', image: 'icecream.jpg' },
  { id: 3, name: 'Cupcake', price: 200, desc: 'Soft and fluffy cupcakes.', image: 'cupcake.webp' },
  { id: 4, name: 'Brownie', price: 300, desc: 'Chewy chocolate brownies.', image: 'pineapple brownies.jpg' },
  { id: 5, name: 'Donut', price: 100, desc: 'Sweet and tasty donuts.', image: 'dunkin-donuts.jpeg' },
];
function Deserts() {
  const dispatch = useDispatch(); // ✅ added

  const addToCart = (item) => {
    dispatch(addItem(item)); // ✅ added
  };

  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Deserts</h1>

      <div style={{ display: 'flex', gap: 16, overflowX: 'auto', padding: '8px 0', WebkitOverflowScrolling: 'touch' }}>
        {desertItems.map(item => (
          <div key={item.id} className="food-card" style={{ minWidth: 220, flex: '0 0 220px', boxSizing: 'border-box' }}>
            
            {/* ❌ removed stray 'c' */}
            <div style={{ width: '100%', height: 140, overflow: 'hidden', borderRadius: 6 }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ maxWidth: '100%', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <h3 style={{ margin: '8px 0 4px 0' }}>{item.name}</h3>
            <p style={{ margin: '4px 0', color: '#555', minHeight: 36 }}>{item.desc}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
              <strong>{item.price}</strong>

              <button
                onClick={() => addToCart(item)} // ✅ IMPORTANT
                style={{ background: '#28a745', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer' }}
              >
                Add to cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default Deserts;