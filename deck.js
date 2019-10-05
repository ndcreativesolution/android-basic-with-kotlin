import './style.css'

import { slides as init } from './slides/01-introduction.mdx'
import { slides as BasicSample } from './slides/02-basic-view.mdx'
import { slides as Exercise } from './slides/03-android-exercise.mdx'
import { slides as Intent } from './slides/04-intent.mdx'
import { slides as cleanup } from './slides/99-closing.mdx'

export { nightOwl as theme } from 'code-surfer'

export const slides = [
  ...init,
  ...BasicSample,
  ...Exercise,
  ...Intent,
  ...cleanup,
]
