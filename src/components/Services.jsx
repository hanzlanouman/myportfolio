// React Component with TailwindCSS
const Services = () => {
  return (
    <div className='bg-bgDark text-white py-10'>
      <div className='text-center text-4xl font-bold mb-10 '>Services</div>
      <div className='flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <div
            key={index}
            className='group w-96 h-96 bg-purple rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 hover:z-10'
          >
            <div className='text-center'>
              <div className='text-xl font-semibold font-'>{service.title}</div>
              <img
                src={service.icon}
                alt={service.title}
                className='w-20 h-20 mt-4 mb-2'
              />
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const services = [
  {
    title: 'App Development',
    icon: '/public/logo192.png', // Replace with your icon path
    description: 'Short description for App Development',
  },
  {
    title: 'Web Development',
    icon: 'logo192.png', // Replace with your icon path
    description: 'Short description for Web Development',
  },
  {
    title: 'Web Content Writing',
    icon: '/cuteket.jpg', // Replace with your icon path
    description: 'Short description for Web Content Writing',
  },
];

export default Services;
