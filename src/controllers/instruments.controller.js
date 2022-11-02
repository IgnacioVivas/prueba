import { Instrument } from '../models/Instrument.js';

export const getInstruments = async (req, res) => {
  try {
    const instruments = await Instrument.findAll();
    res.json(instruments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createInstrument = async (req, res) => {
  try {
    const { name } = req.body;
    const newInstrument = await Instrument.create({
      name,
    });
    res.json(newInstrument);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
