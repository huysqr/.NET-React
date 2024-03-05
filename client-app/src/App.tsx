import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);
  var s = "http://localhost:5079";
  useEffect(() => {
    axios.get(s + "/Reactivities").then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as={"h2"} icon={"user"} content="Reactivities" />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
