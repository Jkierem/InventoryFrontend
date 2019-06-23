import React, { useState } from 'react'
import styled from 'styled-components';
import { Form, ComboBox, Field } from 'juanform';
import { Input, Button } from '../../../../formComponents'
import { ErrorBanner } from '../../../../components'
import { validateUserForm } from '../../validate';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ComboBoxStyle = styled.select`
  margin-top: 16px;
`

const init = { error: {}, valid: true }

const cleanData = (data) => ({
  ...data,
  name: data.name.trim()
})

const UserForm = ({ onSubmit, onCancel }) => {
  const [error, setError] = useState(init)
  const resetError = () => setError(init);
  const handleSubmit = (data) => {
    const validation = validateUserForm(data);
    if (validation.valid) {
      onSubmit(cleanData(data));
    } else {
      setError(validation.error);
    }
  }

  const handleCancel = (e) => {
    e.preventDefault()
    onCancel()
  }
  return (
    <Form
      as={FormStyled}
      onSubmit={handleSubmit}
      onChange={resetError}
    >
      <Input id="name" label="Usuario" />
      <ErrorBanner error={error.name} />
      <Input id="password" label="Contraseña" />
      <ErrorBanner error={error.password} />
      <ComboBox name="type" as={ComboBoxStyle}>
        <ComboBox.Option value="ADMIN" label="Administrador" />
        <ComboBox.Option value="CAMPO" label="Campo" />
        <ComboBox.Option value="PRODUCCION" label="Produccion" />
      </ComboBox>
      <Field as={ButtonContainer}>
        <Button primary submit>Crear</Button>
        <Button negative onClick={handleCancel}>Cancelar</Button>
      </Field>
    </Form>
  )
}

export default UserForm;