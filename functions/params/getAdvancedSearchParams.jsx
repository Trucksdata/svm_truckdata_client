import React from "react";

const getAdvancedSearchParams = (sideParams) => {
  const hasMinPrice = !!sideParams?.price?.min && sideParams?.price?.min !== "";
  const hasMaxPrice = !!sideParams?.price?.min && sideParams?.price?.max !== "";
  console.log(sideParams, 'sPPP')
  const advancedParams = {
    ...(hasMinPrice &&
      hasMaxPrice && {
        price: [sideParams?.price?.min, sideParams?.price?.max]?.join(","),
      }),
    ...(sideParams?.loading_capacity_spec_id &&
      sideParams?.loading_capacity != 0 && {
        loading_capacity: [
          sideParams?.loading_capacity_spec_id,
          sideParams?.loading_capacity?.min,
          sideParams?.loading_capacity?.max,
        ]?.join(","),
      }),
    ...(sideParams?.variant_options_spec_id &&
      sideParams?.variant_options != "" && {
        variant_options: [
          sideParams?.variant_options_spec_id,
          sideParams?.variant_options,
        ]?.join(","),
      }),
    ...(sideParams?.chassis_option_spec_id &&
      sideParams?.chassis_option != "" && {
        chassis_options: [
          sideParams?.chassis_option_spec_id,
          String(sideParams?.chassis_option),
        ]?.join(","),
      }),
    ...(sideParams?.status_spec_id &&
      sideParams?.status != "" && {
        chassis_options: [sideParams?.status_spec_id, sideParams?.status]?.join(
          ","
        ),
      }),
    ...(sideParams?.[`Number Of Tyres_spec_id`] &&
      sideParams?.[`Number Of Tyres`] != "" && {
        number_of_tyres: [
          sideParams?.[`Number Of Tyres_spec_id`],
          sideParams?.[`Number Of Tyres`],
        ]?.join(","),
      }),

    ...(sideParams?.payload_range_spec_id &&
      !(
        sideParams?.payload_range?.min === 60 &&
        sideParams?.payload_range?.max === 60000
      ) && {
        payload_range: [
          sideParams?.payload_range_spec_id,
          sideParams?.payload_range?.min,
          sideParams?.payload_range?.max,
        ]?.join(","),
      }),
    ...(sideParams?.axle_configuration_spec_id &&
      sideParams?.axle_configuration !== 0 && {
        axle_configuration: [
          sideParams?.axle_configuration_spec_id,
          sideParams?.axle_configuration,
        ]?.join(","),
      }),
  };

  return advancedParams;
};

export default getAdvancedSearchParams;
