import React from 'react';
import { Box, Layout, ProgressBar } from '@shopify/polaris';

export default function Booster() {
  return (
    <div style={{ width: 930, height: 30 }}>
      <Box position="sticky">
        <Layout.Section>
          <ProgressBar progress={100} size="large" color="success" />
        </Layout.Section>
      </Box>
    </div>
  );
}
