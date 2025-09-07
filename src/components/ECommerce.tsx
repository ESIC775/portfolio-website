import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, Package, User, MapPin, Phone, Mail, Star, Filter, Search, ArrowLeft, Heart, Eye, ShoppingBag, Truck, Shield, Award, Clock, CheckCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  stock: number;
  isNew?: boolean;
  isSale?: boolean;
  features: string[];
}

interface CartItem extends Product {
  quantity: number;
}

interface ECommerceProps {
  onBack: () => void;
}

const ECommerce = ({ onBack }: ECommerceProps) => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "MacBook Pro 16\" M3 Max",
      price: 2499,
      originalPrice: 2799,
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Ordinateurs",
      rating: 4.9,
      reviews: 1247,
      description: "MacBook Pro 16 pouces avec puce M3 Max, 36 Go de RAM et SSD 1 To. Performance exceptionnelle pour les professionnels.",
      stock: 15,
      isNew: true,
      isSale: true,
      features: ["Puce M3 Max", "36 Go RAM", "SSD 1 To", "Écran Liquid Retina XDR", "Autonomie 22h"]
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 1199,
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Smartphones",
      rating: 4.8,
      reviews: 2156,
      description: "iPhone 15 Pro Max avec puce A17 Pro, appareil photo 48 Mpx et design en titane premium.",
      stock: 25,
      isNew: true,
      features: ["Puce A17 Pro", "Appareil photo 48 Mpx", "Titane", "Action Button", "USB-C"]
    },
    {
      id: 3,
      name: "AirPods Pro (2ème génération)",
      price: 249,
      originalPrice: 279,
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Audio",
      rating: 4.7,
      reviews: 3421,
      description: "AirPods Pro avec réduction de bruit active adaptative et audio spatial personnalisé.",
      stock: 50,
      isSale: true,
      features: ["Réduction de bruit", "Audio spatial", "Résistance à l'eau", "Autonomie 30h", "Charge sans fil"]
    },
    {
      id: 4,
      name: "iPad Pro 12.9\" M2",
      price: 1099,
      image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Tablettes",
      rating: 4.6,
      reviews: 892,
      description: "iPad Pro 12.9 pouces avec puce M2, écran Liquid Retina XDR et compatibilité Apple Pencil.",
      stock: 30,
      features: ["Puce M2", "Écran Liquid Retina XDR", "Apple Pencil", "Magic Keyboard", "5G"]
    },
    {
      id: 5,
      name: "Apple Watch Ultra 2",
      price: 799,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Montres",
      rating: 4.5,
      reviews: 1567,
      description: "Apple Watch Ultra 2 conçue pour les aventuriers avec boîtier en titane et autonomie exceptionnelle.",
      stock: 40,
      isNew: true,
      features: ["Boîtier titane", "Autonomie 36h", "GPS précis", "Résistance extrême", "Bouton Action"]
    },
    {
      id: 6,
      name: "Magic Keyboard pour iPad Pro",
      price: 349,
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Accessoires",
      rating: 4.4,
      reviews: 756,
      description: "Magic Keyboard avec trackpad intégré et rétroéclairage pour iPad Pro 12.9 pouces.",
      stock: 20,
      features: ["Trackpad intégré", "Rétroéclairage", "Port USB-C", "Protection complète", "Angle ajustable"]
    },
    {
      id: 7,
      name: "Mac Studio M2 Ultra",
      price: 3999,
      image: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600",
      category: "Ordinateurs",
      rating: 4.9,
      reviews: 234,
      description: "Mac Studio avec puce M2 Ultra, performance ultime pour les créatifs professionnels.",
      stock: 8,
      isNew: true,
      features: ["Puce M2 Ultra", "128 Go RAM", "SSD 2 To", "Connectivité pro", "Design compact"]
    },
    {
      id: 8,
      name: "HomePod (2ème génération)",
      price: 299,
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Audio",
      rating: 4.3,
      reviews: 445,
      description: "HomePod avec audio spatial et intégration parfaite à l'écosystème Apple.",
      stock: 35,
      features: ["Audio spatial", "Siri intégré", "HomeKit", "Son 360°", "Contrôle tactile"]
    }
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentView, setCurrentView] = useState<'products' | 'cart' | 'checkout' | 'orders' | 'product-detail'>('products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('name');
  const [orders, setOrders] = useState<any[]>([]);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const categories = ['Tous', 'Ordinateurs', 'Smartphones', 'Audio', 'Tablettes', 'Montres', 'Accessoires'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getShippingCost = () => {
    return getTotalPrice() > 500 ? 0 : 29.99;
  };

  const getFinalTotal = () => {
    return getTotalPrice() + getShippingCost();
  };

  const handleCheckout = () => {
    const newOrder = {
      id: Date.now(),
      items: [...cart],
      total: getFinalTotal(),
      date: new Date().toLocaleDateString(),
      status: 'Confirmée',
      trackingNumber: `TRK${Date.now().toString().slice(-8)}`
    };
    setOrders(prev => [...prev, newOrder]);
    setCart([]);
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setCurrentView('orders');
      setCheckoutStep(1);
    }, 3000);
  };

  const renderProductCard = (product: Product) => (
    <div key={product.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group">
      <div className="relative h-64">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              NOUVEAU
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              PROMO
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => toggleFavorite(product.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 ${
              favorites.includes(product.id)
                ? 'bg-red-500 border-red-500 text-white'
                : 'bg-white/20 border-white/30 text-white hover:bg-red-500 hover:border-red-500'
            }`}
          >
            <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
          </button>
          
          <button
            onClick={() => {
              setSelectedProduct(product);
              setCurrentView('product-detail');
            }}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">{product.rating}</span>
            <span className="text-white/70 text-xs">({product.reviews})</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-white line-clamp-2">{product.name}</h3>
          <div className="text-right">
            <div className="text-orange-300 font-bold text-lg">{product.price}€</div>
            {product.originalPrice && (
              <div className="text-orange-200/60 text-sm line-through">{product.originalPrice}€</div>
            )}
          </div>
        </div>
        
        <p className="text-orange-100 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-medium ${product.stock > 10 ? 'text-green-300' : product.stock > 0 ? 'text-yellow-300' : 'text-red-300'}`}>
              {product.stock > 0 ? `${product.stock} en stock` : 'Rupture de stock'}
            </span>
          </div>
          
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      {/* Header avec recherche et filtres */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-300" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-orange-300" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="name" className="bg-gray-800">Nom</option>
              <option value="price-low" className="bg-gray-800">Prix croissant</option>
              <option value="price-high" className="bg-gray-800">Prix décroissant</option>
              <option value="rating" className="bg-gray-800">Mieux notés</option>
            </select>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">{filteredProducts.length}</div>
          <div className="text-orange-200 text-sm">Produits</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">{favorites.length}</div>
          <div className="text-orange-200 text-sm">Favoris</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">{getTotalItems()}</div>
          <div className="text-orange-200 text-sm">Dans le panier</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">{orders.length}</div>
          <div className="text-orange-200 text-sm">Commandes</div>
        </div>
      </div>

      {/* Grille de produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => renderProductCard(product))}
      </div>
    </div>
  );

  const renderProductDetail = () => {
    if (!selectedProduct) return null;

    return (
      <div className="space-y-6">
        <button
          onClick={() => setCurrentView('products')}
          className="flex items-center space-x-2 text-orange-200 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Retour aux produits</span>
        </button>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="space-y-4">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.isNew && (
                  <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NOUVEAU
                  </span>
                )}
                {selectedProduct.isSale && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    PROMO
                  </span>
                )}
              </div>
            </div>

            {/* Détails */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{selectedProduct.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                      />
                    ))}
                    <span className="text-white ml-2">{selectedProduct.rating}</span>
                    <span className="text-orange-200">({selectedProduct.reviews} avis)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-orange-300">{selectedProduct.price}€</div>
                {selectedProduct.originalPrice && (
                  <div className="text-xl text-orange-200/60 line-through">{selectedProduct.originalPrice}€</div>
                )}
              </div>

              <p className="text-orange-100 leading-relaxed">{selectedProduct.description}</p>

              {/* Caractéristiques */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Caractéristiques principales</h3>
                <div className="grid grid-cols-1 gap-2">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-orange-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stock */}
              <div className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-orange-300" />
                <span className={`font-medium ${selectedProduct.stock > 10 ? 'text-green-300' : selectedProduct.stock > 0 ? 'text-yellow-300' : 'text-red-300'}`}>
                  {selectedProduct.stock > 0 ? `${selectedProduct.stock} en stock` : 'Rupture de stock'}
                </span>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button
                  onClick={() => addToCart(selectedProduct)}
                  disabled={selectedProduct.stock === 0}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Ajouter au panier</span>
                </button>
                
                <button
                  onClick={() => toggleFavorite(selectedProduct.id)}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    favorites.includes(selectedProduct.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/10 border border-white/20 text-white hover:bg-red-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(selectedProduct.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCart = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Mon Panier</h3>
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-orange-300" />
            <span className="text-orange-300 font-semibold">{getTotalItems()} articles</span>
          </div>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-orange-300 mx-auto mb-4" />
            <p className="text-orange-200 text-lg mb-4">Votre panier est vide</p>
            <button
              onClick={() => setCurrentView('products')}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Découvrir nos produits
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Articles */}
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center space-x-4 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{item.name}</h4>
                    <p className="text-orange-200 text-sm mb-2">{item.category}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                        />
                      ))}
                      <span className="text-orange-200 text-xs ml-1">{item.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Minus className="h-4 w-4 text-white" />
                    </button>
                    
                    <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Plus className="h-4 w-4 text-white" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">{(item.price * item.quantity).toFixed(2)}€</div>
                    <div className="text-orange-200 text-sm">{item.price}€ / unité</div>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center hover:bg-red-500/30 transition-all duration-300 group"
                  >
                    <Trash2 className="h-5 w-5 text-red-400 group-hover:text-red-300" />
                  </button>
                </div>
              ))}
            </div>
            
            {/* Résumé */}
            <div className="bg-white/5 rounded-xl p-6 space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Résumé de la commande</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-orange-200">Sous-total ({getTotalItems()} articles)</span>
                  <span className="text-white font-semibold">{getTotalPrice().toFixed(2)}€</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-orange-300" />
                    <span className="text-orange-200">Livraison</span>
                    {getTotalPrice() > 500 && (
                      <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">GRATUITE</span>
                    )}
                  </div>
                  <span className="text-white font-semibold">
                    {getShippingCost() === 0 ? 'Gratuite' : `${getShippingCost().toFixed(2)}€`}
                  </span>
                </div>
                
                {getTotalPrice() < 500 && (
                  <div className="text-orange-300 text-sm">
                    Ajoutez {(500 - getTotalPrice()).toFixed(2)}€ pour la livraison gratuite
                  </div>
                )}
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-orange-300">{getFinalTotal().toFixed(2)}€</span>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setCurrentView('products')}
                  className="flex-1 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Continuer les achats
                </button>
                <button
                  onClick={() => setCurrentView('checkout')}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Commander</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderCheckout = () => (
    <div className="space-y-6">
      {orderSuccess ? (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Commande confirmée !</h3>
          <p className="text-orange-200 mb-6">
            Merci pour votre achat. Vous allez être redirigé vers vos commandes...
          </p>
          <div className="animate-spin w-8 h-8 border-4 border-orange-300 border-t-transparent rounded-full mx-auto"></div>
        </div>
      ) : (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Finaliser la commande</h3>
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${checkoutStep >= 1 ? 'bg-orange-500 text-white' : 'bg-white/20 text-orange-200'}`}>1</div>
              <div className={`w-16 h-1 ${checkoutStep >= 2 ? 'bg-orange-500' : 'bg-white/20'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${checkoutStep >= 2 ? 'bg-orange-500 text-white' : 'bg-white/20 text-orange-200'}`}>2</div>
              <div className={`w-16 h-1 ${checkoutStep >= 3 ? 'bg-orange-500' : 'bg-white/20'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${checkoutStep >= 3 ? 'bg-orange-500 text-white' : 'bg-white/20 text-orange-200'}`}>3</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulaire */}
            <div className="space-y-6">
              {checkoutStep === 1 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <User className="h-5 w-5 text-orange-300" />
                    <span>Informations personnelles</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-orange-200 mb-2">Prénom</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-orange-200 mb-2">Nom</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-orange-200 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-300" />
                      <input
                        type="email"
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-orange-200 mb-2">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-300" />
                      <input
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                  </div>
                </div>
              )}

              {checkoutStep === 2 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-orange-300" />
                    <span>Adresse de livraison</span>
                  </h4>
                  
                  <div>
                    <label className="block text-orange-200 mb-2">Adresse</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="123 Rue de la Paix"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-orange-200 mb-2">Code postal</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="75001"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-orange-200 mb-2">Ville</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Paris"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-orange-200 mb-2">Pays</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                      <option value="FR" className="bg-gray-800">France</option>
                      <option value="BE" className="bg-gray-800">Belgique</option>
                      <option value="CH" className="bg-gray-800">Suisse</option>
                    </select>
                  </div>
                </div>
              )}

              {checkoutStep === 3 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-orange-300" />
                    <span>Paiement</span>
                  </h4>
                  
                  <div className="bg-white/5 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Shield className="h-5 w-5 text-green-400" />
                      <span className="text-white font-medium">Paiement sécurisé avec Stripe</span>
                    </div>
                    <p className="text-orange-200 text-sm">
                      Vos informations de paiement sont protégées par un cryptage SSL de niveau bancaire.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-orange-200 mb-2">Numéro de carte</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-orange-200 mb-2">Date d'expiration</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div>
                      <label className="block text-orange-200 mb-2">CVV</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Boutons de navigation */}
              <div className="flex space-x-4 pt-6">
                {checkoutStep > 1 && (
                  <button
                    onClick={() => setCheckoutStep(checkoutStep - 1)}
                    className="flex-1 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Précédent
                  </button>
                )}
                
                {checkoutStep < 3 ? (
                  <button
                    onClick={() => setCheckoutStep(checkoutStep + 1)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
                  >
                    Suivant
                  </button>
                ) : (
                  <button
                    onClick={handleCheckout}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Payer {getFinalTotal().toFixed(2)}€</span>
                  </button>
                )}
                
                <button
                  onClick={() => setCurrentView('cart')}
                  className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Retour au panier
                </button>
              </div>
            </div>
            
            {/* Résumé de commande */}
            <div className="bg-white/5 rounded-xl p-6 h-fit">
              <h4 className="text-lg font-semibold text-white mb-4">Résumé de la commande</h4>
              
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{item.name}</div>
                      <div className="text-orange-200 text-xs">Quantité: {item.quantity}</div>
                    </div>
                    <div className="text-white font-semibold">{(item.price * item.quantity).toFixed(2)}€</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-orange-200">Sous-total</span>
                  <span className="text-white">{getTotalPrice().toFixed(2)}€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-200">Livraison</span>
                  <span className="text-white">{getShippingCost() === 0 ? 'Gratuite' : `${getShippingCost().toFixed(2)}€`}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold border-t border-white/20 pt-2">
                  <span className="text-white">Total</span>
                  <span className="text-orange-300">{getFinalTotal().toFixed(2)}€</span>
                </div>
              </div>

              {/* Garanties */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-orange-200">
                  <Truck className="h-4 w-4 text-green-400" />
                  <span>Livraison gratuite dès 500€</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-orange-200">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span>Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-orange-200">
                  <Award className="h-4 w-4 text-purple-400" />
                  <span>Garantie 2 ans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
          <Package className="h-6 w-6 text-orange-300" />
          <span>Mes Commandes</span>
        </h3>
        
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-orange-300 mx-auto mb-4" />
            <p className="text-orange-200 text-lg mb-4">Aucune commande pour le moment</p>
            <button
              onClick={() => setCurrentView('products')}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Commencer mes achats
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-white font-semibold text-lg">Commande #{order.id}</h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-2 text-orange-200 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{order.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-orange-200 text-sm">
                        <Truck className="h-4 w-4" />
                        <span>Suivi: {order.trackingNumber}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                      {order.status}
                    </span>
                    <div className="text-right">
                      <div className="text-white font-bold text-lg">{order.total.toFixed(2)}€</div>
                      <div className="text-orange-200 text-sm">{order.items.length} articles</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {order.items.map((item: CartItem) => (
                    <div key={item.id} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-medium line-clamp-1">{item.name}</div>
                        <div className="text-orange-200 text-xs">Quantité: {item.quantity}</div>
                        <div className="text-orange-300 text-sm font-semibold">{(item.price * item.quantity).toFixed(2)}€</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-orange-200 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour aux projets</span>
          </button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Apple <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Store</span>
          </h1>
          
          <div className="flex items-center space-x-2">
            <span className="text-orange-200 text-sm">Powered by</span>
            <div className="flex items-center space-x-1">
              <span className="text-blue-400 font-semibold">React</span>
              <span className="text-orange-200">•</span>
              <span className="text-green-400 font-semibold">Node.js</span>
              <span className="text-orange-200">•</span>
              <span className="text-purple-400 font-semibold">Stripe</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setCurrentView('products')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                currentView === 'products'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/10 text-orange-200 hover:bg-white/20'
              }`}
            >
              <Package className="h-5 w-5" />
              <span>Produits</span>
            </button>
            
            <button
              onClick={() => setCurrentView('cart')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 relative ${
                currentView === 'cart'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/10 text-orange-200 hover:bg-white/20'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Panier</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setCurrentView('orders')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                currentView === 'orders'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/10 text-orange-200 hover:bg-white/20'
              }`}
            >
              <Package className="h-5 w-5" />
              <span>Commandes</span>
              {orders.length > 0 && (
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                  {orders.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Contenu */}
        {currentView === 'products' && renderProducts()}
        {currentView === 'product-detail' && renderProductDetail()}
        {currentView === 'cart' && renderCart()}
        {currentView === 'checkout' && renderCheckout()}
        {currentView === 'orders' && renderOrders()}
      </div>
    </section>
  );
};

export default ECommerce;