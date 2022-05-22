export interface  Event {
    companyName: string
    projects: 
      {
        projectName: string,
        skillSets: string[],
        duration: string,
      }[],
    direction: "left" | "right",
    location: string,
    designation: string,
    startTime : string,
    endTime : string,
    eventSrNumber : number
  };