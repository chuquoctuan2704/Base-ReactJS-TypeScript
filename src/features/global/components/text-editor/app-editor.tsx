/// ------Example------

// hiển thị editor
// const [valueSlate, setValueSlate] = useState<Descendant[]>(defaultValue)
// <AppEditor value={valueSlate} onChange={setValueSlate}/>

// hiển thị dữ liệu có định dạng
// <AppEditor readOnly={true} value={valueSlate}/>

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import isHotkey from 'is-hotkey'
import styled from 'styled-components'
import {
  MdCancel,
  MdCode,
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatUnderlined,
  MdLooks3,
  MdLooksOne,
  MdLooksTwo
} from 'react-icons/md'
import { createEditor, Descendant } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, ReactEditor, Slate, withReact } from 'slate-react'
import { BlockButton } from './buttons/block-button'
import { MarkButton } from './buttons/mark-button'
import { defaultValueSlate, HostkeyType, HOTKEYS } from './data/data'
import { toggleMark } from './helper/toggle-mark'
import { Element } from './plugins/element-slate'
import { Toolbar } from './plugins/toolbar'
import { InsertImageButton } from './buttons/insert-image-button'
import { UploadImageButton } from './buttons/upload-image-button'
import { Leaf } from './plugins/leaf'
import { withImages } from './helper/with-images'
import { withLists } from './helper/with-lists'
import { withMarkdown } from './helper/with-markdown'
import { ButtonSlate } from './plugins/button-slate'
import { CusDescendant } from 'declarations'

