import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import posts from './Blogdata'


const Blog = ({}) => {
   
  return (
    <div className="bg-gray-100 min-h-screen -mt-10 p-4">
        <h1 className='text-center text-xl  md:text-4xl font-extrabold pt-10'>Recommendation System</h1>
        <p className='text-center text-xs  md:text-lg mt-4 text-gray-400'>A recommendation system or recommender system is a class of machine learning that uses data to help predict, narrow down, <br />and find what people are looking for among an exponentially growing number of options.</p>
      <div className="container mx-auto py-16">
        {posts.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col md:flex-row items-center gap-8 mb-16"
          >
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div className="md:w-1/2 text-gray-800">
              <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
