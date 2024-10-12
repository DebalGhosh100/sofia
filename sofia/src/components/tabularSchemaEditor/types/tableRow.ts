export type TableColumn = {
  // This width refers to the %age of the
  // parent component that this row
  width: number;
  heading: JSX.Element | React.ReactNode | string;
  body: JSX.Element | React.ReactNode | string;
};

export type TableColumns = TableColumn[];
