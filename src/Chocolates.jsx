import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/CartSlice';

const chocolateItems = [
  { id: 1, name: 'Dark Chocolate', price: '150', desc: 'Rich and intense dark chocolate.', image: './darkchocolate.webp' },
  { id: 2, name: '5-Star Chocolate', price: '120', desc: 'Delicious star-shaped chocolate.', image: './starchocolate.webp' },
  { id: 3, name: 'Milky Bar', price: '100', desc: 'Creamy and smooth white chocolate.', image: './milkybar.jpg' },
  { id: 4, name: 'Kisme Bar', price: '80', desc: 'Chewy caramel chocolate bar.', image: './kismeimage.jpg' },
  { id: 5, name: 'Dairy Milk', price: '140', desc: 'Classic milk chocolate loved by all.', image: './dairy milk.jpg' },
];

function Chocolates() {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {/* Inline CSS for hover and animations */}
      <style>{`
        .chocolates-container {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding: 8px 0;
          scroll-behavior: smooth;
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .food-card {
          min-width: 220px;
          flex: 0 0 220px;
          box-sizing: border-box;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          animation: fadeUp 0.5s ease forwards;
        }

        .food-card:nth-child(1) { animation-delay: 0s; }
        .food-card:nth-child(2) { animation-delay: 0.1s; }
        .food-card:nth-child(3) { animation-delay: 0.2s; }
        .food-card:nth-child(4) { animation-delay: 0.3s; }
        .food-card:nth-child(5) { animation-delay: 0.4s; }

        .food-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .food-card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 6px;
          transition: transform 0.3s ease;
        }

        .food-card:hover img {
          transform: scale(1.1);
        }

        .food-card h3 {
          margin: 8px 0 4px 0;
          font-size: 18px;
        }

        .food-card p {
          margin: 4px 0;
          color: #555;
          min-height: 36px;
        }

        .food-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 8px;
        }

        .food-card-footer button {
          background: #28a745;
          color: #fff;
          border: none;
          padding: 6px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .food-card-footer button:hover {
          transform: scale(1.05);
          background: #218838;
        }
      `}</style>

      <h1 style={{ marginBottom: 16 }}>Chocolates</h1>

      <div className="chocolates-container">
        {chocolateItems.map(item => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>{item.desc}</p>

            <div className="food-card-footer">
              <strong>₹{item.price}</strong>
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Chocolates;