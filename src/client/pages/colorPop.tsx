import { Popover, Button } from '@shopify/polaris';
import { useState, useCallback } from 'react';

import { ColorPicker } from '@shopify/polaris';

function ColorPickerExample() {
  const [color, setColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
  return <ColorPicker onChange={setColor} color={color} />;
}

export default function PopoverWithActionListExample() {
  const [popoverActive, setPopoverActive] = useState(true);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  //   Cần làm activator
  const activator = <Button></Button>;

  return (
    <div style={{}}>
      <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="none"
        onClose={togglePopoverActive}
      >
        <ColorPickerExample />
      </Popover>
    </div>
  );
}
