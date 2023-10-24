const baseStyle = {};

const variants: Record<string, object> = {
  title: {
    fontSize: '2xl',
    fontWeight: 'bold',
    color: 'primary.100',
    lineHeight: 'xl',
  },
  title2: {},
  title3: {},
  textBody: {},
  textBodyMini: {},
  textBodyBold: {fontSize: 'lg', fontWeight: '500'},
};
const sizes = {};
const defaultProps = {
  variant: 'textBody',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
