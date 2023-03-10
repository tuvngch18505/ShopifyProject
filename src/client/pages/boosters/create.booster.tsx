import { Box, LegacyCard, Page, Badge, Button, Tabs } from '@shopify/polaris';
import React from 'react';

import { useState, useCallback } from 'react';
import Content from 'pages/boosters/content.tab';
import Design from 'pages/boosters/design.tab';

function CreateBooster() {
    
    function Tab() {
        const [selected, setSelected] = useState(0);

        const handleTabChange = useCallback(
            (selectedTabIndex) => setSelected(selectedTabIndex), []
        );
        function CheckTab() {
            if (tabs[selected].id == 'content-tab') {
                return <Content />;
            } else {
                return <Design />;
            }
        }

        const tabs = [
            {
                id: 'content-tab',
                content: 'Content',
            },
            {
                id: 'design-tab',
                content: 'Design',
            }
        ];


        return (
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                <br></br>
                <div className="progress">
                    <div className="progress-bar">
                        <span className="progress-bar-fill" style={{ width: "100%" }} >
                            Freeshipbar with Value
                        </span>
                    </div>
                </div>
                <CheckTab />
            </Tabs>

        )
    }

    return (
        <div className="container">
            <Page
                breadcrumbs={[{ content: 'booster', url: '/' }]}
                title="Booster Name"
                titleMetadata={<Badge status="new">Unpublished</Badge>}
                primaryAction={
                    <Button primary submit>
                        Save
                    </Button>
                }
                secondaryActions={[{ content: 'Publish' }]}
                divider
                fullWidth

            >

                <Tab />
            </Page>
        </div>



    );
}

export default CreateBooster;

