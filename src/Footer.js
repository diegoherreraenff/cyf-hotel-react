import React from "react";

const Footer = () => {
  const datos = [
    "123 Fake Street, London, E1 4UD ",
    " hello@fakehotel.com ",
    " 0123 456789 "
  ];
  return (
    <footer className="blockquote-footer text-black">
      <ul className="FooterUl">
        {datos.map(element => {
          return <li>{element + " "}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
