import React, { useEffect, useState } from "react";
import fetchAllRepositories from '../utilities/fetchFromGit';

export default function Skills () {
    
    const [repos, setRepos] = useState([]); // Store all repo data in one state

    useEffect(() => {
        async function fetchData(){
            const data = await fetchAllRepositories();
            
            // Fetch language data for each repo
            const updatedRepos = await Promise.all(data.map(async (repo) => {
                const response = await fetch(repo.languages_url);
                const languagesData = await response.json();
                return {
                    name: repo.name,
                    url: repo.html_url,
                    languages: Object.keys(languagesData)
                };
            }));

            setRepos(updatedRepos); // Update state with fetched repo data
        }
        
        fetchData();
    }, []);

    // Compute distinct languages after repos are populated
    const distinctLanguages = [...new Set(repos.flatMap(repo => repo.languages))];

    return (
        <div className="section" id="skills">
            <hr className="section-split"/>
            <h1 className="section-header game-font">Skills</h1>

            {/* Display language container */}
            <div className="language-container">
                {distinctLanguages.map((language, index) => (
                    <div key={index} className="ind-lang-container">
                        <div className="language-title">{language}</div>
                        <ul className="lang-repo-list">
                            {repos
                                .filter(repo => repo.languages.includes(language))
                                .map((repo, repoIndex) => (
                                    <li key={repoIndex}>{repo.name}</li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
