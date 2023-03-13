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

function Design() {
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

    const [boostersname, setBoostersname] = useState('Order values booster');
    const [goal, setGoal] = useState(0);
    const [message, setMessage] = useState('');
    const [progressmessage, setProgressmessage] = useState('');
    const [goalreachedmessage, setGoalreachedmessage] = useState('');

    const handleSubmit = useCallback((_event) => {
        setBoostersname('');
        setGoal(0);
        setMessage('');
        setProgressmessage('');
        setGoalreachedmessage('');
    }, []);

    return (
        <Page narrowWidth>
            <Layout >
                <Layout.Section>
                    <Form onSubmit={handleSubmit}>
                        <LegacyCard title="Design" >
                            <LegacyCard.Section>
                            </LegacyCard.Section>
                            <LegacyCard.Section title="Positioning">
                                <Select
                                    options={optionsPosition}
                                    onChange={handlePositionChange}
                                    value={positionValue}
                                />
                            </LegacyCard.Section>
                            <LegacyCard.Section title="Template">
                                <Select

                                    options={optionsTemplate}
                                    onChange={handleTemplateChange}
                                    value={templateValue}
                                />
                            </LegacyCard.Section>
                            <LegacyCard.Section title="Card">
                                {/* <div style={{display:"inline-block", margin: "0", padding: "0",  width:"40px", height:"200px"}}>
                                <PopoverForBoosterColor />
                                <TextField 
                                    value='Lấy mã mẫu từ pop over'
                                    type="text"
                                    onChange={handleFontSizeChange}
                                    autoComplete="off"
                                />
                            </div> */}
                                <div className="Box" style={{display: "inline"}}>
                                    <div className='Box-color' style={{ width: "48px", height: "36px", padding: "0", margin: "0"}}>
                                        <Button> </Button>
                                    </div>
                                    <div className="Box-input">
                                        <TextField
                                            value='Lấy mã mẫu từ pop over'
                                            type="text"
                                            onChange={handleFontSizeChange}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>




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

export default Design;