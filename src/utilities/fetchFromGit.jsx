export default async function fetchAllRepositories() {
    try {
        const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

        const response = await fetch("https://api.github.com/users/kasej01/repos", {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
            },
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching repositories:", error);
        return [];
    }
}
