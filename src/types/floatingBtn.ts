export interface FloatingBtnTabProps {
  activeFilters: {
    paid: boolean;
    free: boolean;
    onStreet: boolean;
    offStreet: boolean;
    available: boolean;
  };
  setActiveFilters: React.Dispatch<
    React.SetStateAction<{
      paid: boolean;
      free: boolean;
      onStreet: boolean;
      offStreet: boolean;
      available: boolean;
    }>
  >;
}
