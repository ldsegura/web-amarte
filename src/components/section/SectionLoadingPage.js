"use client"
// import { ContainerCustom } from "../../components/ui/Containers";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslations } from "next-intl";
import Logo from "../../assets/logo.png";

const SectionLoadingPage = (props) => {
    const { title, disableLink } = props;
    const textWebsite = useTranslations("website");

    return (<div className="not-found-container container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 text-center default-page vh-100 align-items-center d-flex">
                    <div className="card border-0 text-center d-block p-0 bg-transparent m-auto">
                        <LazyLoadImage src={Logo.src} alt={`logo ${process.env.NEXT_PUBLIC_SITENAME}`} className="w-80 mb-4 ms-auto me-auto pt-md-5" />
                        <p className="text-grey-500 font-xsss">{title}</p>
                        {!disableLink && (
                            <Link
                                href={`/`}
                                className="p-3 w175 bg-current d-inline-block text-center fw-600 font-xssss rounded-3 text-uppercase ls-3">
                                {textWebsite("go-home")}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
    </div>);
}

export default SectionLoadingPage;