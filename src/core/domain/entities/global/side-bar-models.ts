import { RouterList } from '~/features/router-list'

export type NaviElementSub = {
  id: string
  title: string
  link: string
}

export type NaviElement = {
  id: string
  page: string
  src: string
  subElement: NaviElementSub[]
}

export function SidebarModel(): NaviElement[] {
  return [
    {
      id: '0',
      page: 'Color',
      subElement: [],
      src: RouterList.COLOR
    },
    {
      id: '1',
      page: 'Button',
      subElement: [],
      src: RouterList.BUTTON
    },
    {
      id: '2',
      page: 'Check box',
      subElement: [],
      src: RouterList.CHECK_BOX
    },
    {
      id: '3',
      page: 'Select',
      subElement: [],
      src: RouterList.SELECT
    },
    {
      id: '4',
      page: 'Slate',
      subElement: [],
      src: RouterList.SLATE_EDITOR
    }
  ]
}
