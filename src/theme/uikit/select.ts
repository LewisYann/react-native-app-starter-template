const baseStyle = {};

const variants: Record<string, object> = {
  default: {
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
