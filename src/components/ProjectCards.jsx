import React, { useEffect, useState } from "react";
import fetchAllRepositories from '../utilities/fetchFromGit';
import '../styles/components/projectcards.css';


export default function ProjectCards({count}) {

    const [repoNames, setRepoNames] = useState([]);
    const [repoUrls, setRepoUrls] = useState([]);
    const [repoDescriptions, setRepoDescriptions] = useState([]);
    const [repoUpdates, setRepoUpdates] = useState([]);
    let i =0;
    const data = fetchAllRepositories();

    useEffect (() => {
        async function fetchData() {
            try{
            const data = await fetchAllRepositories();

            const names = [];
            const urls = [];
            const descriptions = [];
            const updates = [];

            data.forEach(repo =>{
                names.push(repo.name);
                urls.push(repo.html_url);
                descriptions.push(repo.description);
                updates.push(repo.updated_at);
                console.log(repo.name);
                i++;
            });

            setRepoNames(names);
            setRepoUrls(urls);
            setRepoDescriptions(descriptions);
            setRepoUpdates(updates);
        } catch (error) {
            console.error("Error fetching repositories:", error);
        }
        }
        fetchData();
    }, []);


    let content;
    content = (
        <div id="projects">
            <h3 className="title">Most recent Projects</h3>
            <ul className="all-cards">
                {repoNames.slice(0, count).map((repo, index) => (
                    <li key={index} className="card-container">
                        <a className="link-container" href={repoUrls[index]} target="_blank" rel="noopener noreferrer">
                            <img className="repo-image" src={repoUrls[index].replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/") + "/main/" + repoNames[index] + ".png"} />
                            <p className="repo-name">{repo}</p>
                            <p className="repo-desc">{repoDescriptions[index]}</p>
                            <p className="repo-update">Last Updated: {repoUpdates[index]}</p>
                        </a>
                    </li>
                ))}
            </ul>
            <a href="/projects" className="more-projects">View All Projects</a>
        </div>
    );

    return content;
}