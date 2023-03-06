import { Box, LegacyCard, Page, Badge, Button, ProgressBar, Layout } from '@shopify/polaris';
import React from 'react';
import Booster from './booster';
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
      return <SelectDesign />;
    } else {
      return <InsertContent />;
    }
  }
  return (
    <>
      <div style={{ width: 189 }}>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}></Tabs>
      </div>
      {/* Booster */}
      <Booster />
      {/*  */}
      <div style={{}}>
        <br />
        <br />
        <Box>
          <LegacyCard>
            <CheckTab />
            <br />
          </LegacyCard>
        </Box>
      </div>
    </>
  );
}
