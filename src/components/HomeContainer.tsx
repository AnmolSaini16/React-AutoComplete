import AutoComplete from "./autocomplete/AutoComplete";
import { top100Films } from "./dummyData";
import "./HomeContainer.styles.css";

const HomeContainer = () => {
  return (
    <div className="home">
      <AutoComplete
        options={top100Films?.map((item: any) => item.label)}
        placeholder="Search top movies..."
      />
    </div>
  );
};

export default HomeContainer;
