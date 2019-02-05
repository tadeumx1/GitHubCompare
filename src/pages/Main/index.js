import React, { Component } from 'react';

import logo from '../../assets/logo.png';

import api from '../../services/api';

import loadingImage from '../../assets/loading_171_200.gif'

import moment from 'moment';

import { Container, LoadImage, Form  } from './styles';

import CompareList from '../../components/CompareList'

export default class Main extends Component {

  state = {

    loading: false,
    loadImage: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],

  };
  
  componentDidMount() {

    const repositories = JSON.parse(localStorage.getItem("@GitCompare:repositories")) || [];

    this.setState({ repositories: repositories });

    setTimeout(() => {
      this.setState({ loadImage: true });
    }, 1700)

  }

  handleAddRepository = async (e) => {

    // No comportamento padrão do HTML quando o OnSubmit do
    // formulário é executado ele recarrega a página pois ele
    // está tentando enviar as informações desse formulário para outra página
    // para desabilitar esse funcionamento podemos usar o e.preventDefault() 

    e.preventDefault();

    this.setState({ loading: true })

    try {

        const { data: repository } = await api.get(`repos/${this.state.repositoryInput}`);
        // const response = await api.get(`repos/${this.state.repositoryInput}`);

        repository.lastCommit = moment(repository.pushed_at).fromNow();

        // Errado
        // repositories: this.state.repositories.push()

        await this.setState({ 

            repositoryInput: '',
            repositories: [...this.state.repositories, repository],
            repositoryError: false,

        });

        localStorage.setItem("@GitCompare:repositories", JSON.stringify(this.state.repositories));

    } catch(err) {

        console.log(err);

        this.setState({ repositoryError: true });

    } finally {

        this.setState({ loading: false })

    }

  }

  handleRepositoryUpdate = async (repository, index) => {

    const { data: repositoryUpdate } = await api.get(`repos/${repository.full_name}`);
    // const response = await api.get(`repos/${this.state.repositoryInput}`);

    repositoryUpdate.lastCommit = moment(repositoryUpdate.pushed_at).fromNow();

    await this.setState(state => {

        const repositories = state.repositories.map((item, index1) => {
          if (index1 === index) {
            return item = repositoryUpdate;
          } else {
            return item;
          }

        });
  
        return {

          repositories,

        };
    });

    localStorage.setItem("@GitCompare:repositories", JSON.stringify(this.state.repositories));

    alert("Atualizado com sucesso ! ")

  }

  handleRepositoryDelete = async (repository) => {

    let filteredArray = this.state.repositories.filter(item => item !== repository)

    await this.setState({ repositories: filteredArray });

    localStorage.setItem("@GitCompare:repositories", JSON.stringify(this.state.repositories));

    alert("Deletado com sucesso ! ");

  }

  render() {
    return (
      
    <Container>

      {this.state.loadImage ?

          <React.Fragment>
        
            <img src={logo} alt="GitHub Compare" />

            <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>

            <input 
              type="text" 
              placeholder="Usuário/Repositório" 
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
    
            />

            <button type="submit">{ this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : "OK" }</button>

            </Form>

            <CompareList repositories={this.state.repositories} handleRepositoryUpdate={this.handleRepositoryUpdate} 
              handleRepositoryDelete={this.handleRepositoryDelete} />

            </React.Fragment> : <LoadImage src={loadingImage} /> }

      </Container>

    );
  }
}