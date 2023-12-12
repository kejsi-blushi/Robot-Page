import { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./Search";
import robots from "./robot";

const App = () => {
  const [searchfield, setSearchField] = useState("");

  const [data, setData] = useState(robots);

  const searchChange = (event) => {
    const updatedSearchField = event.target.value;
    setSearchField(updatedSearchField);
    setSearchField(event.target.value);

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(updatedSearchField.toLowerCase())
    );

    setData(filteredRobots);
  };

  console.log(searchfield);
  return (
    <div className="body-div">
      <h1>MY ROBOTS</h1>
      <div className="searchbox">
        <SearchBox searchfield={searchfield} searchChange={searchChange} />
      </div>
      <CardList data={data} />
    </div>
  );
};

export default App;
