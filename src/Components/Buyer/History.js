// Import the History component
import History from './History';

// ... (other imports and code)

const BuyerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [history, setHistory] = useState([]);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  useEffect(() => {
    // Set initial products, artisans, and order history
    setProducts(productsData);
    setArtisans(artisansData);
    setHistory(orderHistoryData);
  }, []);

  const handleViewAllProducts = () => {
    // Implement logic for viewing all products
    console.log('Viewing all products:', products);
  };

  const handleViewAllArtisans = () => {
    // Implement logic for viewing all artisans
    console.log('Viewing all artisans:', artisans);
  };

  return (
    <div>
      <h2>{buyerData.name}! Welcome to Your Dashboard as a Buyer!</h2>
      <ProductSearch />
      <div>
        <button onClick={() => handleViewAllProducts()}>View Products</button>
        <button onClick={() => handleViewAllArtisans()}>View Artisans</button>
      </div>

      <ProductListing products={products} />
      
      {/* Render the History component with order history data */}
      <History orderHistory={history} onOrderSelect={(order) => console.log('Selected order:', order)} />

      {/* Render the BuyerProfile component if updating is true */}
      {isUpdatingProfile && (
        <BuyerProfile buyer={buyerData} onUpdate={() => {}} onDelete={() => {}} />
      )}
    </div>
  );
};

export default BuyerDashboard;