import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/CartSlice'; // ✅ adjust path if needed

const milkItems = [
  { id: 1, name: 'Palakova', price: 250, desc: 'Delicious and creamy milk sweet.', image: 'PALAKOVA.jpg' },
  { id: 2, name: 'Milk Cake', price: 300, desc: 'Soft and sweet milk-based dessert.', image: 'Milkcake.webp' },
  { id: 3, name: 'Rasmalai', price: 350, desc: 'Soft paneer balls in sweetened milk.', image: 'rasmalai.jpg' },
  { id: 4, name: 'Kalakand', price: 280, desc: 'Traditional Indian milk fudge.', image: 'Kalakand.jpg' },
  { id: 5, name: 'Basundi', price: 200, desc: 'Thickened sweetened milk with nuts.', image: 'Basundi.jpg' },
];

function Milk() {
  const dispatch = useDispatch(); // ✅ added

  const addToCart = (item) => {
    dispatch(addItem(item)); // ✅ added
  };

  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Milk Products</h1>

      <div style={{ display: 'flex', gap: 16, overflowX: 'auto', padding: '8px 0', WebkitOverflowScrolling: 'touch' }}>
        {milkItems.map(item => (
          <div key={item.id} className="food-card" style={{ minWidth: 220, flex: '0 0 220px', boxSizing: 'border-box' }}>
            <div style={{ width: '100%', height: 140, overflow: 'hidden', borderRadius: 6 }}>
              <img src={item.image} alt={item.name} style={{ maxWidth: '100%', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            <h3 style={{ margin: '8px 0 4px 0' }}>{item.name}</h3>
            <p style={{ margin: '4px 0', color: '#555', minHeight: 36 }}>{item.desc}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
              <strong>{item.price}</strong>

              <button
                onClick={() => addToCart(item)} // ✅ important
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

export default Milk;