// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addItem } from './redux/CartSlice' // ✅ adjust path if needed

//   const vegItems = [
//   { id: 1, name: 'Paneer Butter Masala', price: 220, desc: 'Creamy tomato-based curry with paneer.', image: 'OIP.jpg' },
//   { id: 2, name: 'Aloo Gobi', price: 150, desc: 'Spiced potato & cauliflower.', image: 'aloo-gobi-masala-17.jpg' },
//   { id: 3, name: 'Palak Paneer', price: 210, desc: 'Spinach curry with paneer.', image: 'palak.webp' },
//   { id: 4, name: 'Chole Bhature', price: 180, desc: 'Spicy chickpeas with fried bread.', image: 'chole.jpg' },
//   { id: 5, name: 'Veg Biryani', price: 200, desc: 'Fragrant rice with mixed vegetables.', image: 'OIP.webp' },
//   { id: 6, name: 'Baingan Bharta', price: 160, desc: 'Smoky mashed eggplant curry.', image: 'baingan.jpg' },
//   { id: 7, name: 'Matar Paneer', price: 190, desc: 'Green peas and paneer in tomato gravy.', image: 'matar-paneer.jpg' },
//   { id: 8, name: 'Veg Korma', price: 230, desc: 'Mixed vegetables in rich cashew gravy.', image: 'veg-korma.jpg' }, 
//   { id: 9, name: 'Dal Tadka', price: 140, desc: 'Yellow lentils tempered with spices.', image: 'dal-tadka.jpg' },
//   { id: 10, name: 'Veg Pulao', price: 180, desc: 'Aromatic rice with vegetables.', image: 'veg-pulao.jpg' },

// ]
// function Veg() {
//   const dispatch = useDispatch() // ✅ added

//   const addToCart = (item) => {
//     dispatch(addItem(item)) // ✅ added
//   }

//   return (
//     <>
//       <h1 style={{marginBottom: 16}}>Veg Items</h1>

//       <div style={{display: 'flex', gap: 16, overflowX: 'auto', padding: '8px 0', WebkitOverflowScrolling: 'touch'}}>
//         {vegItems.map(item => (
//           <div key={item.id} className="food-card" style={{minWidth: 220, flex: '0 0 220px', boxSizing: 'border-box'}}>
//             <div style={{width: '100%', height: 140, overflow: 'hidden', borderRadius: 6}}>
//               <img src={item.image} alt={item.name} style={{maxWidth: '100%', width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
//             </div>

//             <h3 style={{margin: '8px 0 4px 0'}}>{item.name}</h3>
//             <p style={{margin: '4px 0', color: '#555', minHeight: 36}}>{item.desc}</p>

//             <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8}}>
//               <strong>{item.price}</strong>

//               <button
//                 style={{background: '#28a745', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer'}}
//                 onClick={() => addToCart(item)} // ✅ IMPORTANT
//               >
//                 Add to cart
//               </button>
//             </div>

//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default Veg;
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './redux/CartSlice'

const vegItems = [
  { id: 1, name: 'Paneer Butter Masala', price: 220, desc: 'Creamy tomato-based curry with paneer.', image: 'OIP.jpg' },
  { id: 2, name: 'Aloo Gobi', price: 150, desc: 'Spiced potato & cauliflower.', image: 'aloo-gobi-masala-17.jpg' },
  { id: 3, name: 'Palak Paneer', price: 210, desc: 'Spinach curry with paneer.', image: 'palak.webp' },
  { id: 4, name: 'Chole Bhature', price: 180, desc: 'Spicy chickpeas with fried bread.', image: 'chole.jpg' },
  { id: 5, name: 'Veg Biryani', price: 200, desc: 'Fragrant rice with mixed vegetables.', image: 'OIP.webp' },
  { id: 6, name: 'Mysore bajji', price: 50, desc: 'nourished with fine semolina.', image: 'mysorebajji.jpg' },
  { id: 7, name: 'dosa', price: 190, desc: 'Crispy fermented crepe.', image: 'dosa.jpg' },
  { id: 8, name: 'Veg Korma', price: 230, desc: 'Mixed vegetables in rich cashew gravy.', image: 'vegkorma.webp' },
  { id: 9, name: 'Dal Tadka', price: 140, desc: 'Yellow lentils tempered with spices.', image: 'daltadka.webp' },
  { id: 10, name: 'idle', price: 40, desc: 'Soft fermented bread.', image: 'Idli.jpg' }
]

function Veg() {

  const dispatch = useDispatch()

  const addToCart = (item) => {
    dispatch(addItem(item))
  }

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Veg Items</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          padding: "20px"
        }}
      >
        {vegItems.map((item) => (
          <div
            key={item.id}
            className="food-card"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              background: "#fff"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "6px"
              }}
            />

            <h3 style={{ margin: "10px 0 5px 0" }}>{item.name}</h3>

            <p style={{ fontSize: "14px", color: "#555", minHeight: "40px" }}>
              {item.desc}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <strong>₹{item.price}</strong>

              <button
                style={{
                  background: "#28a745",
                  color: "#fff",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export default Veg
