import React from 'react';

type Link = {
  href: string;
  label: string;
};

interface FooterColumnProps {
  title: string;
  links: Link[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-base text-gray-600 font-semibold mt-35 ">{title}</h4>
      <ul className="text-base font-bold text-black-500 mt-5 flex flex-col gap-5 font-stretch-expandedoppins">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;