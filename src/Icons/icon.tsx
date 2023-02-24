import React from 'react';
import IconCart from './cart';
import IconClose from './close';
import IconDelete from './delete';
import IconMenu from './menu';
import IconMinus from './minus';
import IconNext from './next';
import IconPlus from './plus';
import IconPrevious from './previous';

type IconProps = {
  name: string;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case 'cart':
      return <IconCart />;
    case 'close':
      return <IconClose />;
    case 'delete':
      return <IconDelete />;
    case 'menu':
      return <IconMenu />;
    case 'minus':
      return <IconMinus />;
    case 'next':
      return <IconNext />;
    case 'plus':
      return <IconPlus />;
    case 'previous':
      return <IconPrevious />;
    default:
      return <IconCart />;
  }
};
export default Icon;
