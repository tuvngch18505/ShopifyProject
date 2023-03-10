import { Page, Button } from '@shopify/polaris';
import { LegacyCard, EmptyState } from '@shopify/polaris';
import { CirclePlusMinor } from '@shopify/polaris-icons';
import withI18n from '@components/withI18n';
import { I18n } from '@shopify/react-i18n';
import Page1 from './fistpage';

type IndexPropsType = {
  i18n: I18n;
};
const Index = ({ i18n }: IndexPropsType) => {
  const t = (text: string) => i18n.translate(text);

  return (
    <Page1 />
  );
};

export default withI18n(Index);
