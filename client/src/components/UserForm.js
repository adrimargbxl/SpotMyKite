import React, { useState } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

//need to implement drop-down fields instead of free-writing

const UserForm = ({ onChange, sortList }) => {
  console.log(onChange);
  const [weight, setWeight] = useState('');
  const [level, setLevel] = useState('');

  const levelOptions = [
    { key: 'b', text: 'Beginner', value: 'beginner' },
    { key: 'i', text: 'Intermediate', value: 'intermediate' },
    { key: 'e', text: 'Expert', value: 'expert' },
  ];

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

// const weightOptions = [
//   { key: '43', text: '43-50', value: 46 },
//   { key: '50', text: '51-57', value: 54 },
//   { key: '57', text: '58-64', value: 61 },
//   { key: '64', text: '65-70', value: 67 },
//   { key: '70', text: '71-77', value: 74 },
//   { key: '77', text: '78-84', value: 81 },
//   { key: '84', text: '84-91', value: 88 },
//   { key: '91', text: '92-98', value: 95 },
//   { key: '98', text: '99-104', value: 102 },
//   { key: '104', text: '105-111', value: 108 },
//   { key: '111', text: '112-118', value: 46 }
// ]
