function compute(submitted) {
  const {
    neighPrice,
    price,
    area,
    year,
    mode,
    condition,
    floor,
    central,
    metro,
    mixed,
    rehab,
  } = submitted;

  //TODO make function for preferences
  // coefficients
  let FloorAdjustment = 0;
  const groundFloor_adj = 0.95;
  const lastFloor_adj = 0.95;

  let YearAdjustment = 0;
  const old1950_adj = 0.9;
  const y1950_1977_adj = 1;
  const y1977_1990_adj = 1.1;
  const y1990plus_adj = 1.1;

  let MetroAdjustment = 0;
  const closeM_adj = 1.08; //0->400m
  const midM_adj = 1.05; //400m-> 800m
  const farM_adj = 1; //800m -> 1400m
  const noM_adj = 0.9; //1400m+

  //TODO explain stages in frontend form
  let StateAdjustment = 0;
  const shell_adj = 0.75;
  const finish_adj = 0.99;
  const turnkey_adj = 1.03;

  let CentralAdjustment = 0;
  const central_adj = 0.975;

  let MixedAdjustment = 0;
  const mixed_adj = 1.04;

  let RehabAdjustment = 0;
  const rehab_adj = 1.12;

  let baseValuation = area * neighPrice;
  console.log("Base valuation is: ", baseValuation);

  switch (floor) {
    case "midFloor":
      FloorAdjustment = 0;
      break;
    case "lastFloor":
      FloorAdjustment = baseValuation * lastFloor_adj - baseValuation;
      break;
    case "groundFloor":
      FloorAdjustment = baseValuation * groundFloor_adj - baseValuation;
      break;
    default:
      return "error";
  }

  switch (year) {
    case "<1950":
      YearAdjustment = baseValuation * old1950_adj - baseValuation;
      break;
    case "1950-1977":
      YearAdjustment = baseValuation * y1950_1977_adj - baseValuation;
      break;
    case "1977-1990":
        YearAdjustment = baseValuation * y1977_1990_adj - baseValuation;
      break;
    case ">1990":
        YearAdjustment = baseValuation * y1990plus_adj - baseValuation;
      break;
    default:
      return "error";
  }

  const result =
    baseValuation +
    FloorAdjustment +
    YearAdjustment +
    MetroAdjustment +
    StateAdjustment +
    CentralAdjustment +
    MixedAdjustment +
    RehabAdjustment;

  return result;
}
export default compute;
