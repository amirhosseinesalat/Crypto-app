const convertData = (data, type) => {
  if (!data || !data[type]) return [];

  const convertedData = data[type].map((item) => ({
    date: item[0],
    [type]: item[1],
  }));

  return convertedData;
};
export default convertData;
