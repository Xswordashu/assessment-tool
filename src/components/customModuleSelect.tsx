import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { SelectFieldLabelServerComponent } from 'payload'

export const CustomSelectFieldLabelServer: SelectFieldLabelServerComponent = (props) => {
  return (
    <FieldLabel
      label={"test"}
      path={"tset"}
      required={true}
    />
  )
}