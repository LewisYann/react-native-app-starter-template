const baseStyle = {};

const variants: Record<string, object> = {
  default: {
    borderBottomWidth: 1,
    borderBottomColor: 'black.100',
    borderRadius: 0,
    fontSize: 'md',
    color: 'red',
  },
  search: {
    borderWidth: 0,
    backgroundColor: 'gray.100',
    borderRadius: '20px',
    height: '35px',
    color: 'darkGreen.100',
  },
  checkout: {
    borderWidth: 1,
    backgroundColor: 'gray.100',
    borderRadius: '3px',
    height: '35px',
    borderColor: 'gray.400',
    color: 'gray.400',
  },
};
const sizes = {};
const defaultProps = {
  variant: 'default',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
