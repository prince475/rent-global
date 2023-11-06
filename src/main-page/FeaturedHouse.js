import House from "../house";

// we expect a prop (houser) which of cos will be our object 

const FeaturedHouse = ({ house}) => {
  if (house)
  return (
      <div>
        <div className="row featuredHouse">
          <h3 className="col-md-12 text-center">Featured House</h3>
        </div>
        <House house={house} />
      </div>
  );
  return <div>No featured house at this time</div>
}
 
export default FeaturedHouse;