import {
  IconCart,
  IconClose,
  IconDelete,
  IconMenu,
  IconMinus,
  IconNext,
  IconPlus,
  IconPrevious,
} from './index';

const Icon = ({ name }) => {
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
