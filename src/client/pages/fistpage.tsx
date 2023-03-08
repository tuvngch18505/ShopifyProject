import {
  Page,
  LegacyCard,
  IndexTable,
  FooterHelp,
  Layout,
  Inline,
  Button,
  Text,
  Link,
} from '@shopify/polaris';
import { CirclePlusOutlineMinor } from '@shopify/polaris-icons';
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

export default function Page1() {
  const router = useRouter();
  const router2 = useRouter();

  function handleClickCreateBooster() {
    router.push('/secondpage');
  }

  function handleClickEditBooster() {
    router2.push('/editBooster');
  }

  const [data, setData] = useState([]);
  // use Effect to using fetch to take data from server
  useEffect(() => {
    fetch('/api/getBooster')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const row = data.map(({ id, boosterName, status }, index) => (
    <IndexTable.Row id={id} key={id} position={index}>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {id}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {boosterName}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{status}</IndexTable.Cell>
    </IndexTable.Row>
  ));
  return (
    <>
      <Page
        title="Greenwich Freeshipping Booster"
        primaryAction={
          <Button icon={CirclePlusOutlineMinor} primary onClick={handleClickCreateBooster}>
            Create new booster
          </Button>
        }
        divider
      >
        {/* <ListData /> */}
        <LegacyCard>
          <IndexTable
            itemCount={data.length}
            headings={[{ title: 'No.' }, { title: 'Booster Name' }, { title: 'Status' }]}
            selectable={false}
          >
            <Link monochrome removeUnderline onClick={handleClickEditBooster}>
              {row}
            </Link>
          </IndexTable>
        </LegacyCard>
      </Page>
      <Footer></Footer>
    </>
  );
}

// function ListData() {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetch('https://tuvn.dev.hamsa.site/api/getBooster')
//       .then((response) => response.json())
//       .then((data) => {
//         if (Array.isArray(data)) { // Check if the fetched data is an array
//           setData(data);
//         } else {
//           console.error('Fetched data is not an array:', data);
//         }
//       })
//       .catch((error) => console.error(error))
//   }, [])

//   return (
//     <LegacyCard>
//       {/* <DataTable
//       stickyHeader
//       columnContentTypes={['text','text','text']}
//       headings={['ID', 'Booster Name', 'Status']}
//       rows={data}
//     /> */
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Booster Name</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => {
//               <tr>

//                 <td> {item.id}</td>
//                 <td> {item.boosterName}</td>
//                 <td> {item.status}</td>

//               </tr>
//             })}
//           </tbody>
//         </table>

//       }
//     </LegacyCard>
//   );

// }

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
