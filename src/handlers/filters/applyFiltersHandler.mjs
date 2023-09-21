import Boom from '@hapi/boom';
import { StatusCodes } from 'http-status-codes';
import applyFilters from '../../controllers/filters/applyFilters.mjs';

const applyFiltersHandler = async (req, res, next) => {
  try {
    const { filters } = req.body;
    if (!filters) {
      throw Boom.badData('Filters are required');
    }

    let filtersParsed = null;
    try {
      filtersParsed = JSON.parse(filters);
    } catch (error) {
      throw Boom.badData('Filters are required');
    }

    console.log(filtersParsed);

    const response = await applyFilters({
      filters: filtersParsed,
      files: req.files,
    });

    return res.status(StatusCodes.OK).json(response);
  } catch (e) {
    next(Boom.isBoom(e) ? e : Boom.internal(e));
  }
};

export default applyFiltersHandler;
