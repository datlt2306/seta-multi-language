import { useRouter } from "next/router";
import en from "../../public/lang/en.js";
import jp from "../../public/lang/jp.js";

const useTrans = () => {
    const { locale } = useRouter();
    return locale === "en" ? en : jp;
};

export default useTrans;
