import { useState, useEffect } from 'react';
import { FaBirthdayCake, FaStar, FaHeart, FaUtensils, FaTruck, FaClock, FaArrowRight, FaPlay, FaQuoteLeft, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-slide for testimonials
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wedding Client",
      text: "The wedding cake was absolutely perfect! Sweet Dreams Bakery made our special day even more magical with their incredible attention to detail.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Regular Customer",
      text: "I've been coming here for years. The quality is consistently amazing and the staff is always friendly. Best bakery in town!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Birthday Party Host",
      text: "The custom birthday cake for my daughter's party was a huge hit! Everyone loved the design and taste. Highly recommended!",
      rating: 5
    }
  ];

  const featuredProducts = [
    {
      name: "Chocolate Dream Cake",
      price: "$45",
      image: "🍰",
      category: "Cakes"
    },
    {
      name: "Vanilla Cupcakes",
      price: "$24",
      image: "🧁",
      category: "Cupcakes"
    },
    {
      name: "Croissants",
      price: "$18",
      image: "🥐",
      category: "Pastries"
    },
    {
      name: "Birthday Special",
      price: "$65",
      image: "🎂",
      category: "Custom"
    }
  ];

  const features = [
    {
      icon: <FaBirthdayCake />,
      title: "Custom Cakes",
      description: "Personalized designs for every special occasion, made exactly how you envision them.",
      color: "#d4a574"
    },
    {
      icon: <FaStar />,
      title: "Fresh Daily",
      description: "All our products are baked fresh every morning using premium ingredients.",
      color: "#ffd700"
    },
    {
      icon: <FaHeart />,
      title: "Made with Love",
      description: "Every creation is crafted with passion and attention to detail.",
      color: "#ff6b6b"
    },
    {
      icon: <FaUtensils />,
      title: "Quality Ingredients",
      description: "We use only the finest, locally-sourced ingredients for the best taste.",
      color: "#4caf50"
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service to bring fresh treats to your door.",
      color: "#2196f3"
    },
    {
      icon: <FaClock />,
      title: "Extended Hours",
      description: "Open early and late to accommodate your busy schedule.",
      color: "#9c27b0"
    }
  ];

  return (
    <div className={`home-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-cake">🍰</div>
            <div className="floating-cupcake">🧁</div>
            <div className="floating-cookie">🍪</div>
            <div className="floating-star">⭐</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome to A B Bakery
              </h1>
              <p className="hero-subtitle">
                Fresh baked goods made with love and tradition
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Unique Recipes</span>
                </div>
              </div>
              <div className="hero-buttons">
                <a href="/products" className="btn btn-primary">
                  Order Now <FaArrowRight />
                </a>
                <a href="/menu" className="btn btn-secondary">
                  View Menu
                </a>
                <button className="btn btn-play">
                  <FaPlay /> Watch Video
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="cake-showcase">
                <div className="main-cake">🎂</div>
                <div className="floating-items">
                  <div className="floating-item">🍰</div>
                  <div className="floating-item">🧁</div>
                  <div className="floating-item">🍪</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Story</h2>
              <p className="about-description">
                Founded in 1995, Sweet Dreams Bakery began as a small family kitchen with a big dream: 
                to create the most delicious and beautiful baked goods that would bring joy to every celebration.
              </p>
              <p className="about-description">
                Today, we're proud to serve our community with over 25 years of experience, crafting 
                everything from simple cookies to elaborate wedding cakes. Every item is made with 
                the same love and attention to detail that started it all.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <FaHeart className="feature-icon" />
                  <span>Family Owned</span>
                </div>
                <div className="about-feature">
                  <FaStar className="feature-icon" />
                  <span>Premium Quality</span>
                </div>
                <div className="about-feature">
                  <FaClock className="feature-icon" />
                  <span>Fresh Daily</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-grid">
                <div className="grid-item">🍰</div>
                <div className="grid-item">🧁</div>
                <div className="grid-item">🥐</div>
                <div className="grid-item">🍪</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">Why Choose Sweet Dreams?</h2>
          <p className="section-subtitle">
            We're committed to excellence in every aspect of our bakery, from ingredients to service.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-wrapper" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Discover our most popular creations, made fresh daily with premium ingredients.
          </p>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                  <button className="btn btn-small">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/products" className="btn btn-primary">
              View All Products <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-container">
            <div className="testimonials-slider">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}
                >
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section section">
        <div className="container">
          <h2 className="section-title">Follow Our Sweet Journey</h2>
          <p className="section-subtitle">
            Get inspired by our latest creations and behind-the-scenes moments.
          </p>
          <div className="social-grid">
            <div className="social-card">
              <FaInstagram className="social-icon" />
              <h3>Instagram</h3>
              <p>Daily inspiration and fresh creations</p>
              <a href="#" className="social-link">Follow @sweetdreamsbakery</a>
            </div>
            <div className="social-card">
              <FaFacebook className="social-icon" />
              <h3>Facebook</h3>
              <p>Community updates and special offers</p>
              <a href="#" className="social-link">Like our page</a>
            </div>
            <div className="social-card">
              <FaTwitter className="social-icon" />
              <h3>Twitter</h3>
              <p>Quick updates and baking tips</p>
              <a href="#" className="social-link">Follow us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Taste the Difference?</h2>
            <p>Order now and experience the magic of Sweet Dreams Bakery</p>
            <div className="cta-buttons">
              <a href="/products" className="btn btn-primary">
                Start Ordering <FaArrowRight />
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 