import React from 'react';

const RepoView = (props) => {
    return (
        <div className="repos-view">
            <div className="repo-view"> Id: {props.repo.id} </div>
            <div className="repo-view"> Repo: {props.repo.name} </div>
            <div className="repo-view"> forks: {props.repo.forks_count} </div>
            <div className="repo-view"> html_url: <a href={props.repo.html_url}>{props.repo.html_url}</a> </div>
            <div className="repo-view"> stargazers_count: {props.repo.stargazers_count} </div>
        </div>
    )

}

export default RepoView;

