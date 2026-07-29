export interface Opportunity {
  id: number;
  name: string;
  organiser: string;
  mode: string;
  location: string;
  date: string;
  deadline: string;
  committees: string[];
  fee: string;
  registration: string;
}


export const opportunities: Opportunity[] = [
  {
    id: 1,
    name: "Synapse Model United Nations 2.0",
    organiser: "Synapse Atlas",
    mode: "Online",
    location: "Virtual",
    date: "24-25 October 2026",
    deadline: "15 October 2026",
    committees: ["UNSC", "UNHRC", "AIPPM"],
    fee: "Paid",
    registration: "https://forms.gle/Fk1DMkDa7ke72N437",
  },
  {
    id: 2,
    name: "Bangalore International Model United Nations",
    organiser: "BIMUN",
    mode: "Offline",
    location: "Bangalore",
    date: "12 September 2026",
    deadline: "1 September 2026",
    committees: ["UNGA", "WHO"],
    fee: "Paid",
    registration: "#",
  },
  {
    id: 3,
    name: "Global Youth Summit MUN",
    organiser: "Youth Forum",
    mode: "Online",
    location: "Virtual",
    date: "5 November 2026",
    deadline: "25 October 2026",
    committees: ["UNICEF", "UNSC"],
    fee: "Free",
    registration: "#",
  },
];