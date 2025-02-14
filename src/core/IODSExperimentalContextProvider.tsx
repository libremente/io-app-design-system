import * as React from "react";
import { constVoid } from "fp-ts/lib/function";

type IOExperimentalContextType = {
  isExperimental: boolean;
  setExperimental: (isExperimental: boolean) => void;
};
/**
 * Experimental Context for new UI Representations
 */
const IOExperimentalDesignContext =
  React.createContext<IOExperimentalContextType>({
    isExperimental: false,
    setExperimental: constVoid
  });

export const useIOExperimentalDesign = () =>
  React.useContext(IOExperimentalDesignContext);

type IOExperimentalContextProviderProps = {
  isExperimentaEnabled?: boolean;
};

export const IODSExperimentalContextProvider = ({
  children,
  isExperimentaEnabled
}: React.PropsWithChildren<IOExperimentalContextProviderProps>) => {
  const [isExperimental, setExperimental] = React.useState(
    isExperimentaEnabled ?? false
  );

  return (
    <IOExperimentalDesignContext.Provider
      value={{ isExperimental, setExperimental }}
    >
      {children}
    </IOExperimentalDesignContext.Provider>
  );
};
