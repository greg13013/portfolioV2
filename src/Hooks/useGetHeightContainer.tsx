import React from "react";

const useGetHeightContainer = (idContainer: string) => {
  const [hauteur, setHauteur] = React.useState(screen.height);

  React.useEffect(() => {
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const resizeListener = () => {
    if (document.querySelector<HTMLElement>(`#${idContainer}`)) {
      // const height =
      //   window.innerHeight -
      //   document.querySelector<HTMLElement>(`#${idContainer}`)!.getBoundingClientRect().top;
      setHauteur(window.innerHeight);
    }
  };

  React.useEffect(() => {
    if (document.querySelector<HTMLElement>(`#${idContainer}`)) {
      resizeListener();
    }
  }, []);

  return [hauteur] as const;
};

export default useGetHeightContainer;
