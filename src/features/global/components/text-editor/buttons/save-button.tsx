import React from 'react'
import { MdSave } from 'react-icons/md'
import { RiSave2Line } from 'react-icons/ri'
import { Descendant } from 'slate'
import { ButtonSlate } from '../plugins/button-slate'

export function SaveButton(props: { value: Descendant[], isSaveBtnOn: boolean }) {
  const onSave = () => {
    if (!props.isSaveBtnOn) {
      return alert("Can't save, limit crossed for top level element.")
    }

    const content = JSON.stringify(props.value)
    localStorage.setItem('content', content)
    return alert('Saved successfully')
  }

  return (
    <ButtonSlate
      style={{ color: props.isSaveBtnOn ? '#28b728' : 'lightslategray' }}
      title="Save"
      // primary={false}
      onClick={() => onSave()}>
      {props.isSaveBtnOn ? <MdSave /> : <RiSave2Line />}
    </ButtonSlate>
  )
}
