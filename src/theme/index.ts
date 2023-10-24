import {extendTheme} from 'native-base';

import typography from './foundations/typography';

import colors from './foundations/colors';
import Button from './uikit/button';
import Input from './uikit/input';
import Text from './uikit/text';
import Checkbox from './uikit/checkbox';
import Select from './uikit/select';

const overrides = {
  typography,
  colors,
  components: {
    Button,
    Checkbox,
    Input,
    Text,
    Select,
  },
};
const Theme = extendTheme(overrides);

export default Theme;
