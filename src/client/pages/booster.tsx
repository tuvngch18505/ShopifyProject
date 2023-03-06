import React from 'react';
import { Box, Layout, ProgressBar } from '@shopify/polaris';

export default function Booster() {
  return (
    <div style={{ width: 930, height: 30, position: '-webkit-sticky', top: 0 }}>
      <Box>
        <Layout.Section>
          <ProgressBar progress={50} size="large" color="success" />
        </Layout.Section>
      </Box>
    </div>
  );
}
