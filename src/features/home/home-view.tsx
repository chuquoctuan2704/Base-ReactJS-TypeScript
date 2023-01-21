import React, { ReactElement, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { setLanguageCode } from '~/commons/services/local-storage'
import { HomeViewModel } from './home-view-model'
import Debug from 'debug'

import { createEditor, BaseEditor } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'

type CustomElement = { type: 'paragraph', children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const debug = Debug('Home:')

const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: #31e698be;
`
const ButtonToLogin = styled.button`
  color: black;
  height: 40px;
  background-color: white;
  margin-right: 10px;
`
const ButtonClick = styled.button`
  color: black;
  height: 40px;
  background-color: white;
`
const initialValue: CustomElement[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }]
  }
]
export function Home(): ReactElement {
  const { t, i18n } = useTranslation()
  const clickTitle = useMemo(() => t('translations.Hello'), [t])
  const { text, setText, goToLogin } = HomeViewModel()
  const [editor] = useState(() => withReact(createEditor()))
  return (
    <HomeContainer>
      <Slate editor={editor} value={initialValue} >
        <Editable
          onKeyDown={(event) => {
            console.log(event.key)
          }}
        />
      </Slate>
      {/* <ButtonToLogin
        onClick={() => {
          goToLogin()
        }}>
        go to login
      </ButtonToLogin>
      <ButtonToLogin
        onClick={() => {
          setText('text da set')
        }}>
        Set text
      </ButtonToLogin>
      <ButtonClick
        onClick={() => {
          if (i18n.language === 'en') {
            i18n.changeLanguage('vi')
            setLanguageCode('vi')
          } else {
            i18n.changeLanguage('en')
            setLanguageCode('en')
          }
        }}>
        Change Language - {text}
      </ButtonClick>
      {clickTitle} */}
    </HomeContainer>
  )
}
