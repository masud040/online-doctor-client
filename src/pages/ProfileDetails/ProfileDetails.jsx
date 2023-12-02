import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import Container from "../../components/Shared/Container";
import BasicDetails from "../../components/ProfileDetails/BasicDetails/BasicDetails";
import DeepDetails from "../../components/ProfileDetails/DeepDetails/DeepDetails";

const ProfileDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: doctorDetails } = useQuery({
    queryKey: ["doctor", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/doctor/${id}`);
      return data;
    },
  });

  return (
    <Container>
      <div>
        <BasicDetails doctorDetails={doctorDetails} />
        <DeepDetails doctorDetails={doctorDetails} />
      </div>
    </Container>
  );
};

export default ProfileDetails;
