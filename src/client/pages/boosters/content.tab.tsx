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
    Select,
    Inline,
} from '@shopify/polaris';
import React from 'react';
import PopoverForBoosterColor from './colorPop';
import { useState, useCallback } from 'react';

function Content() {

    // Const value option position picker
    const optionsPosition = [
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
    ];

    // Const value option template picker
    const optionsTemplate = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
    ];

    // Const value option font picker
    const optionsFont = [
        { label: 'Time New Roman', value: 'time' },
        { label: 'Calibri', value: 'cali' },
        { label: 'Sanfri', value: 'sanf' },
    ];

    // useState
    const [positionValue, setPosition] = useState('Top');
    const [templateValue, setTemplate] = useState('2');
    const [backgroundColorValue, setBackgroundColor] = useState({
        hue: 120,
        brightness: 1,
        saturation: 1,
    });
    const [fontValue, setFont] = useState('Calibri');
    const [fontColorValue, setFontColor] = useState({
        hue: 120,
        brightness: 1,
        saturation: 1,
    });
    const [fontSizeValue, setFontSize] = useState('10');

    // Const to get/set value when user pick something new
    const handlePositionChange = useCallback((value) => setPosition(value), []);
    const handleTemplateChange = useCallback((value) => setTemplate(value), []);
    const handleBackgroundColorChange = useCallback((value) => setBackgroundColor(value), []);
    const handleFontChange = useCallback((value) => setFont(value), []);
    const handleFontColorChange = useCallback((value) => setFontColor(value), []);
    const handleFontSizeChange = useCallback((value) => setFontSize(value), []);

    // Const of Form Component
    const handleDesignSubmit = useCallback((_event) => {
        setPosition('');
        setTemplate('');
        setBackgroundColor;
        setFont('');
        setFontColor;
        setFontSize('');
    }, []);

    const [boostersname, setBoostersname] = useState('Values Order');
    const [goal, setGoal] = useState('');
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
        setGoal('');
        setMessage('');
        setProgressmessage('');
        setGoalreachedmessage('');
    }, []);

    return (
        <Page narrowWidth>
            <Layout>
                <Layout.Section oneThird>
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

                <Layout.Section oneThird>
                    <Form onSubmit={handleSubmit}>
                        <LegacyCard title="Design" >
                            <LegacyCard.Section>
                                <Text color="subdued" as="span" alignment="center"  >
                                    Fill information of content
                                </Text>
                            </LegacyCard.Section>
                            <LegacyCard.Section>
                                <Select
                                    label="Positioning"
                                    options={optionsPosition}
                                    onChange={handlePositionChange}
                                    value={positionValue}
                                />
                            </LegacyCard.Section>
                            <LegacyCard.Section>
                                <Select
                                    label="Template"
                                    options={optionsTemplate}
                                    onChange={handleTemplateChange}
                                    value={templateValue}
                                />
                            </LegacyCard.Section>
                            <LegacyCard.Section>
                                <p>Background-color</p>
                                {/* Test Pop color */}
                                <PopoverForBoosterColor />
                                {/* Lấy mã mầu từ popover */}
                                <TextField
                                    label="Color"
                                    value='Lấy mã mẫu từ pop over'
                                    type="text"
                                    onChange={handleFontSizeChange}
                                    autoComplete="off"
                                />
                                {/* <ColorPicker onChange={handleBackgroundColorChange} color={backgroundColorValue} /> */}

                            </LegacyCard.Section>

                            <LegacyCard.Section>
                                <b>
                                    <Text as="span"   >
                                        Typography
                                    </Text>
                                </b>

                                <Select
                                    label="Font"
                                    options={optionsFont}
                                    onChange={handleFontChange}
                                    value={fontValue}
                                />
                                <TextField
                                    label="Font size"
                                    type="number"
                                    value={fontSizeValue}
                                    onChange={handleFontSizeChange}
                                    autoComplete="off"
                                />
                                <Text color="subdued" as="span"   >
                                    Font color
                                </Text>
                                <PopoverForBoosterColor />
                                {/* <ColorPicker onChange={handleFontColorChange} color={fontColorValue} /> */}
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