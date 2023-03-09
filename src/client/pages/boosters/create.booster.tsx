import { Box, LegacyCard, Page, Badge, Button, ProgressBar, Layout } from '@shopify/polaris';
import React from 'react';
import Booster from "pages/boosters/boosterBar"
// import InsertContent from 'pages/boosters/insertContent'
// import { Tabs } from '@shopify/polaris';
import { useState, useCallback } from 'react';
// import SelectDesign from 'pages/boosters/selectDesign';
import Content from 'pages/boosters/content.tab';

function CreateBooster() {

    return (
        <>
            <Content />
        </>
    );
}

export default CreateBooster;

// function TabsExample() {
//     const [selected, setSelected] = useState(0);

//     const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), []);

//     const tabs = [
//         {
//             id: 'content-tab',
//             content: 'Content',
//         },
//         {
//             id: 'design-tab',
//             content: 'Design',
//         },
//     ];
//     function CheckTab() {
//         if (tabs[selected].id == 'content-tab') {
//             return <InsertContent />;
//         } else {
//             return <SelectDesign />;
//         }
//     }
//     return (
//         <>
//             <div style={{ width: 190 }}>
//                 <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}></Tabs>
//             </div>
//             {/* Booster */}
//             <Booster />
//             {/*  */}
//             <div style={{}}>
//                 <br />
//                 <br />
//                 <Box>
//                     <LegacyCard>
//                         <CheckTab />
//                         <br />
//                     </LegacyCard>
//                 </Box>
//             </div>
//         </>
//     );
// }

