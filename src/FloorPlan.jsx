import Kitchen from "./kitchen/Kitchen"
import LivingRoom from "./livingRoom/LivingRoom"
import Bedroom from "./bedrooms/Bedroom"
import Bathroom from "./bathrooms/Bathroom"

const FloorPlan = (props) => {
  return ( 
    <div>
      <Bedroom bedNum = '1'/>
      <Kitchen />
      <LivingRoom />
      <Bathroom size = 'Half'/>
      <Bedroom bedNum = '2'/>
      <Bedroom bedNum = '3'/>
      <Bathroom size = 'Full'/>
    </div>
  );
}


export default FloorPlan;