import React from 'react';
import { Label, Form } from 'semantic-ui-react'

const TextArea = ({input, meta:{touched, error}, type, rows, placeholder}) => {
  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} rows={rows} />
      {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default TextArea
