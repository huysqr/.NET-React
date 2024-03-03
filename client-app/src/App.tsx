import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState([]);
  var s = "http://localhost:5079";
  useEffect(() => {
    axios.get(s + "/BaseApi").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
