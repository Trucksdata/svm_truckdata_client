import { BiSolidFactory } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";

const dropdown = [
  {
    id: 1,
    tabItem: "Manufacturer",
    icon: "/icons/manufacture.png",
    iconWidth: "35px",
    dropdownItem: [
      {
        optionId: 1,
        title: "Manufacturer",
        name: "manufacturer",
        placeholder: "Select Manufacturer",
        icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
        items: [],
      },
      {
        optionId: 2,
        title: "Model",
        name: "model",
        placeholder: "Select Model",
        icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
        items: [
          {
            id: 1,
            name: "Model 1",
            // address: "Greater London, United Kingdom",
          },
          {
            id: 2,
            name: "Model 2",
            // address: "New York State, United States",
          },
          {
            id: 3,
            name: "Model 3",
            // address: "France",
          },
          {
            id: 4,
            name: "Model 4",
            // address: "Spain",
          },
          {
            id: 5,
            name: "Model 5",
            // address: "Greece",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    tabItem: "Body Type",
    icon: "/icons/big-truck.png",
    iconWidth: "45px",
    dropdownItem: [
      {
        optionId: 1,
        title: "Body Type",
        name: "bodytype",
        placeholder: "Select Body Type",
        icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
        items: [
          {
            id: 1,
            name: "Asok Leyland",
            // address: "Greater London, United Kingdom",
          },
          {
            id: 2,
            name: "Tata Motors",
            // address: "New York State, United States",
          },
          {
            id: 3,
            name: "Volvo",
            // address: "France",
          },
          {
            id: 4,
            name: "Eicher",
            // address: "Spain",
          },
          {
            id: 5,
            name: "Bharat Benz",
            // address: "Greece",
          },
        ],
      },
      {
        optionId: 2,
        title: "Manufacturer",
        name: "manufacturer",
        placeholder: "Select Manufacturer",
        icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
        items: [
          {
            id: 1,
            name: "Model 1",
            // address: "Greater London, United Kingdom",
          },
          {
            id: 2,
            name: "Model 2",
            // address: "New York State, United States",
          },
          {
            id: 3,
            name: "Model 3",
            // address: "France",
          },
          {
            id: 4,
            name: "Model 4",
            // address: "Spain",
          },
          {
            id: 5,
            name: "Model 5",
            // address: "Greece",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    tabItem: "Application",
    icon: "/icons/pick-up-truck.png",
    iconWidth: "45px",
    dropdownItem: [
      {
        optionId: 1,
        title: "Body Type",
        name: "bodytype",
        placeholder: "Select Body Type",
        icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
        items: [
          {
            id: 1,
            name: "Asok Leyland",
            // address: "Greater London, United Kingdom",
          },
          {
            id: 2,
            name: "Tata Motors",
            // address: "New York State, United States",
          },
          {
            id: 3,
            name: "Volvo",
            // address: "France",
          },
          {
            id: 4,
            name: "Eicher",
            // address: "Spain",
          },
          {
            id: 5,
            name: "Bharat Benz",
            // address: "Greece",
          },
        ],
      },
      {
        optionId: 2,
        title: "Model",
        name: "model",
        placeholder: "Select Model",
        icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
        items: [
          {
            id: 1,
            name: "Model 1",
            // address: "Greater London, United Kingdom",
          },
          {
            id: 2,
            name: "Model 2",
            // address: "New York State, United States",
          },
          {
            id: 3,
            name: "Model 3",
            // address: "France",
          },
          {
            id: 4,
            name: "Model 4",
            // address: "Spain",
          },
          {
            id: 5,
            name: "Model 5",
            // address: "Greece",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    tabItem: "G V W",
    icon: "/icons/weight.png",
    iconWidth: "45px",
    dropdownItem: [
      {
        optionId: 1,
        title: "G V W option",
        name: "gvw",
        placeholder: "Select Body Type",
        icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
        items: [
          {
            id: 1,
            name: "Asok Leyland",
            // address: "Greater London, United Kingdom",
          },
          {
            id: 2,
            name: "Tata Motors",
            // address: "New York State, United States",
          },
          {
            id: 3,
            name: "Volvo",
            // address: "France",
          },
          {
            id: 4,
            name: "Eicher",
            // address: "Spain",
          },
          {
            id: 5,
            name: "Bharat Benz",
            // address: "Greece",
          },
        ],
      },
      {
        optionId: 2,
        title: "Manufacturer",
        placeholder: "Select Model",
        name: "model",
        icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
        items: [
          {
            id: 1,
            name: "Model 1",
            // address: "Greater London, United Kingdom",
          },
          {
            id: 2,
            name: "Model 2",
            // address: "New York State, United States",
          },
          {
            id: 3,
            name: "Model 3",
            // address: "France",
          },
          {
            id: 4,
            name: "Model 4",
            // address: "Spain",
          },
          {
            id: 5,
            name: "Model 5",
            // address: "Greece",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    tabItem: "Power Source",
    icon: "/icons/diesel.png",
    name: "powersource",
    iconWidth: "25px",
    dropdownItem: [
      {
        optionId: 1,
        title: "Power Source",
        placeholder: "Select Body Type",
        icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
        items: [
          {
            id: 1,
            name: "Asok Leyland",
            // address: "Greater London, United Kingdom",
          },
          {
            id: 2,
            name: "Tata Motors",
            // address: "New York State, United States",
          },
          {
            id: 3,
            name: "Volvo",
            // address: "France",
          },
          {
            id: 4,
            name: "Eicher",
            // address: "Spain",
          },
          {
            id: 5,
            name: "Bharat Benz",
            // address: "Greece",
          },
        ],
      },
      {
        optionId: 2,
        title: "Manufacturer",
        name: "manufacturer",
        placeholder: "Select Model",
        icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
        items: [
          {
            id: 1,
            name: "Model 1",
            // address: "Greater London, United Kingdom",
          },
          {
            id: 2,
            name: "Model 2",
            // address: "New York State, United States",
          },
          {
            id: 3,
            name: "Model 3",
            // address: "France",
          },
          {
            id: 4,
            name: "Model 4",
            // address: "Spain",
          },
          {
            id: 5,
            name: "Model 5",
            // address: "Greece",
          },
        ],
      },
    ],
  },
];

export { dropdown };
