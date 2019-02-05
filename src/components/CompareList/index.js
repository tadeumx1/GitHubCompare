import React from "react";
import PropTypes from 'prop-types';

import star from '../../assets/star.svg';
import gitbranch from '../../assets/git-branch.svg';
import issueIcon from '../../assets/issue-opened.svg';
import gitcommit from '../../assets/git-commit.svg';

import { Container, Repository } from "./styles";

// const repositories = props.repositories;

const CompareList = ({ repositories, handleRepositoryUpdate, handleRepositoryDelete }) => {
  return (
    <Container>
      {repositories.map((repository, index) => (
        <Repository key={repository.id}>
          <i onClick={() => handleRepositoryDelete(repository)} class="fa fa-times"></i>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>

          <ul>
            <li>
            <img src={star} alt="Star Icon" />
            {repository.stargazers_count} <small>stars</small>
            </li>
            <li>
              <img src={gitbranch} alt="Fork Icon" />
              {repository.forks_count} <small>forks</small>
            </li>
            <li>
              <img src={issueIcon} alt="Issue Icon" />
              {repository.open_issues_count} <small>issues</small>
            </li>
            <li>
              <img src={gitcommit} alt="Commit Icon" />
              {repository.lastCommit} <small>last commit</small>
            </li>
          </ul>
          <footer onClick={() => handleRepositoryUpdate(repository, index)}>

            <h5> Update data </h5> <i class="fa fa-refresh"></i>

          </footer>
        </Repository>
      ))}
    </Container>
  );
};

CompareList.PropTypes = {

    repositories: PropTypes.arrayOf(PropTypes.shape({

        id: PropTypes.number,
        name: PropTypes.string,
        owner: PropTypes.shape({

            login: PropTypes.string,
            avatar_url: PropTypes.string,

        }),
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        open_issues_count: PropTypes.number,
        pushed_at: PropTypes.string,

    })).isRequired,

}

export default CompareList;
