import { useState } from 'react';
import { FaCoffee, FaGlassMartiniAlt, FaBirthdayCake, FaCookieBite } from 'react-icons/fa';
import './Menu.css';

const menuData = {
  'Hot Drinks': [
    { name: 'Espresso', description: 'A single shot of intense, rich coffee.', price: 3.00, icon: '☕' },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and a thick layer of foam.', price: 4.50, icon: '☕' },
    { name: 'Latte', description: 'Espresso with a large amount of steamed milk.', price: 4.50, icon: '☕' },
    { name: 'Hot Chocolate', description: 'Rich, creamy chocolate topped with whipped cream.', price: 4.00, icon: '🍫' },
  ],
  'Cold Drinks': [
    { name: 'Iced Coffee', description: 'Freshly brewed coffee, chilled and served over ice.', price: 4.00, icon: '🥤' },
    { name: 'Iced Latte', description: 'Espresso and cold milk served over ice.', price: 5.00, icon: '🥤' },
    { name: 'Fresh Lemonade', description: 'Sweet and tangy, made with fresh-squeezed lemons.', price: 3.50, icon: '🍋' },
    { name: 'Fruit Smoothie', description: 'A blend of fresh fruits, yogurt, and honey.', price: 6.00, icon: '🍓' },
  ],
  'Cakes & Slices': [
    { name: 'Chocolate Fudge Cake', description: 'A rich, decadent slice of chocolate heaven.', price: 6.50, icon: '🍰' },
    { name: 'New York Cheesecake', description: 'Creamy, classic cheesecake with a graham cracker crust.', price: 7.00, icon: '🍰' },
    { name: 'Red Velvet Slice', description: 'A moist slice of red velvet cake with cream cheese frosting.', price: 6.00, icon: '🍰' },
    { name: 'Carrot Cake', description: 'Spiced carrot cake with walnuts and a cream cheese topping.', price: 6.50, icon: '🥕' },
  ],
  'Pastries & Cookies': [
    { name: 'Almond Croissant', description: 'Flaky croissant filled with almond paste and topped with sliced almonds.', price: 4.50, icon: '🥐' },
    { name: 'Pain au Chocolat', description: 'A buttery croissant filled with dark chocolate.', price: 4.00, icon: '🥐' },
    { name: 'Chocolate Chip Cookie', description: 'A classic, soft-baked cookie with milk chocolate chips.', price: 2.50, icon: '🍪' },
    { name: 'Oatmeal Raisin Cookie', description: 'A chewy cookie with oats, raisins, and a hint of cinnamon.', price: 2.50, icon: '🍪' },
  ]
};

const categoryIcons = {
  'Hot Drinks': <FaCoffee />,
  'Cold Drinks': <FaGlassMartiniAlt />,
  'Cakes & Slices': <FaBirthdayCake />,
  'Pastries & Cookies': <FaCookieBite />,
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Hot Drinks');

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Explore our selection of handcrafted drinks, cakes, and pastries.</p>
        </div>
      </div>

      <div className="container">
        <div className="menu-tabs">
          {Object.keys(menuData).map(category => (
            <button
              key={category}
              className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {categoryIcons[category]}
              <span>{category}</span>
            </button>
          ))}
        </div>

        <div className="menu-content">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="item-icon">{item.icon}</div>
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
              </div>
              <div className="item-price">${item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu; 