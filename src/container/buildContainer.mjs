import ProcessRepository from '../repositories/ProcessRepository.mjs';
import ProcessService from '../services/ProcessService.mjs';

const buildContainer = async (req, _res, next) => {
  const container = {};

  const processRepository = new ProcessRepository();
  // const
  const processService = new ProcessService({ processRepository });

  container.processService = processService;

  req.container = container;

  return next();
};

export default buildContainer;
