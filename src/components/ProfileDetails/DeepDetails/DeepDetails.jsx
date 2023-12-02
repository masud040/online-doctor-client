import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Overview/Overview";
import Locations from "./Locations/Locations";
import Reviews from "./Reviews/Reviews";
import BusinessHour from "./BusinessHour/BusinessHour";

const DeepDetails = ({ doctorDetails }) => {
  return (
    <div className=" mt-8 bg-slate-100 p-4 text-gray-700 rounded-md">
      <Tabs selectedTabClassName="bg-rose-400 rounded-t-lg">
        <TabList className="flex justify-between text-lg font-semibold">
          <Tab>Overview</Tab>
          <Tab>Locations</Tab>
          <Tab>Reviews</Tab>
          <Tab>Business Hours</Tab>
        </TabList>

        <TabPanel>
          <Overview about={doctorDetails?.details?.about} />
        </TabPanel>
        <TabPanel>
          <Locations />
        </TabPanel>
        <TabPanel>
          <Reviews reviews={doctorDetails?.details?.reviews} />
        </TabPanel>
        <TabPanel>
          <BusinessHour />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DeepDetails;
