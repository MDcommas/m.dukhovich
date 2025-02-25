/// <reference types='codeceptjs' />
import steps_file from './e2e/codecept/steps_file'
import LoginPage from './ui/page_objects/LoginPage'
import ErrorPage from './ui/page_objects/ErrorPage'

export const SupportObject = { I: 'I', current: any, LoginPage, ErrorPage }
export const Methods = Playwright
export const I = steps_file()
