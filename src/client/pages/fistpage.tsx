import { Page, LegacyCard, DataTable, FooterHelp, Layout, Inline, Button } from '@shopify/polaris';
import { CirclePlusOutlineMinor } from '@shopify/polaris-icons';
import React from 'react';

export default function Page1() {
  return (
    <>
      <Page
        title="Greenwich Freeshipping Booster"
        primaryAction={
          <Button icon={CirclePlusOutlineMinor} url="/secondpage" primary>
            Create new booster
          </Button>
        }
        divider
      >
        <ListData />
      </Page>
      <Footer></Footer>
    </>
  );
}

// Thêm dữ liệu vào rows
const rows = [
  ['Booster1', 'Published'],
  ['Booster2', 'Unpublished'],
];

function ListData() {
  return (
    <LegacyCard>
      <DataTable
        stickyHeader
        columnContentTypes={['text', 'text']}
        headings={['Your booster', 'Status']}
        rows={rows}
      />
    </LegacyCard>
  );
}

function Footer() {
  return (
    <FooterHelp>
      <Page fullWidth>
        <Layout sectioned>
          <Inline gap="6" wrap={false}>
            <div style={{ width: 290, textAlign: 'center' }}>
              <Layout.Section oneThird>
                <LegacyCard title="About the company">
                  <p>123456789</p>
                </LegacyCard>
              </Layout.Section>
            </div>
            <div style={{ width: 290, textAlign: 'center' }}>
              <Layout.Section oneThird>
                <LegacyCard title="Adress"></LegacyCard>
              </Layout.Section>
            </div>
            <div style={{ width: 290, textAlign: 'center' }}>
              <Layout.Section oneThird>
                <LegacyCard title="Contact"></LegacyCard>
              </Layout.Section>
            </div>
          </Inline>
        </Layout>
      </Page>
    </FooterHelp>
  );
}
