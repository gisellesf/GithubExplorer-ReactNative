// ** Import Axios
import axios from 'axios';

const githubApiBaseUrl  = 'https://api.github.com';

const api = axios.create({
  baseURL: githubApiBaseUrl,
});

export default {

 /**
  * Função assíncrona que realiza uma solicitação GET a API de repositórios do GitHub
  * @param {*} repository - termo de pesquisa para repositórios
  * 
  */
  async requestGetRepositories(repository) {
    try {
      const response = await api.get(`/search/repositories?q=${repository}`);
      if(response.status != 200) return null;
  
      return response.data;
    } catch (error) {
      throw new Error(
        "Erro na requisição à API Respositórios: " + error.message
      );
    }
  },

  /**
   * Função assíncrona que realiza uma solicitação GET a API de branches do GitHub
   * @param {*} owner - termo usuário para pesquisa de branches
   * @param {*} repository - termo repositório para pesquisa de branches
   *
   */
  async requestGetBranches(owner, repository) {
    try {
      const response = await api.get(`/repos/${owner}/${repository}/branches`);
      if(response.status != 200) return null;

      return response.data;
    } catch (error) {
      throw new Error(
        "Erro na requisição à API Branch do repositório selecionado: " + error.message
      );
    }
  },

  /**
   * Função assíncrona que realiza uma solicitação GET a API de commits do GitHub
   * @param {*} owner - termo usuário para pesquisa de commits 
   * @param {*} repository - termo repositório para pesquisa de commits
   * @param {*} branch - termo branches para pesquisa de commits
   * 
   */
  async requestGetCommitsByBranches(owner, repository, branch) {
    try {
      const response = await api.get(`/repos/${owner}/${repository}/commits`, { params: { sha: branch }});
      if(response.status != 200) return null;

      return response.data;
    } catch (error) {
      throw new Error(
        "Erro na requisição à API Commits da Branch: " + error.message
      );
    }
  },
};







