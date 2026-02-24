import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const DemoModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-cyan/60 text-cyan hover:bg-cyan/15 hover:border-cyan rounded-full px-8 h-12 text-base"
        >
          <Play className="w-4 h-4 mr-2" />
          Watch 2-Min Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-navy border-cyan/20">
        <DialogHeader>
          <DialogTitle className="font-display text-primary-foreground">See HireVector in Action</DialogTitle>
        </DialogHeader>
        <div className="aspect-video bg-navy-deep rounded-lg flex items-center justify-center border border-cyan/10">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-cyan/20 flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-cyan" />
            </div>
            <p className="text-primary-foreground/60 font-body text-sm">
              Demo video coming soon
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
