

export const routerFactory = {
    home : () => "/home",
    homeRoute : "/home", 
    skill : (skillId?: string) => `/skill/${skillId || "CS"}`,
    skillRoute : `/skill/:skillid`
}