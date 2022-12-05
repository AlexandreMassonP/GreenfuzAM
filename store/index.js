import Vuex from 'vuex';
import app from './app';
const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
        app: app,
    },
  });
};
export default createStore