const EditorContainer = styled.div`
  box-shadow: ${(props: { readOnly: boolean, isFocu: boolean, isErr: boolean }) =>
    props.readOnly ? '2px 1px 8px ' + (props.isErr ? 'red' : props.isFocu ? '#acacac' : '#acacac') : ''};
  border-radius: 10px;
`
const ToolbarContainer = styled(Toolbar)`
  padding: 1rem;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 10px 10px 0 0;
`
const DashToolbar = styled.div`
  width: 1px;
  height: 14px;
  margin: 0 2rem 0 1rem;
  background-color: #aaa;
`
const EditableContainer = styled(Editable)`
  padding: ${(props: { hide: number }) => (props.hide === 1 ? '1rem' : '0rem')};
  margin: 0;
  border: ${(props: { hide: number }) => (props.hide === 1 ? '1px solid #ccc' : '')};
  border-top: 0;
  border-radius: 0 0 10px 10px;
  min-height: ${(props: { hide: number }) => (props.hide === 1 ? '100px !important' : '')};
`
export type ShowButton = {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean

  left?: boolean
  center?: boolean
  right?: boolean
  justify?: boolean

  headingOne?: boolean
  headingTwo?: boolean
  headingThree?: boolean
  blockQuote?: boolean
  bulletedList?: boolean
  numberedList?: boolean
}
export type AppEditorProps = {
  value: string
  onChange?: (value: string) => void
  readOnly?: boolean
  placeHolder?: string
  style?: React.CSSProperties
  countText?: (count: number) => void
  isErr?: boolean
  // isShowButton?: ShowButton

  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean

  left?: boolean
  center?: boolean
  right?: boolean
  justify?: boolean

  headingOne?: boolean
  headingTwo?: boolean
  headingThree?: boolean
  blockQuote?: boolean
  bulletedList?: boolean
  numberedList?: boolean
  linkImage?: boolean
  importImage?: boolean
  clearButton?: boolean
}
export const iconSizeToolbarEditor = 16
export function AppEditor(prop: AppEditorProps) {
  const [isFocus, setIsFocus] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const {
    value,
    onChange,
    readOnly = false,
    placeHolder,
    style,
    countText,
    isErr = false,
    bold = true,
    italic = true,
    underline = true,
    code = true,
    left = true,
    center = true,
    right = true,
    justify = true,
    headingOne = true,
    headingTwo = true,
    headingThree = true,
    blockQuote = true,
    bulletedList = true,
    numberedList = true,
    linkImage = true,
    importImage = true,
    clearButton = true
  } = prop
  const renderElement = useCallback((props: any) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, [])
  const editor = useMemo(
    () => withLists(withMarkdown(withImages(withHistory(withReact(createEditor() as ReactEditor))))),
    []
  )
  const startData = '[{"type":"'

  useEffect(() => {
    if (countText) {
      countText(getFullString(convertStringToDescendant(value)).length)
    }
  }, [value])

  function getFullString(data: Descendant[]): string {
    let text = ''
    const val = data as CusDescendant[]
    if (val.length !== 0) {
      val.forEach((i, index) => {
        if (i.children[0].children && i.children[0].children.length !== 0) {
          i.children[0].children.forEach((item) => {
            if (item.text !== '') {
              text = text + (item.text?.toString() ?? '')
            }
          })
        } else {
          if (text.length !== 0 || (text.length === 0 && index !== 0)) {
            text = text + ' '
          }
          i.children.forEach((item) => {
            if (item.text !== '') {
              text = text + (item.text?.toString() ?? '')
            }
          })
        }
        return true
      })
    }
    return text
  }

  function convertDescendantFromString(data: string): Descendant[] {
    let newData: CusDescendant[] = [
      {
        type: 'paragraph',
        children: [{ text: '' }]
      }
    ]
    if (data !== '') {
      newData = [
        {
          type: 'paragraph',
          children: [{ text: data }]
        }
      ]
    }

    return newData as Descendant[]
  }

  function convertDescendantToString(data: Descendant[]): string {
    return JSON.stringify(data)
  }

  function convertStringToDescendant(data: string): Descendant[] {
    if (data === '') {
      return defaultValueSlate
    } else {
      if (data.startsWith(startData)) {
        return JSON.parse(data)
      } else {
        return convertDescendantFromString(data)
      }
    }
  }

  function resetData() {
    if (onChange) {
      onChange(convertDescendantToString(defaultValueSlate))
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  }, [])

  function handleClickOutSide(event: MouseEvent) {
    if (ref.current && event.target && !ref.current?.contains(event.target as HTMLDivElement)) {
      setIsFocus(false)
    }
  }

  return (
    <EditorContainer readOnly={!readOnly} ref={ref} onFocus={() => setIsFocus(true)} isFocu={isFocus} isErr={isErr}>
      <Slate
        editor={editor}
        value={convertStringToDescendant(value)}
        onChange={(v: Descendant[]) => {
          if (onChange) {
            onChange(convertDescendantToString(v))
          }
        }}>
        {!readOnly && (
          <ToolbarContainer>
            {bold && <MarkButton format="bold" icon={MdFormatBold} />}
            {italic && <MarkButton format="italic" icon={MdFormatItalic} />}
            {underline && <MarkButton format="underline" icon={MdFormatUnderlined} />}
            {code && <MarkButton format="code" icon={MdCode} />}
            {(bold || italic || underline || code) && <DashToolbar />}
            {left && <BlockButton format="left" icon={MdFormatAlignLeft} block="align" />}
            {center && <BlockButton format="center" icon={MdFormatAlignCenter} block="align" />}
            {right && <BlockButton format="right" icon={MdFormatAlignRight} block="align" />}
            {justify && <BlockButton format="justify" icon={MdFormatAlignJustify} block="align" />}
            {(left || center || right || justify) && <DashToolbar />}
            {headingOne && <BlockButton format="heading-one" icon={MdLooksOne} />}
            {headingTwo && <BlockButton format="heading-two" icon={MdLooksTwo} />}
            {headingThree && <BlockButton format="heading-three" icon={MdLooks3} />}
            {blockQuote && <BlockButton format="block-quote" icon={MdFormatQuote} />}
            {bulletedList && <BlockButton format="bulleted-list" icon={MdFormatListBulleted} />}
            {numberedList && <BlockButton format="numbered-list" icon={MdFormatListNumbered} />}
            {(headingOne || headingTwo || headingThree || blockQuote || bulletedList || numberedList) && (
              <DashToolbar />
            )}
            {linkImage && <InsertImageButton />}
            {importImage && <UploadImageButton />}
            {clearButton && (
              <ButtonSlate title="Cancel" style={{ color: 'tomato' }} onClick={resetData}>
                <MdCancel size={iconSizeToolbarEditor} />
              </ButtonSlate>
            )}
            {(linkImage || importImage || clearButton) && <DashToolbar />}
          </ToolbarContainer>
        )}
        <EditableContainer
          renderElement={(p: any) => {
            return renderElement(p)
          }}
          renderLeaf={renderLeaf}
          placeholder={!readOnly ? placeHolder ?? 'Enter some text…' : ''}
          style={style}
          spellCheck
          autoFocus={false}
          readOnly={readOnly}
          hide={!readOnly ? 1 : 0}
          onKeyDown={(e: any) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, e)) {
                e.preventDefault()
                const mark = HOTKEYS[hotkey as keyof HostkeyType]
                toggleMark(editor, mark)
              }
            }
            // if (isHotkey('shift+tab', e)) {
            //   // un-indent list
            //   e.preventDefault()
            //   unindentItem(editor)
            // } else if (isHotkey('tab', e)) {
            //   // indent list
            //   e.preventDefault()
            //   indentItem(editor)
            // }
          }}
        />
      </Slate>
    </EditorContainer>
  )
}
