import { useEffect, useState } from "react";

export default function GithubSummary() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const userRes = await fetch(
          "https://api.github.com/users/beatricecoleene"
        );
        const reposRes = await fetch(
          "https://api.github.com/users/beatricecoleene/repos?per_page=100"
        );

        const user = await userRes.json();
        const repos = await reposRes.json();

        // Get commit count per repo (WARNING: rate limited)
        const commitPromises = repos.map((repo) =>
          fetch(
            `https://api.github.com/repos/beatricecoleene/${repo.name}/commits?per_page=1`
          )
            .then((res) => {
              const link = res.headers.get("link");
              if (!link) return 1;

              const match = link.match(/page=(\d+)>; rel="last"/);
              return match ? parseInt(match[1]) : 1;
            })
            .catch(() => 0)
        );

        const commitCounts = await Promise.all(commitPromises);
        const totalCommits = commitCounts.reduce((a, b) => a + b, 0);

        setStats({
          repos: user.public_repos,
          commits: totalCommits,
          totalProjects: repos.length,
          languages: new Set(repos.map((r) => r.language).filter(Boolean)).size,
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchGithubStats();
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-2 w-full h-full justify-center items-center p-2">

        <div className="flex flex-row w-full justify-around gap-2 items-center ">
            <div className=" w-full flex flex-col items-center justify-center  ">
                <p className="text-2xl font-bold font-electro">{stats.repos}</p>
                <p className="text-sm font-zen text-primary-light">Repositories</p>
            </div>

            <div className=" w-full flex flex-col items-center justify-center ">
                <p className="text-2xl font-bold font-electro ">{stats.commits}</p>
                <p className="text-sm font-zen text-primary-light">Total Commits</p>
            </div>
        </div>

        <div className="flex flex-row w-full justify-around gap-2 items-center">
            <div className=" w-full flex flex-col items-center justify-center">
                <p className="text-2xl font-bold font-electro">{stats.totalProjects}</p>
                <p className="text-sm font-zen text-primary-light">Projects</p>
            </div>

            <div className=" w-full flex flex-col items-center justify-center r">
                <p className="text-2xl font-bold font-electro">{stats.languages}</p>
                <p className="text-sm font-zen text-primary-light">Languages Used</p>
            </div>
        </div>
    </div>
  );
}