export const select=(insurance) => {

  return {
    type: 'INSURANCE_SELECTED',
    payload: insurance
  }
};
