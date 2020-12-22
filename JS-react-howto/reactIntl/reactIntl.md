A) První možnost použití:
import { injectIntl } from 'react-intl';

const SomeComponent = ({ intl }) => (


<Form.Check
  label={intl.formatMessage({ id: 'checkbox.label' })}
/>


export default injectIntl(FilterMenu);

------------------------------------

B) Druhá možnost použití:
import { FormattedMessage } from 'react-intl';
<FormattedMessage id="mergedHotels.title" />

------------------------------------

C) PŘEDÁNÍ DYNAMICKÉ VALUE DO STRINGU:

const description = intl.formatMessage({ id: 'homepage.description', values: {country: 'Morocco'} });
