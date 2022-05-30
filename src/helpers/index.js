export const findById = (resources, id) => {
  if (!resources) return null;
  return resources.find((r) => r.id === id);
};
