import react from "react";
import GitHubCalendar from "react-github-calendar";

const GitHub = () => {
  return (
    <div style={{ color: "white" }}>
      <center>
        <h1>Github</h1>
      </center>
      <div
        className="react-activity-calendar"
        style={{ padding: "10px 0", width: "90%", margin: "auto" }}
      >
        <center>
          <GitHubCalendar username="gb751006" />
        </center>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "10px 0",
          width: "90%",
          margin: "auto",
        }}
      >
        <div className="github-stats">
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=gb751006"
            alt="GitHub Streak"
          />
        </div>
        <div className="github-stats">
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gb751006&layout=compact"
            alt="GitHub Streak Stats "
          />
        </div>
        <div className="github-stats">
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=gb751006&show_icons=true&"
            alt="GitHub Streak Stats "
          />
        </div>
      </div>
    </div>
  );
};

export default GitHub;
