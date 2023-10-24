import colors from 'theme/foundations/colors';

const baseStyle = {};

const variants: Record<string, object> = {
  primary: {
    background: 'black.100',
    _text: {color: 'primary.100'},
    mx: 2,
    borderRadius: 8,
  },
  rounded: {
    background: 'black.100',
    _text: {color: 'primary.100'},
    mx: 2,
    borderRadius: 60,
  },
  outline: {
    background: 'transparent',
    borderWidth: '1px',
    borderColor: colors.black[100],
    mx: 2,
    borderRadius: 60,
    _text: {color: colors.black[100]},
  },
};
const sizes = {};
const defaultProps = {
  variant: 'primary',
  _text: {fontSize: 'md'},
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
