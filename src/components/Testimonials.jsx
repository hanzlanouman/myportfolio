import React from 'react';
import { FaTwitter } from 'react-icons/fa';
const testimonialsData = [
  {
    id: 1,
    name: 'Mukhtiar Zamin',
    handle: '@mukhtiarzamin',
    avatar: 'https://source.unsplash.com/random/128x128?sig=1',
    testimonial:
      'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    hashtag: '#gettingtheidea',
  },
  {
    id: 2,
    name: 'Hanzla',
    handle: '@hanzla',
    avatar: 'https://source.unsplash.com/random/128x128?sig=1',
    testimonial:
      'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    hashtag: '#YesorNo',
  },
  {
    id: 3,
    name: 'Arfah Ali',
    handle: '@arfahali',
    avatar: 'https://source.unsplash.com/random/128x128?sig=1',
    testimonial:
      'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    hashtag: '#right',
  },
  // ... Add more testimonials as needed
];

const TestimonialCard = ({ name, handle, avatar, testimonial, hashtag }) => {
  return (
    <div className='flex flex-col items-left p-6 bg-[#111] text-white rounded-lg shadow-lg leading-7'>
      {/* Make it so that the image the name and handle are on the same row, like twitter tweet is  */}
      <div className='flex items-center'>
        <img
          className='rounded-full w-16 h-16 object-cover'
          src={avatar}
          alt={name}
        />
        <div className='ml-4'>
          <p className='font-semibold'>{name}</p>
          <p className='text-sm text-gray-400'>{handle}</p>
        </div>
        {/* Add Twitter Icon that sticks to the right and size slightly bigger */}
        <FaTwitter
          className='ml-auto text-blue-400'
          style={{
            fontSize: '1.7rem',
          }}
        />
      </div>

      <p className='mt-4 text-gray-300'>{testimonial}</p>
      <p className='text-blue-400'>{hashtag}</p>
      <div className='flex justify-end w-full pt-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-blue-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        ></svg>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className='py-12'>
      <div className='container mx-auto px-20'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-semibold text-white'>
            What our customers say
          </h2>
          <p className='text-gray-400 mt-4'>They have a lot to say...</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
