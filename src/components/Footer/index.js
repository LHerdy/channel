import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.com.br/">
        <img src="https://" alt="Logo" />
      </a>
      <p>
        Copyright 2020
        {' '}
        <a href="https://www.com.br/">
          Imersão React
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
