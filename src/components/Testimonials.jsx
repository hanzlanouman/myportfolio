// React component with a twist of TailwindCSS for that delightful testimonial spread

import { useInView } from 'react-intersection-observer';
const Testimonials = () => {
  // Our testimonial cards, a trio of delights

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const testimonials = [
    {
      id: 1,
      quote:
        'This service turned my side-hustle into a full-blown circus of success!',
      author: 'Pat C.',
      occupation: 'Juggler of Jobs',
    },
    {
      id: 2,
      quote:
        'The guidance I received was like a GPS for my career path. Spot on!',
      author: 'Sam S.',
      occupation: 'Explorer of Opportunities',
    },
    {
      id: 3,
      quote:
        "It's like my professional life was given a jetpack with these strategies!",
      author: 'Alex A.',
      occupation: 'Rocketeer of Revenues',
    },
  ];

  return (
    <div className='testi-toasties flex flex-col justify-center items-center'>
      <div ref={ref}>
        <h2 className='text-4xl font-bold text-center mt-10'>
          Testimonials
          <div
            className={`h-1 bg-white transition-all duration-700 ${
              inView ? 'w-[rem] md:w-[5em]' : 'w-0'
            } mx-auto mt-2`}
            style={{ transitionDelay: '300ms' }}
          />
        </h2>
      </div>
      <div className='testi-tray grid grid-cols-1 md:grid-cols-3 gap-9 max-w-[97em] mx-auto p-8'>
        {testimonials.map((testi) => (
          <div
            key={testi.id}
            className='testi-card bg-purple text-white rounded-lg p-6 space-y-8'
          >
            <p className='testi-text text-lg'>{testi.quote}</p>
            <div className='testi-teller flex justify-between items-center'>
              <h5 className='testi-author text-sm font-bold'>{testi.author}</h5>
              <p className='testi-occupation text-xs italic'>
                {testi.occupation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
