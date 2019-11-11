import React, { Component } from 'react';
import { loadData } from "../utils/loadData.js";
import Moment from 'react-moment';
import 'moment-timezone';

class IssueList extends Component {
    state = {
        issues: [],
};

async componentDidMount() {
    {
        const data = await loadData(
            `https://api.github.com/repos/facebook/create-react-app/issues`
            ); 
            const issues = data;
            console.log(issues);

        this.setState({
            issues
        })
        }
}

    render() {
        const { issues } = this.state;
        return(
            <>
            <h1 className="title">Create React App</h1>
            <div className = 'issues--FullWrapper'>
            <ul>
                {issues.map(i => 
                <li key={i.id}>
                    <div className = 'issues--individualwrapper'>
                    <div className="topicheaderWrap">
                    <img src={i.user.avatar_url} alt="avatar" className="avatar"></img>
                    </div>
                    <h1 className="topicTitle">
                        {i.title}</h1>
                    <p className="updatedLast">
                        Created: <Moment format="YYYY/MM/DD">
                        {i.created_at}
                    </Moment><p><b>User: {i.user.login}</b></p></p>
                        <a href={i.html_url} target="_blank" className="url-tag">{i.url}</a>
                        <p className="description"><b className="number">{i.number}: </b>{i.body}</p>
                        <p>{i.labels.name}</p>
                        </div>
                </li>
                )}
            </ul>
            </div>
            </>
        );
    }
}

export default IssueList;