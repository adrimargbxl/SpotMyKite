import React, { useState } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

//need to implement drop-down fields instead of free-writing

const UserForm = ({ onChange, sortList }) => {
  console.log(onChange);
  const [weight, setWeight] = useState('');
  const [level, setLevel] = useState('');

  return (
    <Segment style={{ width: '46vw', backgroundColor: 'rgb(255,255,255,0.7)' }}>
      <Form
        onSubmit={() => {
          onChange(weight, level);
        }}
      >
        <Form.Field>
          <label>Weight</label>
          <input
            placeholder="Weight (kg)"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            value={weight}
          />
        </Form.Field>
        <Button type="Submit">Submit</Button>
      </Form>
    </Segment>
  );
};

export default UserForm;
