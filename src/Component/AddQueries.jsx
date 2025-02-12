import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";
import bgimg from "../assets/addpagebg.png";

const AddQueries = () => {
  const axiosSucure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleAddEquipment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const productImageURL = form.ImageURL.value;
    const title = form.title.value;
    const BoycottingReason = form.BoycottingReason.value;

    const User = {
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
    };

    const timestamp = Date.now();
    const date = new Date(timestamp);
    const currentDate = date.toLocaleString();
    const recommendationCount = 0;

    const allData = { name, brand, productImageURL, title, BoycottingReason, User, currentDate, recommendationCount };

    try {
      const { data } = await axiosSucure.post(`/add-queries`, allData);
      console.log(data);
      Swal.fire({
        title: 'Added',
        text: 'Data Added Successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'There was an issue adding the data',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  useEffect(() => {
    document.title = "Recomify | AddQueries";
  }, []);

  return (
    <div className="w-full min-h-screen bg-cover bg-center mt-10" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="w-full bg-opacity-20 bg-black py-16">
       
        <div className="w-11/12 md:w-7/12 mx-auto bg-transparent text-white font-bold p-8 rounded-lg shadow-lg">
        <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl">ADD PRODUCT</h1>
          <form className="w-full pt-5" onSubmit={handleAddEquipment}>
            {/* Row 1 */}
            <div className="md:flex justify-between space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-5/12">
                <label className="form-control w-full">
                  <span className="label-text text-white">Product Name</span>
                  <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                </label>
              </div>
              <div className="w-full md:w-5/12">
                <label className="form-control w-full">
                  <span className="label-text text-white">Product Brand</span>
                  <input type="text" name="brand" placeholder="Product Brand" className="input input-bordered w-full" />
                </label>
              </div>
            </div>

            {/* Row 2 */}
            <div className="md:flex justify-between space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <div className="w-full md:w-5/12">
                <label className="form-control w-full">
                  <span className="label-text text-white ">Image URL</span>
                  <input type="text" name="ImageURL" placeholder="Image URL" className="input input-bordered w-full" />
                </label>
              </div>
              <div className="w-full md:w-5/12">
                <label className="form-control w-full">
                  <span className="label-text text-white">Query Title</span>
                  <input type="text" name="title" placeholder="Query Title" className="input input-bordered w-full" />
                </label>
              </div>
            </div>

            {/* Row 3 */}
            <div className="mt-4">
              <label className="form-control w-full">
                <span className="label-text text-white">Boycotting Reason Details</span>
                <input type="text" name="BoycottingReason" placeholder="Boycotting Reason Details" className="input input-bordered w-full" />
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <input type="submit" value="Add" className="btn btn-block bg-blue-500 text-white hover:bg-blue-600" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQueries;
