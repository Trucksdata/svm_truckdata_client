const grossTableData = [
  {
    item: "Loading Span (ft) / Loading Capacity (Cu.M)",
    option_one: "15",
    option_two: "17",
    option_three: "20.1",
    option_four: "20.9",
  },
  {
    item: "Wheel Base (mm)",
    option_one: "3360",
    option_two: "3760",
    option_three: "4250",
    option_four: "4800",
  },
  {
    item: "Cabin Type",
    option_one: "Day cabin",
    option_two: "Day cabin",
    option_three: "Day cabin",
    option_four: "Day cabin",
  },
  {
    item: "Gross Vehicle Weight (Kg)",
    option_one: "11125",
    option_two: "11125",
    option_three: "11125",
    option_four: "11125",
  },
  {
    item: "Kerb Weight (Range) (Kg)",
    option_one: "3475",
    option_two: "3555",
    option_three: "3600",
    option_four: "3680",
  },
  {
    item: "Payload  (Kg)",
    option_one: "7650",
    option_two: "7570",
    option_three: "7525",
    option_four: "7445",
  },
];

const engineSpecData = [
  {
    item: "Engine Model",
    option_one: "4D34i",
  },
  {
    item: "Maximum Power (KW)",
    option_one: "125 kW @ 2500 rpm",
  },
  {
    item: "Maximum Torque (N-m)",
    option_one: "520 Nm @ 1200 - 1600 rpm",
  },
  {
    item: "No Of Cylinders, Displacement (cc)",
    option_one: "4, 3900",
  },
  {
    item: "Emission Standard",
    option_one: "Bharat Stage VI - OBD-2",
  },
  {
    item: "Power Source",
    option_one: "Diesel",
  },
  {
    item: "Engine Control",
    option_one: "Forward control",
  },
];

const transmissionSpecData = [
  {
    item: "Gear Box Model",
    option_one: "G85",
  },
  {
    item: "Type",
    option_one: "Mechanical, Synchromesh type",
  },
  {
    item: "No. of Gears",
    option_one: "6 Forward + 1 reverse",
  },
  {
    item: "Clutch Type",
    option_one: "Dry - Single plate, Hydraulic actuated",
  },
  {
    item: "Clutch Diameter (mm)",
    option_one: "362",
  },
  {
    item: "Power Take Off (PTO Provision)",
    option_one: "No Provision",
  },
];

const chasisSpecData = [
  {
    item: "Frame size (mm)",
    option_one: "228 x 80 x 6",
  },
  {
    item: "Front Suspension",
    option_one:
      "Multileaf Spring, 2 Nos Hydraulic Telescopic double acting Shock absorber, Anti roll bar",
  },
  {
    item: "Rear Suspension",
    option_one: "Multileaf Spring, Anti roll bar-Optional",
  },
];

const steeringSpecData = [
  {
    item: "Steering Type",
    option_one: "Power assisted – Hydraulic, 400mm Steering wheel dia",
  },
  {
    item: "Service Brake",
    option_one: "Pneumatic, Foot Operated, Dual Line Non - ABS",
  },
  {
    item: "Parking Brake",
    option_one: "Spring Actuated with Hand Brake Valve @ cab",
  },
  {
    item: "Front Brake Size (mm)",
    option_one: "Ø 325 drum",
  },
  {
    item: "Rear Brake Size (mm)",
    option_one: "Ø 325 drum",
  },
];

const tyreSpecData = [
  {
    item: "Tyre Size",
    option_one: `Radial / Cross Ply tyres - 8.25x16, 16PR / 8.25R16,16PR 
      Tubeless tyres - 235/75R17.5, 14 PR &`,
  },
  {
    item: "No of Axle (Nos)",
    option_one: "4",
  },
  {
    item: "No of Tyres (Nos)",
    option_one: "6 + 1 Steppeny",
  },
  {
    item: "Front Track (mm)",
    option_one: "1790",
  },
  {
    item: "Rear Track (mm)",
    option_one: "1690",
  },
];

const cabinSpecData = [
  {
    item: "Cabin Type",
    option_one: "Day cabin",
  },
  {
    item: "Seating Capacity",
    option_one: "Driver+2",
  },
  {
    item: "System Voltage (V )",
    option_one: "24V",
  },
  {
    item: "Battery Rating (Ah)",
    option_one: "75Ah",
  },
  {
    item: "Alternator",
    option_one: "-",
  },
];

const enduranceSpecData = [
  {
    item: "Maximum Geared Speed (Kmph)",
    option_one: "80 kmph (Limited through SLF)",
  },
  {
    item: "Maximum Gradeability (%)",
    option_one: "37.6%",
  },
  {
    item: "TCD (m)",
    option_one: "13.4 m, 13.8 m, 15.7 m, 17.6 m",
  },
];

const otherSpecData = [
  {
    item: "Air Conditioning",
    option_one: "-",
  },
];

export const getSpecData = () => {
  const specContent = [
    {
      id: "one",
      collapseTarget: "One",
      title:
        "GVW, Kerb, Payload & Vehicle Dimensions (mm), All Dimensions are for cab & chassis (CBC)",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      hasVariant: true,
      tableData: grossTableData,
      icon: "/icons/delivery-truck.png",
      specId: 1,
    },
    {
      id: "two",
      collapseTarget: "Two",
      title: "Engine Specification",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      tableData: engineSpecData,
      icon: "/icons/engine.png",
      specId: 2,
    },
    {
      id: "three",
      collapseTarget: "Three",
      title: "Transmission",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      tableData: transmissionSpecData,
      icon: "/icons/transmissions.svg",
      specId: 3,
    },
    {
      id: "four",
      collapseTarget: "Four",
      title: "Chassis Frame & Suspension",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      tableData: chasisSpecData,
      icon: "/icons/suspension.png",
      specId: 4,
    },
    {
      id: "five",
      collapseTarget: "Five",
      title: "Steering & Braking",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      tableData: steeringSpecData,
      icon: "/icons/braking.png",
      specId: 5,
    },
    {
      id: "six",
      collapseTarget: "Six",
      title: "Tyre Size",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      tableData: tyreSpecData,
      icon: "/icons/wheels.png",
      specId: 6,
    },
    {
      id: "seven",
      collapseTarget: "Seven",
      title: "Cabin & Electrical",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      tableData: cabinSpecData,
      icon: "/icons/electric-truck.png",
      specId: 7,
    },
    {
      id: "eight",
      collapseTarget: "Eight",
      title: "Endurance",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      tableData: enduranceSpecData,
      icon: "/icons/endurance.png",
      specId: 8,
    },
    {
      id: "nine",
      collapseTarget: "Nine",
      title: "Other Features",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      tableData: otherSpecData,
      icon: "/icons/tipper.png",
      specId: 9,
    },
    {
      id: "ten",
      collapseTarget: "Ten",
      title: "Applications",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      icon: "/icons/pick-up-truck.png",
      specId: 10,
    },
  ];

  return specContent;
};
