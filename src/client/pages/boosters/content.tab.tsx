import {
    Page,
    Layout,
    LegacyCard,
    ResourceList,
    Thumbnail,
    Form,
    Text,
    TextField,
    ColorPicker,
    Badge,
    Button,
    Select,
    Inline,
} from '@shopify/polaris';
import React from 'react';
import PopoverForBoosterColor from './colorPop';
import { useState, useCallback } from 'react';


function Content() {


    const [boostersname, setBoostersname] = useState('Order values booster');
    const [goal, setGoal] = useState(0);
    const [message, setMessage] = useState('');
    const [progressmessage, setProgressmessage] = useState('');
    const [goalreachedmessage, setGoalreachedmessage] = useState('');

    const handleBoosterNameChange = useCallback((value) => setBoostersname(value), []);
    const handleGoalChange = useCallback((value) => setGoal(value), []);
    const handleMessageChange = useCallback((value) => setMessage(value), []);
    const handleProgressMessageChange = useCallback((value) => setProgressmessage(value), []);
    const handleGoalReachedMessageChange = useCallback((value) => setGoalreachedmessage(value), []);

    const handleSubmit = useCallback((_event) => {
        setBoostersname('');
        setGoal(0);
        setMessage('');
        setProgressmessage('');
        setGoalreachedmessage('');
    }, []);

    return (
        <Page 
        narrowWidth>

            <Layout>
                <Layout.Section >
                    <Form onSubmit={handleSubmit}>
                        <LegacyCard title="Content" >
                            <LegacyCard.Section>
                                <Text color="subdued" as="span" alignment="center"  >
                                    Fill information of content
                                </Text>
                            </LegacyCard.Section>
                            <LegacyCard.Section>
                                <TextField
                                    value={boostersname}
                                    onChange={handleBoosterNameChange}
                                    label="Booster name"
                                    type="text"
                                    autoComplete="off"

                                />
                                <br />
                                <Text color="subdued" as="span" >
                                    Only visible to you. For your own internal reference.
                                </Text>
                            </LegacyCard.Section>
                            <LegacyCard.Section title="Goal">
                                <TextField
                                    value={goal}
                                    onChange={handleGoalChange}
                                    label="Goal"
                                    type="text"
                                    autoComplete="off"
                                />
                                <TextField
                                    value={message}
                                    onChange={handleMessageChange}
                                    label="Main message"
                                    type="text"
                                    autoComplete="off"
                                />

                                <Text color="subdued" as="span" >
                                    Use order - value to display order value goal.
                                </Text>

                                <TextField
                                    value={progressmessage}
                                    onChange={handleProgressMessageChange}
                                    label="Progress message"
                                    type="text"
                                    autoComplete="off"
                                />

                                <Text color="subdued" as="span" >
                                    Use order - value - progress to display order value progress.
                                </Text>

                                <TextField
                                    value={goalreachedmessage}
                                    onChange={handleGoalReachedMessageChange}
                                    label="Goal reached message"
                                    type="text"
                                    autoComplete="off"
                                />

                            </LegacyCard.Section>
                        </LegacyCard>
                    </Form>
                </Layout.Section>

                <br />
                <br />
            </Layout>
        </Page>


    )
}

export default Content;