import servicesData from "./ServiceData";

export const getServiceBySlug = (slug) => {
  return servicesData[slug];
};

export const getAllServices = () => {
  return Object.values(servicesData);
};

export default servicesData;