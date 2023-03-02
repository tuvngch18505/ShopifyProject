import { Page, Button } from '@shopify/polaris';
import { LegacyCard, EmptyState } from '@shopify/polaris';
import { CirclePlusMinor } from '@shopify/polaris-icons';
import withI18n from '@components/withI18n';
import { I18n } from '@shopify/react-i18n';



type IndexPropsType = {
  i18n: I18n;
};
const Index = ({ i18n }: IndexPropsType) => {
  const t = (text: string) => i18n.translate(text);

  return (
    <Page
      title="Your order value boosters"
      primaryAction={
        <Button
          icon={CirclePlusMinor}
        >
          Create a new Booster
        </Button>
      }
    >
      <LegacyCard sectioned>
        <EmptyState
          heading="This is where you’ll manage your Order Value Boosters"
          action={{ content: 'Create a new booster',  }}
          secondaryAction={{
            content: 'Setup shipping rules',
            url: 'https://help.shopify.com',
          }}
          image="https://freeshipping-essential-apps.uk/empty.svg"
        >

          <p> Start by creating your first order value booster
            and publishing it to your store</p>

        </EmptyState>
      </LegacyCard>
    </Page >
  );
};

export default withI18n(Index);
