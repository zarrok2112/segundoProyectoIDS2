import Boom from '@hapi/boom';
import Joi from 'joi';
import Process from '../../models/Process.mjs';
import { FILTERS } from '../../commons/constants.mjs';

const PayloadValidation = Joi.object({
  filters: Joi.array()
    .min(1)
    .items(
      Joi.string().valid(FILTERS.NEGATIVE, FILTERS.GREYSCALE, FILTERS.BLUR),
    ),
  files: Joi.array().required().min(1),
}).required();

const applyFilters = async (payload) => {
  try {
    await PayloadValidation.validateAsync(payload);
  } catch (e) {
    throw Boom.badData(e.message, { e });
  }
  const newProcess = new Process(payload);
  await newProcess.save();
  return newProcess;
};

export default applyFilters;
