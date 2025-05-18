import localFont from 'next/font/local'

export const Prompt = localFont({
    src: [
      {
        path: '../public/fonts/Prompt/Prompt-Thin.ttf',
        weight: '100',
        style: 'normal',
      },
      {
        path: '../public/fonts/Prompt/Prompt-ExtraLight.ttf',
        weight: '200',
        style: 'normal',
      },
      {
        path: '../public/fonts/Prompt/Prompt-Light.ttf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../public/fonts/Prompt/Prompt-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../public/fonts/Prompt/Prompt-Medium.ttf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../public/fonts/Prompt/Prompt-SemiBold.ttf',
        weight: '600',
        style: 'normal',
      },
      {
        path: '../public/fonts/Prompt/Prompt-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../public/fonts/Prompt/Prompt-ExtraBold.ttf',
        weight: '800',
        style: 'normal',
      },
      {
        path: '../public/fonts/Prompt/Prompt-Black.ttf',
        weight: '900',
        style: 'normal',
      },
      {
        path: '../public/fonts/Prompt/Prompt-ThinItalic.ttf',
        weight: '100',
        style: 'italic',
      },
      {
        path: '../public/fonts/Prompt/Prompt-Italic.ttf',
        weight: '400',
        style: 'italic',
      },
    ],
    variable: '--font-prompt',
    display: 'swap',
})

export const Mitr = localFont({
    src: [
      {
        path: '../public/fonts/Mitr/Mitr-ExtraLight.ttf',
        weight: '200',
        style: 'normal',
      },
      {
        path: '../public/fonts/Mitr/Mitr-Light.ttf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../public/fonts/Mitr/Mitr-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../public/fonts/Mitr/Mitr-Medium.ttf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../public/fonts/Mitr/Mitr-SemiBold.ttf',
        weight: '600',
        style: 'normal',
      },
      {
        path: '../public/fonts/Mitr/Mitr-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
    ],
    variable: '--font-mitr',
    display: 'swap',
})