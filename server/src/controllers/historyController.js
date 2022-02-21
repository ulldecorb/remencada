const History = require('../model/historyModel');

function historyController() {
  async function getAll(req, res) {
    const history = await History.find();
    res.json(history);
  }

  // async function createOne(req, res) {
  //   const newHistory = new History(req.body);
  //   try {
  //     await newHistory.save();
  //     res.json(newHistory);
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }

  // async function getById(req, res) {
  //   try {
  //     const historyID = await History.findById(
  //       req.params.historyID
  //     );
  //     res.json(historyID);
  //   } catch (error) {
  //     res.status(404);
  //     res.send(error);
  //   }
  // }

  // async function updateById(req, res) {
  //   try {
  //     const updatedHistory = await History.findByIdAndUpdate(
  //       req.params.historyID,
  //       req.body,
  //       { new: true }
  //     );
  //     res.json(updatedHistory);
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }

  // async function deleteById(req, res) {
  //   try {
  //     await History.findByIdAndDelete(req.params.historyID);
  //     res.status(204);
  //     res.json();
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }

  return {
    getAll
    // createOne,
    // getById,
    // updateById,
    // deleteById
  };
}

module.exports = historyController;
