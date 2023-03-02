import { Page, Form, FormLayout, TextField } from '@shopify/polaris';
import React from 'react';
import { useState, useCallback } from 'react';

function InsertContent() {
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

  return (
    <Page narrowWidth>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={boostersname}
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
    </Page>
  );
}
export default InsertContent;
