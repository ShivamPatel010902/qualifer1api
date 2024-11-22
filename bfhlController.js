const bfhlModel = require('../models/bfhlModel');
const fileUtils = require('../utils/fileUtils');

exports.postBfhl = async (req, res) => {
  try {
    const { data, file_b64 } = req.body;
    const result = await bfhlModel.processData(data);
    const fileResult = await fileUtils.validateFile(file_b64);
    res.json({ ...result, ...fileResult });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBfhl = (req, res) => {
  res.json({ operation_code: 1 });
};
