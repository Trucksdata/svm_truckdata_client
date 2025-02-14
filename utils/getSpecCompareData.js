import numeral from "numeral";
function getBasicTableData(datas) {
  const basicTableData = [
    {
      item: "Manufacturer Name",
      option_1: [{ value: datas?.[0]?.manufacturer?.name ?? "-" }] ?? "-",
      option_2: [{ value: datas?.[1]?.manufacturer?.name ?? "-" }] ?? "-",
      option_3: [{ value: datas?.[2]?.manufacturer?.name ?? "-" }] ?? "-",
    },
    {
      item: "Power Source",
      option_1: [{ value: datas?.[0]?.energy_source?.name ?? "-" }],
      option_2: [{ value: datas?.[1]?.energy_source?.name ?? "-" }],
      option_3: [{ value: datas?.[2]?.energy_source?.name ?? "-" }],
    },
    {
      item: "Category",
      option_1: [{ value: datas?.[0]?.category_name ?? "-" }],
      option_2: [{ value: datas?.[1]?.category_name ?? "-" }],
      option_3: [{ value: datas?.[2]?.category_name ?? "-" }],
    },
    {
      item: "Min-Price",
      option_1: [
        {
          value: datas?.[0]?.min_price
            ? `₹${
                numeral(Math.floor(datas?.[0]?.min_price) / 100000).format(
                  "0,0.00"
                ) + " lakh"
              }`
            : "-",
        },
      ],
      option_2: [
        {
          value: datas?.[1]?.min_price
            ? `₹${
                numeral(Math.floor(datas?.[1]?.min_price) / 100000).format(
                  "0,0.00"
                ) + " lakh"
              }`
            : "-",
        },
      ],
      option_3: [
        {
          value: datas?.[2]?.min_price
            ? `₹${
                numeral(Math.floor(datas?.[2]?.min_price) / 100000).format(
                  "0,0.00"
                ) + " lakh"
              }`
            : "-",
        },
      ],
    },
    {
      item: "Max-Price",
      option_1: [
        {
          value: datas?.[0]?.max_price
            ? `₹${
                numeral(Math.floor(datas?.[0]?.max_price) / 100000).format(
                  "0,0.00"
                ) + " lakh"
              }`
            : "-",
        },
      ],
      option_2: [
        {
          value: datas?.[1]?.max_price
            ? `₹${
                numeral(Math.floor(datas?.[1]?.max_price) / 100000).format(
                  "0,0.00"
                ) + " lakh"
              }`
            : "-",
        },
      ],
      option_3: [
        {
          value: datas?.[2]?.max_price
            ? `₹${
                numeral(Math.floor(datas?.[2]?.max_price) / 100000).format(
                  "0,0.00"
                ) + " lakh"
              }`
            : "-",
        },
      ],
    },
  ];

  return basicTableData;
}

function getIcon(index) {
  const icons = {
    1: "/icons/delivery-truck.png",
    2: "/icons/engine.png",
    3: "/icons/transmissions.svg",
    4: "/icons/suspension.png",
    5: "/icons/braking.png",
    6: "/icons/wheels.png",
    7: "/icons/electric-truck.png",
    8: "/icons/endurance.png",
    9: "/icons/tipper.png",
    10: "/icons/pick-up-truck.png",
  };

  return icons[index] || "/icons/pick-up-truck.png";
}

function getCollapseTarget(index) {
  const collapseTarget = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
  };

  return collapseTarget[index] || `Number${index}`;
}

function itemInFormat(data, isViewPage) {
  return data?.map((item) => {
    // Extract values from the item
    const values = item?.values?.map((obj) => obj?.value) || [];

    // Create dynamic options object
    const options = {};
    values.forEach((value, index) => {
      options[`option_${index + 1}`] = value || "-";
    });

    // // Conditionally add extra options if isViewPage is true
    // if (isViewPage) {
    //   for (let i = values.length; i < 5; i++) {
    //     options[`option_${i + 1}`] = "-";
    //   }
    // }

    // Return the final formatted object
    return {
      item: item?.item,
      ...options,
    };
  });
}

