import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import pagesContants from "../constants/pagesContants";

const useActiveLinkMenuHeader = () => {
    const pathname = usePathname();
    const [hasActiveLink, setHasActiveLink] = useState(false);

    useEffect(() => {
        let auxActive = 0;
        const pathnameLC = pathname.toLowerCase();
        if(pathnameLC.startsWith(`/${pagesContants.aboutUSES}`))
          auxActive = 1;
        else if(pathnameLC.startsWith(`/${pagesContants.mesaDirectivaES}`))
          auxActive = 2;
        else if(pathnameLC.startsWith(`/${pagesContants.amarteMexicoES}`))
          auxActive = 3;
        else if(pathnameLC.startsWith(`/${pagesContants.afiliateES}`))
          auxActive = 4;
        else if(pathnameLC.startsWith(`/${pagesContants.directoriosES}`))
          auxActive = 5;
        else if(pathnameLC.startsWith(`/${pagesContants.educationES}`))
          auxActive = 6;
        else if(pathnameLC.startsWith(`/${pagesContants.galeriaES}`))
          auxActive = 7;
        else if(pathnameLC.startsWith(`/${pagesContants.blogES}`))
          auxActive = 8;
        else if(pathnameLC.startsWith(`/${pagesContants.bolsaTrabajoES}`))
          auxActive = 9;
        else if(pathnameLC.startsWith(`/${pagesContants.contactoES}`))
          auxActive = 10;

        setHasActiveLink(auxActive);
      },[pathname]);

    return ( hasActiveLink );
}

export default useActiveLinkMenuHeader;