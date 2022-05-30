export interface  Event {
    id : string,
    companyName: string
    projects: 
      {
        projectName: string,
        skillSets:  {skill : string,color : string}[],
        duration: string,
      }[],
    direction: "left" | "right",
    location: string,
    designation: string,
    startTime : string,
    endTime : string,
    eventSrNumber : number
  };