import { Select, ColorPicker, Page, Layout } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { Form, FormLayout, TextField } from '@shopify/polaris';
import PopoverWithActionListExample from './colorPop';

export default function SelectDesign() {
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

  // Const of Form Comnpoent
  const handleSubmit = useCallback((_event) => {
    setPosition('');
    setTemplate('');
    setBackgroundColor;
    setFont('');
    setFontColor;
    setFontSize('');
  }, []);

  return (
    <Page narrowWidth>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <Select
            label="Positioning"
            options={optionsPosition}
            onChange={handlePositionChange}
            value={positionValue}
          />
          <Select
            label="Template"
            options={optionsTemplate}
            onChange={handleTemplateChange}
            value={templateValue}
          />
          <p>Background-color</p>
          {/* Test Pop color */}
          <PopoverWithActionListExample />
          {/* <ColorPicker onChange={handleBackgroundColorChange} color={backgroundColorValue} /> */}
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
          <ColorPicker onChange={handleFontColorChange} color={fontColorValue} />
        </FormLayout>
      </Form>
    </Page>
  );
}
