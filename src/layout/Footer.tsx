import FooterColumn from './FooterColumn';

const Footer = () => {
  const linkData = [
    {
      title: 'Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Payment Options', href: '#' },
        { label: 'Returns', href: '#' },
        { label: 'Privacy Policies', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white px-6 text-gray-800 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-4xl font-bold  mt-50">Funiro.</h2>
          <p className="text-sm text-gray-600 mt-10">
            400 University Drive Suite 200<br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

        {linkData.map((section, index) => (
          <FooterColumn key={index} title={section.title} links={section.links} />
        ))}

        <div>
          <h4 className="text-lg mt-50 font-semibold">Newsletter</h4>
          <form className="flex mt-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-3 py-2 mt-10 border border-gray-300 rounded-l w-full text-sm"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 mt-10 text-sm rounded-r hover:bg-gray-800"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="text-base font-poppins font-bold text-left text-gray-500 mt-20 border-t ml-30">
        © 2025 funiro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