function getTableData(id, specifications, compareData, isViewPage) {
  function matchAndGenerateOutput(firstArray, secondArray) {
    const output = [];
    if (!isViewPage) {
      secondArray?.forEach((obj, index) => {
        obj?.vehicle_specs?.forEach((spec) => {
          const matchingItem = firstArray.find(
            (item) => item.item === spec?.specification?.name
          );

          if (matchingItem) {
            const existingItem = output.find(
              (outputItem) => outputItem.item === matchingItem.item
            );

            if (existingItem) {
              if (!existingItem.option_1 && index === 0) {
                existingItem.option_1 = spec?.values ?? "-";
              } else if (!existingItem.option_2 && index === 1) {
                existingItem.option_2 = spec?.values ?? "-";
              } else if (!existingItem.option_3 && index === 2) {
                existingItem.option_3 = spec?.values ?? "-";
              }
            } else {
              const newItem = {
                item: matchingItem.item,
                ...(index === 0 && { option_1: spec?.values ?? "-" }),
                ...(index === 1 && { option_2: spec?.values ?? "-" }),
                ...(index === 2 && { option_3: spec?.values ?? "-" }),
              };
              output.push(newItem);
            }
          }
        });
      });
    } else {
      secondArray?.forEach((obj) => {
        obj?.vehicle_specs?.forEach((spec) => {
          const match = firstArray.find(
            (item) => item.item === spec?.specification?.name
          );
          if (match && spec?.values !== null) {
            const newItem = {
              item: match?.item,
              values: spec?.values,
            };
            for (let i = 2; i <= 5; i++) {
              const optionKey = `option_${i}`;
              if (spec[optionKey]) {
                newItem[optionKey] = spec[optionKey];
              }
            }

            output.push(newItem);
          }
        });
      });
    }

    return output;
  }

  const data = specifications?.map((spec) => {
    if (spec?.specification_category_id === id) {
      return {
        item: spec?.name,
      };
    }
  });
  const itemData = matchAndGenerateOutput(data, compareData);
  const dataSet = itemInFormat(itemData, isViewPage);

  return isViewPage ? dataSet : itemData;
}

export const getSpecCompareData = (compareData, specCategory, isViewPage) => {
  const specContent = [
    {
      id: 1,
      collapseTarget: "Zero",
      title: "Basic Information",
      hasVariant: isViewPage ? false : true,
      tableData: getBasicTableData(compareData),
      icon: "/icons/delivery-truck.png",
    },
    ...(specCategory &&
      specCategory?.map((spec, index) => {
        const tableData = getTableData(
          spec?.id,
          spec?.specifications,
          compareData,
          isViewPage
        );

        return {
          id: spec?.id,
          title: spec?.name,
          icon: getIcon(index + 1),
          hasVariant: isViewPage && spec?.id !== 1 ? false : true,
          tableData: tableData,
          collapseTarget: getCollapseTarget(index),
        };
      })),
  ];

  if (isViewPage) {
    let appItemIndex = specContent.findIndex((x) => x.title == "Applications");
    if (appItemIndex > 0) {
      let matchingItem = compareData[0]?.vehicle_specs?.find(
        (spec) => spec?.specification?.name == "Applications"
      );
      if (matchingItem && matchingItem.values?.length > 0) {
        let _tableData = [];
        matchingItem.values?.map((x, index) => {
          _tableData.push({
            item: "Application " + `${index + 1}`,
            option_1: x.value,
          });
        });
        specContent[appItemIndex].tableData = _tableData;
      }
    }
  } else if (specContent.findIndex((x) => x.title == "Applications") > 0) {
    let appItemIndex = specContent.findIndex((x) => x.title == "Applications");
    let contentItem = specContent[appItemIndex]?.tableData[0];
    let _tableData = [];
    const keys = contentItem && Object.keys(contentItem);
    if (keys?.length > 0) {
      let itemKey = keys[0];
      const maxLength = keys.reduce((max, key) => {
        if (Array.isArray(contentItem[key])) {
          return Math.max(max, contentItem[key].length);
        }
        return max;
      }, 0);
      for (let i = 0; i < maxLength; i++) {
        const entry = {
          item: `Application ${i + 1}`,
        };

        // Loop through all keys to add array elements dynamically
        keys.forEach((key) => {
          if (Array.isArray(contentItem[key])) {
            entry[`${key}`] = [contentItem[key][i] || null];
          }
        });
        _tableData.push(entry);
      }
      specContent[appItemIndex].tableData = _tableData;
    }
  }

  return specContent;
};
