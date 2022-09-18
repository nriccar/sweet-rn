import { by, device, element, waitFor } from 'detox'

describe('App', () => {
  beforeEach(async () => {
    await device.launchApp()
  })

  it('should render a welcome message', async () => {
    const en = {
      button: 'English',
      title: 'Welcome to',
    }
    const es = {
      button: 'Español',
      title: 'Bienvenido a',
    }

    waitFor(element(by.text(en.title))).toBeVisible()
    waitFor(element(by.text(es.title))).not.toBeVisible()
    await element(by.text(es.button)).tap()
    waitFor(element(by.text(es.title))).toBeVisible()
    waitFor(element(by.text(en.title))).not.toBeVisible()
    waitFor(element(by.text(es.title))).not.toBeVisible()
    await element(by.text(en.button)).tap()
    waitFor(element(by.text(en.title))).toBeVisible()
    waitFor(element(by.text(es.title))).not.toBeVisible()
  })
})
