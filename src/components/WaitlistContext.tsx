import { createContext, useContext, useState, type ReactNode } from "react";
import WaitlistModal from "./WaitlistModal";

interface WaitlistContextType {
  openWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const useWaitlist = () => {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used within WaitlistProvider");
  return ctx;
};

export const WaitlistProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WaitlistContext.Provider value={{ openWaitlist: () => setIsOpen(true) }}>
      {children}
      <WaitlistModal open={isOpen} onOpenChange={setIsOpen} />
    </WaitlistContext.Provider>
  );
};
