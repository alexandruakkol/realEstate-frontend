function compute(submitted) {
  let {
    neighPrice,
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

  metro = parseInt(metro);

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
  const no_central_adj_rent = 0.88;
  const no_central_adj_cash = -1800;

  let MixedAdjustment = 0;
  const mixed_adj = 1.04;

  let RehabAdjustment = 0;
  const rehab_adj = 1.1;

  let baseValuation = area * neighPrice;
  console.log("Base valuation is: ", baseValuation);

  switch (true) {
    case metro < 400:
      MetroAdjustment = baseValuation * closeM_adj - baseValuation;
      break;
    case metro < 800:
      MetroAdjustment = baseValuation * midM_adj - baseValuation;
      break;
    case metro < 1401:
      MetroAdjustment = baseValuation * farM_adj - baseValuation;
      break;
    case metro > 1400:
      MetroAdjustment = baseValuation * noM_adj - baseValuation;
      break;
    default:
      break;
  }

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
      break;
  }

  switch (condition) {
    case "shell":
      StateAdjustment = baseValuation * shell_adj - baseValuation;
      break;
    case "finished":
      StateAdjustment = baseValuation * finish_adj - baseValuation;
      break;
    case "turnkey":
      StateAdjustment = baseValuation * turnkey_adj - baseValuation;
      break;
    default:
      break;
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
      break;
  }

  if (!central) {
    if (mode === "Apartment for rent" || mode === "Studio for rent") {
      CentralAdjustment = baseValuation * no_central_adj_rent - baseValuation;
    } else {
      CentralAdjustment = no_central_adj_cash;
    }
  }
  if (mixed) {
    MixedAdjustment = baseValuation * mixed_adj - baseValuation;
  }
  if (rehab) {
    RehabAdjustment = baseValuation * rehab_adj - baseValuation;
  }

  let result =
    baseValuation +
    FloorAdjustment +
    YearAdjustment +
    MetroAdjustment +
    StateAdjustment +
    CentralAdjustment +
    MixedAdjustment +
    RehabAdjustment;
 
result = Math.trunc(result)
  return result;
}
export default compute;
