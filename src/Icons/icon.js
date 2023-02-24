import { IconCart, IconClose } from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'cart':
      return <IconCart />;
    case 'close':
      return <IconClose />;
    default:
      return <IconCart />;
  }
};

export default Icon;
