import React from "react";
import { ArrowRight } from "lucide-react";

const OnboardingScreen = () => {
  return (
      <div className="relative h-screen w-full flex items-center justify-center bg-gray-200">
        {/* Image de fond */}
        <BackgroundImage src="https://images.unsplash.com/flagged/photo-1573585808609-26146616378d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        {/* Overlay avec le contenu */}
        <OverlayCard>
          <OnboardingText
              title="Get ready to be Excited"
              description="Millions of people have proven it, now it's your turn!"
          />
          <div className="flex justify-between items-center w-full mt-6">
            <SkipButton />
            <NextButton />
          </div>
        </OverlayCard>
      </div>
  );
};

const BackgroundImage = ({ src }: { src: string }) => (
    <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
    />
);

const OverlayCard = ({ children }: { children: React.ReactNode }) => (
    <div className="absolute bottom-10 left-5 right-5 bg-[#152233] p-6 rounded-3xl text-white">
      {children}
    </div>
);

const OnboardingText = ({
                          title,
                          description,
                        }: {
  title: string;
  description: string;
}) => (
    <div>
      <h2 className="text-lg font-bold text-green-400">{title}</h2>
      <p className="text-sm text-gray-300 mt-1">{description}</p>
    </div>
);

const SkipButton = () => (
    <button className="text-gray-400 text-xs uppercase tracking-wider">Skip</button>
);

const NextButton = () => (
    <button className="w-10 h-10 flex items-center justify-center bg-green-400 rounded-full">
      <ArrowRight className="text-white w-5 h-5" />
    </button>
);

export default OnboardingScreen;