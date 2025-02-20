import React, { useEffect, useState } from "react";
import fetchAllRepositories from '../utilities/fetchFromGit';
import '../styles/components/projectcards.css';

export default function ProjectCards({count, header, button}) {
  const [repoNames, setRepoNames] = useState([]);
  const [repoUrls, setRepoUrls] = useState([]);
  const [repoDescriptions, setRepoDescriptions] = useState([]);
  const [repoUpdates, setRepoUpdates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllRepositories();

        const names = [];
        const urls = [];
        const descriptions = [];
        const updates = [];

        data.forEach(repo => {
          names.push(repo.name);
          urls.push(repo.html_url);
          descriptions.push(repo.description);
          updates.push(repo.updated_at);
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

  const projects = repoNames.map((name, i) => ({
    name,
    url: repoUrls[i],
    desc: repoDescriptions[i],
    updated: repoUpdates[i]
  }));

  projects.sort((a, b) => new Date(b.updated) - new Date(a.updated));

  const topProjects = projects.slice(0, count);

  //If the count is a number larger than the number of repos returned, display all repos
  if(count > repoNames.length){
    count=repoNames.length;
  }
  let content="";

  if(button=="false"){
    content="";
  }
  else{
    content=(
      <a href="/projects" className="more-projects">
        View All Projects
      </a>
    );
  }

  return (
    <div className="section" id="projects">
      <hr className="section-split"/>
      <h3 className="section-header game-font">{header}</h3>
      <ul className="all-cards">
        {topProjects.map((repo, index) => (
          <li key={index} className="card-container">
            <a
              className="link-container"
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repo-image"
                src={
                  repo.url
                    .replace("github.com", "raw.githubusercontent.com")
                    .replace("/blob/", "/") +
                  "/main/" +
                  repo.name +
                  ".png"
                }
                alt={repo.name + " banner photo"}
              />
              <p className="repo-name">{repo.name}</p>
              <p className="repo-desc">{repo.desc}</p>
              <p className="repo-update">Last Updated: {repo.updated}</p>
            </a>
          </li>
        ))}
      </ul>
      {content}
    </div>
  );
}
