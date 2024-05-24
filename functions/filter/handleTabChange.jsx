export function handleTabChange(item, i, setCurrTab, specifications) {

  const tabName = item?.tabItem || item?.name;
  const isApplication = tabName === "Application";  
  const isGVW = tabName === "G V W";
  if (isApplication) {
    const application = specifications?.find(
      (spec) => spec?.name === "Applications"
    );
    return setCurrTab({ item: { ...item, spec_id: application?.id }, i });
  }
  if (isGVW) {
    const gvw = specifications?.find(
      (spec) => spec?.name === "Gross Vehicle Weight (Kg)"
    );
    
    return setCurrTab({ item: { ...item, spec_id: gvw?.id }, i });
  }
  setCurrTab({ item, i });
}
