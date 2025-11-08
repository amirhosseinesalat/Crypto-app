function convertData(chart, type) {
  if (!chart) return [];
  let key = type;
  if (type === "market_cap") key = "market_caps";
  if (type === "total_volume") key = "total_volumes";

  const data = chart[key]?.map((item) => ({
    date: new Date(item[0]).toLocaleDateString(),
    [type]: item[1],
  }));

  return data || [];
}

export default convertData;
