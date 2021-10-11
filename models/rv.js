const mongoose = require("mongoose");

const rvSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      require: true,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
    date: {
      type: String,
    },
    tel: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RV", rvSchema);
