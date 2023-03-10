import { Popover, Button, Box } from '@shopify/polaris';
import { useState, useCallback } from 'react';

import { ColorPicker } from '@shopify/polaris';

function BoosterColorPicker() {
  const [backgroundColorValue, setBackgroundColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });

  const handleBackgroundColorChange = useCallback((value) => setBackgroundColor(value), []);

  const handleSubmit = useCallback((_event) => {
    setBackgroundColor;
  }, []);

  return <ColorPicker onChange={handleBackgroundColorChange} color={backgroundColorValue} />;
}

export default function PopoverForBoosterColor() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  //   Cần làm activator
  const activator = (
    <Box width='40px' minHeight='40px'>
      <Button onClick={togglePopoverActive} size="large" ></Button>
    </Box>
  );

  return (

      <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="none"
        onClose={togglePopoverActive}
      >
        <BoosterColorPicker />
      </Popover>
  );
}
