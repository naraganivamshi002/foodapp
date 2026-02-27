import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './redux/CartSlice' // ✅ adjust path if needed

const nonVegItems = [
  { id: 1, name: 'Chicken Biryani', price: 260, desc: 'Fragrant rice layered with spiced chicken.', image: 'chicke.jpg' },
  { id: 2, name: 'Butter Chicken', price: 240, desc: 'Creamy tomato gravy with tender chicken.', image: 'ButterChicken.jpg' },
  { id: 3, name: 'Fish Curry', price: 230, desc: 'Spicy coastal-style fish curry.', image: 'fish.jpg' },
  { id: 4, name: 'Mutton Rogan Josh', price: 320, desc: 'Slow-cooked aromatic mutton curry.', image: 'Mutton-Biryani.webp' },
  { id: 5, name: 'Prawn Masala', price: 280, desc: 'Pan-fried prawns in spicy masala.', image: 'prans.webp' },
];

function NonVeg() {
  const dispatch = useDispatch() // ✅ added

  const addToCart = (item) => {
    dispatch(addItem(item)) // ✅ added
  }

  return (
    <>
      <h1 style={{marginBottom: 16}}>Non-Veg Items</h1>

      <div style={{display: 'flex', gap: 16, overflowX: 'auto', padding: '8px 0', WebkitOverflowScrolling: 'touch'}}>
        {nonVegItems.map(item => (
          <div key={item.id} className="food-card" style={{minWidth: 220, flex: '0 0 220px', boxSizing: 'border-box'}}>
            <div style={{width: '100%', height: 140, overflow: 'hidden', borderRadius: 6}}>
              <img src={item.image} alt={item.name} style={{maxWidth: '100%', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
            </div>

            <h3 style={{margin: '8px 0 4px 0'}}>{item.name}</h3>
            <p style={{margin: '4px 0', color: '#555', minHeight: 36}}>{item.desc}</p>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8}}>
              <strong>{item.price}</strong>

              <button
                style={{background: '#28a745', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer'}}
                onClick={() => addToCart(item)} // ✅ IMPORTANT
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default NonVeg