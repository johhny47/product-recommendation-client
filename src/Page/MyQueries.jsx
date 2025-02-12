import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import MyQueriesCard from '../Component/MyQueriesCard';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import banner from '.././assets/sample-5.jpg'

import useAxiosSecure from '../hook/useAxiosSecure';

const MyQueries = () => {
  const axiosSucure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gridColumns, setGridColumns] = useState(3);

  useEffect(() => {
    fetchalldata();
  }, [userEmail]);

  const fetchalldata = async () => {
    const { data } = await axiosSucure.get(`/queries/search?userEmail=${userEmail}`);
    setProductData(data);
    setLoading(false);
    document.title = "Recomify | MyQueries";
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axiosSucure.delete(`/queries/${id}`);
      console.log(data);
      Swal.fire({
        title: 'Delete',
        text: 'User Deleted Successfully',
        icon: 'delete',
        confirmButtonText: 'OK',
      });
      fetchalldata();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const updateGridColumns = (columns) => {
    setGridColumns(columns);
  };

  if (loading) {
    return (
      <div className="mx-auto h-14 w-14 my-20">
        <span className="loading loading-spinner mx-auto text-error"></span>
      </div>
    );
  }

  return (
    <div className='pb-10'>
      <img src={banner} alt="Banner" />
      
      <div className="bg-gradient-to-t from-cyan-500 to-blue-500 h-40 flex items-center justify-center">
        <Link to="addqueries">
          <button className="px-6 py-2 border-2 border-transparent bg-pink-400 text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300">
            ADD QUERIES
          </button>
        </Link>
      </div>

      <div className="my-4 flex justify-center gap-2">
        <button
          className="btn btn-primary px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          onClick={() => updateGridColumns(1)}
        >
          1 Column
        </button>
        <button
          className="btn btn-primary px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          onClick={() => updateGridColumns(2)}
        >
          2 Columns
        </button>
        <button
          className="btn btn-primary px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          onClick={() => updateGridColumns(3)}
        >
          3 Columns
        </button>
      </div>

      <div className={`grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 mx-auto ${
        gridColumns === 1
          ? "grid-cols-1"
          : gridColumns === 2
          ? "grid-cols-2"
          : "grid-cols-3"
      }`}>
        {
          productData.map(data => (
            <MyQueriesCard key={data._id} handleDelete={handleDelete} data={data} />
          ))
        }
      </div>
    </div>
  );
};

export default MyQueries;
