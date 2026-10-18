export type CallKind = "incoming" | "missed" | "unanswered";

export type CallEntry = {
  id: string;
  kind: CallKind;
  type: "Incoming voice call" | "Missed voice call" | "Unanswered voice call";
  time: string;
  duration: string;
};

export type CallGroup = {
  date: string;
  calls: CallEntry[];
};

export type CallsData = {
  contact: {
    name: string;
    phone: string;
    avatar: string;
  };
  latestCall: {
    kind: CallKind;
    subtitle: string;
  };
  groups: CallGroup[];
};

export const callsData: CallsData = {
  contact: {
    name: "Maritza cliente HIVC",
    phone: "+1 (787) 810-3317",
    avatar: "/images/Maritza-cliente-HIVC.jpg",
  },
  latestCall: {
    kind: "incoming",
    subtitle: "September 9, 6:11 PM",
  },
  groups: [
    {
      date: "9/9/26",
      calls: [
        { id: "sep-1", kind: "incoming", type: "Incoming voice call", time: "10:40 AM", duration: "7 min" },
        { id: "sep-2", kind: "missed", type: "Missed voice call", time: "11:02 AM", duration: "—" },
        { id: "sep-3", kind: "unanswered", type: "Unanswered voice call", time: "11:12 AM", duration: "—" },
        { id: "sep-4", kind: "incoming", type: "Incoming voice call", time: "12:18 PM", duration: "5 min" },
        { id: "sep-5", kind: "unanswered", type: "Unanswered voice call", time: "3:46 PM", duration: "—" },
        { id: "sep-6", kind: "incoming", type: "Incoming voice call", time: "6:11 PM", duration: "4 min" },
      ],
    },
    {
      date: "8/4/26",
      calls: [
        { id: "aug-1", kind: "incoming", type: "Incoming voice call", time: "9:14 AM", duration: "5 min" },
        { id: "aug-2", kind: "unanswered", type: "Unanswered voice call", time: "9:52 AM", duration: "—" },
        { id: "aug-3", kind: "incoming", type: "Incoming voice call", time: "10:10 AM", duration: "6 min" },
        { id: "aug-4", kind: "unanswered", type: "Unanswered voice call", time: "1:27 PM", duration: "—" },
        { id: "aug-5", kind: "incoming", type: "Incoming voice call", time: "4:03 PM", duration: "8 min" },
      ],
    },
    {
      date: "7/27/26",
      calls: [
        { id: "jul27-1", kind: "incoming", type: "Incoming voice call", time: "1:06 PM", duration: "8 min" },
        { id: "jul27-2", kind: "missed", type: "Missed voice call", time: "2:17 PM", duration: "—" },
        { id: "jul27-3", kind: "unanswered", type: "Unanswered voice call", time: "3:21 PM", duration: "—" },
        { id: "jul27-4", kind: "incoming", type: "Incoming voice call", time: "5:38 PM", duration: "6 min" },
      ],
    },
    {
      date: "7/14/26",
      calls: [
        { id: "jul14-1", kind: "unanswered", type: "Unanswered voice call", time: "10:31 AM", duration: "—" },
        { id: "jul14-2", kind: "incoming", type: "Incoming voice call", time: "10:58 AM", duration: "4 min" },
        { id: "jul14-3", kind: "incoming", type: "Incoming voice call", time: "1:22 PM", duration: "7 min" },
        { id: "jul14-4", kind: "unanswered", type: "Unanswered voice call", time: "4:18 PM", duration: "—" },
      ],
    },
  ],
};
