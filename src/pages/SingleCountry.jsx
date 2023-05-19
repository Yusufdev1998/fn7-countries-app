import axios from "axios";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleCountry = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();
  useEffect(() => {
    getSingleCountry(name);
  }, [name]);

  const getSingleCountry = async name => {
    try {
      const res = await axios({
        url: `https://restcountries.com/v3.1/alpha/${name}`,
      });

      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    } catch (error) {}
  };
  const nativProps = country && Object.keys(country.name.nativeName);
  const lastNative = country && country.name.nativeName[nativProps.at(-1)];

  const formatedPopulation = numeral(country?.population).format("0,0");
  let currencies = [];
  if (country) {
    for (const pul in country.currencies) {
      currencies.push(country.currencies[pul].name);
    }
  }
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="container px-4 mx-auto ">
      <div
        onClick={handleBack}
        className="inline-flex cursor-pointer mt-20 gap-[10px] items-center rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.293139)] py-[10px] px-[39px]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="call-made">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
              className="fill-[#111517] dark:fill-white"
            />
          </g>
        </svg>
        Back
      </div>

      <div className="mt-20 flex items-start gap-[120px] justify-between">
        <div className="h-full shadow-xl rounded-md overflow-hidden">
          <img src={country?.flags.svg} alt="flag" />
        </div>
        <div>
          <h2 className="font-extrabold text-2xl mb-6">
            {country?.name.common}
          </h2>
          <div className="flex gap-[141px]">
            <section>
              <div className="text-sm font-bold mb-2">
                Native Name:{" "}
                <span className="font-normal">{lastNative?.common}</span>
              </div>
              <div className="text-sm font-bold mb-2">
                Population:{" "}
                <span className="font-normal">{formatedPopulation}</span>
              </div>
              <div className="text-sm font-bold mb-2">
                Region: <span className="font-normal">{country?.region}</span>
              </div>
              <div className="text-sm font-bold mb-2">
                Sub Region:{" "}
                <span className="font-normal">{country?.subregion}</span>
              </div>
              <div className="text-sm font-bold mb-2">
                Capital:{" "}
                <span className="font-normal">
                  {country?.capital && country.capital[0]}
                </span>
              </div>
            </section>
            <section>
              <div className="text-sm font-bold mb-2">
                Top Level Domain:{" "}
                <span className="font-normal">{country?.tld.join(" ")}</span>
              </div>
              <div className="text-sm font-bold mb-2">
                Currencies:{" "}
                <span className="font-normal">{currencies.join(" ")}</span>
              </div>
              <div className="text-sm font-bold mb-2">
                Languages:{" "}
                <span className="font-normal">
                  {country &&
                    Object.keys(country.languages)
                      .map(key => country.languages[key])
                      .join(",")}
                </span>
              </div>
            </section>
          </div>

          <div className="mt-[70px]">
            <div className="text-sm font-bold mb-2 flex items-center gap-2">
              Border countries:{" "}
              <div className="flex gap-2 flex-wrap">
                {country?.borders?.map(border => (
                  <Link to={`/country/${border}`}>
                    <div className="py-2 font-thin px-[27px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.104931)] rounded-sm">
                      {border}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
