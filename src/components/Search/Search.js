import "./Search.scss";
function Search({ city, setCity, setLocation, onClickHandler }) {
  return (
    <div>
      <h1 className="heading">Weather Widget</h1>
      <div className="container">
        <div className="inline-input">
          <i class="fa fa-search fa-2x"></i>
          <input
            className="location-input"
            type="text"
            placeholder="Search for a city"
            onKeyDown={(e) => {
              e.key == "Enter" && setLocation(city);
            }}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default Search;
