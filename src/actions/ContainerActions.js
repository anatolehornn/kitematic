import alt from '../alt';
import dockerUtil from '../utils/DockerUtil';

class ContainerServerActions {
  start (name) {
    this.dispatch({name});
    dockerUtil.start(name);
  }

  destroy (name) {
    this.dispatch({name});
    dockerUtil.destroy(name);
  }

  // TODO: don't require all container data for this method
  rename (name, newName) {
    this.dispatch({name, newName});
    dockerUtil.rename(name, newName);
  }

  stop (name) {
    this.dispatch({name});
    dockerUtil.stop(name);
  }

  update (name, container) {
    this.dispatch({container});
    dockerUtil.updateContainer(name, container);
  }

  clearPending () {
    this.dispatch();
  }

  run (name, repo, tag) {
    dockerUtil.run(name, repo, tag);
  }
}

export default alt.createActions(ContainerServerActions);