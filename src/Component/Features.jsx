import { FaCreditCard, FaGift, FaStar } from "react-icons/fa";
const Features = () => {
    return (
        <div>
           
      <section className="features py-10 bg-gray-50 dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto px-2 text-center">
          <h2 className="text-3xl font-semibold mb-10">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-item bg-white shadow-lg p-6 rounded-lg">
              <FaStar className="text-4xl mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Top Ratings</h3>
              <p className="text-gray-600">Get the best recommendations based on ratings.</p>
            </div>
            <div className="feature-item bg-white shadow-lg p-6 rounded-lg">
              <FaGift className="text-4xl mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Exclusive Offers</h3>
              <p className="text-gray-600">Access exclusive deals and promotions.</p>
            </div>
            <div className="feature-item bg-white shadow-lg p-6 rounded-lg">
              <FaCreditCard className="text-4xl mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Pay safely with our encrypted payment systems.</p>
            </div>
          </div>
        </div>
      </section> 
        </div>
    );
};

export default Features;