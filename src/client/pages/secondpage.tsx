import { Box, LegacyCard, Page, Badge, Button, ProgressBar, Layout } from '@shopify/polaris';
import React from 'react';
import { ButtonGroup } from '@shopify/polaris';
import InsertContent from './insertContent';
import { Tabs } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import SelectDesign from './selectDesign';

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
      <div>
        <Layout sectioned>
          <Layout>
            <TabsExample></TabsExample>
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
  function CheckTab() {
    if ((tabs[selected].id = 'content-id')) {
      return <InsertContent />;
    } else {
      return <SelectDesign />;
    }
  }
  return (
    <>
      <div style={{ width: 189 }}>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}></Tabs>
      </div>
      {/* Booster */}
      <div style={{ width: 930, height: 30 }}>
        <Box position="sticky">
          <Layout.Section>
            <ProgressBar progress={100} size="large" color="success" />
          </Layout.Section>
        </Box>
      </div>
      {/*  */}
      <div style={{}}>
        <Box>
          <LegacyCard>
            <CheckTab />
          </LegacyCard>
        </Box>
      </div>
    </>
  );
}
