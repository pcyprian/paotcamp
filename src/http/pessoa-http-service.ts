import http from './http-base'

class PessoaHttpService {
    getAll() {
      return http.get("/Pessoa/GetAll");
    }

    gravarPessoa(data: any) {
      return http.post("/pessoa", data);
    }

    get(id: any) {
      return http.get(`/pessoa/${id}`);
    }

    update(id: any, data: any) {
      return http.put(`/pessoa/${id}`, data);
    }

    delete(id: any) {
      return http.delete(`/pessoa/${id}`);
    }
}

export default new PessoaHttpService();