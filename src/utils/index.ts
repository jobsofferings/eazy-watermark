export const generateUniqueId = () => {
  return `__EAZY_WATHERMARK_INSTANCE_${Math.random().toString(36).substr(2, 9)}__`;
};
