/// <reference types='codeceptjs' />
import steps_file from './proectnaya_praca/ui/steps_file'
import LoginPage from './ui/page_objects/LoginPage'
import ErrorPage from './ui/page_objects/ErrorPage'

export const SupportObject = { I: 'I', current: any, LoginPage, ErrorPage }
export const Methods = Playwright
export const I = steps_file()
