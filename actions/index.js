export const fetchAllParticipants = async () => {
  try {
    const response = await fetch("api/participants/all", {next:{
      cache: 'no-cache', // don't cache
    }});
    const data = await response.json();
    //console.logdata.allParticipants, " are all participants");
    return data.allParticipants;
  } catch (error) {
    console.log(error);
  }
};
