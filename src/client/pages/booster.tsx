import React from 'react';
import { useState, useCallback } from 'react';
import { Form, FormLayout, TextField } from '@shopify/polaris';

const [boostersname, setBoostersname] = useState('');
const [goal, setGoal] = useState('');
const [message, setMessage] = useState('');
const [progressmessage, setProgressmessage] = useState('');
const [goalreachedmessage, setGoalreachedmessage] = useState('');
const handleSubmit = useCallback((_event) => {
  setBoostersname('');
  setGoal('');
  setMessage('');
  setProgressmessage('');
  setGoalreachedmessage('');
}, []);

const handleBoosterNameChange = useCallback((value) => setBoostersname(value), []);
const handleGoalChange = useCallback((value) => setGoal(value), []);
const handleMessageChange = useCallback((value) => setMessage(value), []);
const handleProgressMessageChange = useCallback((value) => setProgressmessage(value), []);
const handleGoalReachedMessageChange = useCallback((value) => setGoalreachedmessage(value), []);
export default function Data({
  boostername,
  goal,
  message,
  progressmessage,
  goalreachedmessage,
  position,
  template,
  backgroundcolor,
  font,
  fontcolor,
  fontsize,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          value={boostername}
          onChange={handleBoosterNameChange}
          label="Booster name"
          type="text"
          autoComplete="off"
        />
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
        <TextField
          value={progressmessage}
          onChange={handleProgressMessageChange}
          label="Progress message"
          type="text"
          autoComplete="off"
        />
        <TextField
          value={goalreachedmessage}
          onChange={handleGoalReachedMessageChange}
          label="Goal reached message"
          type="text"
          autoComplete="off"
        />

        {/* <Button submit>Submit</Button> */}
      </FormLayout>
    </Form>
    // Content field

    // Design field
  );
}
