import ProcessModel from '../models/process.mjs';

class ProcessRepository {
  // eslint-disable-next-line class-methods-use-this
  async save(Process) {
    const newProcess = new ProcessModel(Process);
    newProcess.filters = Process.filters;
    await newProcess.save();
    return newProcess;
  }
}

export default ProcessRepository;
