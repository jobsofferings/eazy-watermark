export const dummy = () => {}

export const safeParseJSON = (value: string | null) => {
  if (!value) return ''
  try {
    return JSON.parse(value)
  } catch (e) {
    return ''
  }
}