import React from 'react';
import RepoView from './RepoView.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map((repo, i) => <RepoView repo={repo} key={i}/>)}
  </div>
)

export default RepoList;