import { Box, LegacyCard, Page, Badge, Button, ProgressBar, Layout } from '@shopify/polaris';
import React from 'react';
import SelectDesign from './selectDesign';
import { ButtonGroup } from '@shopify/polaris';
import InsertContent from './insertContent';
import { Tabs } from '@shopify/polaris';
import { useState, useCallback } from 'react';

function Page2() {
  return (
    <Page
      title="Booster name"
      titleMetadata={<Badge status="attention">Unpublished</Badge>}
      primaryAction={
        <Button primary submit>
          Save
        </Button>
      }
      secondaryActions={[{ content: 'Publish' }]}
      divider
    >
      <div style={{}}>
        <Layout sectioned>
          <Layout>
            <ButtonGroup>
              {/* Switch button Tab https://polaris.shopify.com/components/navigation/tabs */}
              <Button id="content">Content</Button>
              <Button id="design">Design</Button>
            </ButtonGroup>
          </Layout>
          <Box position="sticky">
            <Layout.Section>
              <div style={{ width: 930, height: 30 }}>
                <ProgressBar progress={100} size="large" color="success" />
              </div>
            </Layout.Section>
          </Box>
          <br />
          <br />
          <Layout>
            <div style={{ width: '250px' }}>
              <LegacyCard sectioned>
                {/* <InsertContent /> */}
                <SelectDesign />
              </LegacyCard>
            </div>
          </Layout>
        </Layout>
      </div>
    </Page>
  );
}

export default Page2;

function TabsExample() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), []);

  const tabs = [
    {
      id: 'content-tab',
      content: 'Content',
    },
    {
      id: 'design-tab',
      content: 'Design',
    },
  ];

  return (
    <LegacyCard>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <LegacyCard.Section title={tabs[selected].content}>
          <p>Tab {selected} selected</p>
        </LegacyCard.Section>
      </Tabs>
    </LegacyCard>
  );
}
