const dataPath = "./account.json";

const saveAccountData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};

const getAccountData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse;
};

module.exports = { saveAccountData, getAccountData };
