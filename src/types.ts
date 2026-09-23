export type Page =
  | 'home'
  | 'how'
  | 'owners'
  | 'providers'
  | 'download'
  | 'register-owner'
  | 'register-provider'

export type SetPage = (p: Page) => void
