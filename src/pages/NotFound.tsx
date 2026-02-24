import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found — HireVector";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-navy-deep via-navy to-navy-deep">
      <div className="text-center px-4">
        <h1 className="font-display text-7xl font-extrabold text-cyan mb-4">404</h1>
        <p className="text-xl text-primary-foreground/70 font-body mb-8">
          This trajectory doesn't exist yet.
        </p>
        <Button asChild className="bg-cyan text-cyan-foreground hover:bg-cyan/90 font-bold rounded-full px-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
