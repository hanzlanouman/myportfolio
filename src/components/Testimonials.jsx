import React from 'react';
import { FaHeart, FaRegComment } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO at ExampleCorp',
      testimonial: 'This product really helped me increase my productivity!',
      image: 'https://source.unsplash.com/random/1600x900?portrait',
      likes: 150,
      likedBy: 'Jane Smith',
    },

    {
      id: 2,
      name: 'Jane Smith',
      position: 'CTO at ExampleCorp',
      testimonial:
        'I love this product! It helped me increase my productivity!',
      image: 'https://source.unsplash.com/random/1600x900?portrait',
      likes: 150,
      likedBy: 'John Doe',
    },
  ];

  return (
    <section className='bg-[#121212] text-white py-10'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-6'>Testimonials</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-gray-800 rounded-lg overflow-hidden shadow-lg relative'
            >
              <img className='w-full' src={testimonial.image} alt='Portrait' />
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{testimonial.name}</h3>
                <p className='text-gray-400'>{testimonial.position}</p>
                <p className='text-gray-300 text-base mt-4'>
                  {testimonial.testimonial}
                </p>
              </div>
              <div className='p-6 flex items-center text-gray-400 text-sm border-t border-gray-700'>
                <FaHeart className='text-red-500 mr-1' />
                <span>
                  Liked by {testimonial.likedBy} and {testimonial.likes} others
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
