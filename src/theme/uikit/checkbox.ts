import colors from 'theme/foundations/colors';

const baseStyle = {
  _focus: {
    bg: 'gray.100',
  },
  _unchecked: {
    bg: 'gray.100',
  },
  _checked: {
    borderColor: colors.primary[100],
    bg: colors.primary[100],
  },
  _pressed: {bg: 'gray.100'},
};

const variants: Record<string, object> = {};
const sizes = {};
const defaultProps = {};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
