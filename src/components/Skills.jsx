import React, { useEffect, useState } from "react";
import fetchAllRepositories from '../utilities/fetchFromGit';
import '../styles/components/skills.css';

export default function Skills () {
    
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await fetchAllRepositories();
            
            const updatedRepos = await Promise.all(data.map(async (repo) => {
                const response = await fetch(repo.languages_url);
                const languagesData = await response.json();
                return {
                    name: repo.name,
                    url: repo.html_url,
                    languages: Object.keys(languagesData)
                };
            }));

            setRepos(updatedRepos);
        }
        
        fetchData();
    }, []);

    const distinctLanguages = [...new Set(repos.flatMap(repo => repo.languages))];

    return (
        <div className="section" id="skills">
            <hr className="section-split"/>
            <h1 className="section-header game-font">Skills</h1>
            <h1 className="language-header">Languages</h1>
            <h3 className="section-desc">Under each programming language is a list of links to my github repositories that use that language</h3>
            <div className="language-container flex-row">
                {distinctLanguages.map((language, index) => (
                    <div key={index} className="ind-lang-container">
                        <div className="language-title">{language}</div>
                        <ul className="lang-repo-list">
                            {repos
                                .filter(repo => repo.languages.includes(language))
                                .map((repo, repoIndex) => (
                                    <a href={repo.url} className="repo-name" key={repoIndex}>{repo.name}</a>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
            <h1 className="language-header">Frameworks</h1>
            <div className="frameworks-container flex-row framework-list">
                <h3 className="framework-item">React.js</h3>
                <h3 className="framework-item">Node.js</h3>
                <h3 className="framework-item">Maven</h3>
            </div>
        </div>
    );
}
