import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '10px 0' }}>
  <p className='flex justify-center items-center'>
    &#169; {currentYear}, Made with  
    <img className="emoji mx-1" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"/> by 
    <a role="link" href='https://sijan-dahal-portfolio.vercel.app/' target='_blank' class="relative underline decoration-wavy underline-offset-4 transition-colors duration-300 mx-1 hover:text-[#124E66] hover:underline">Sijan Dahal</a>
   
  </p>
</footer>

  );
};

