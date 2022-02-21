const AboutUs = require('../model/aboutUsModel');

function aboutUsController() {
  async function getAll(req, res) {
    const aboutUs = await AboutUs.find();
    res.json(aboutUs);
  }

  // async function createOne(req, res) {
  //   const newAboutUs = new AboutUs(req.body);
  //   try {
  //     await newAboutUs.save();
  //     res.json(newAboutUs);
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }

  // async function getById(req, res) {
  //   try {
  //     const aboutUsID = await AboutUs.findById(
  //       req.params.aboutUsID
  //     );
  //     res.json(aboutUsID);
  //   } catch (error) {
  //     res.status(404);
  //     res.send(error);
  //   }
  // }

  // async function updateById(req, res) {
  //   try {
  //     const updatedAboutUs = await AboutUs.findByIdAndUpdate(
  //       req.params.aboutUsID,
  //       req.body,
  //       { new: true }
  //     );
  //     res.json(updatedAboutUs);
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }

  // async function deleteById(req, res) {
  //   try {
  //     await AboutUs.findByIdAndDelete(req.params.aboutUsID);
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

module.exports = aboutUsController;
