const keys = ['xs', 'exs', 'sm', 'lg', 'mb', 'xl']
const keyMap = {
  xs: 'xs',
  exs: 'exs',
  sm: 'sm',
  lg: 'lg',
  mb: 'mb',
  xl: 'xl'
}
const values = {
  xs: 450,
  exs: 600,
  sm: 768,
  lg: 1280,
  mb: 1366,
  xl: 1920
}

const unit = 'px'
const step = 5

function up(key) {
  const value = typeof values[key] === 'number' ? values[key] : key
  return `@media (min-width:${value}${unit})`
}

function down(key) {
  const endIndex = typeof key !== 'number' ? keys.indexOf(key) : 0
  const upperbound = values[keys[endIndex]]

  if (endIndex === keys.length) {
    return up('xs')
  }

  const value = typeof upperbound === 'number' ? upperbound : key
  return `@media (max-width:${+value - step / 100}${unit})`
}

function between(start, end) {
  const endIndex = keys.indexOf(end) + 1

  if (endIndex === keys.length) {
    return up(start)
  }

  return `@media (min-width:${values[start]}${unit}) and ` + `(max-width:${values[keys[endIndex]] - step / 100}${unit})`
}

function only(key) {
  return between(key, key)
}

function width(key) {
  return values[key]
}

const breakpoints = {
  keys,
  keyMap,
  values,
  unit,
  step,
  up,
  down,
  between,
  only,
  width
}

export default breakpoints
