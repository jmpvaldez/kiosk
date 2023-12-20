import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/newsicon.png";

export default function NewsCard() {
 
  return (

    <>
    <div className=" bg-white shadow-lg rounded-lg mt-12 md:mt-2">
      <div className="relative" >
        <Link href="#">
          <Image
            src={correct}
            width={200}
            height={200}
            objectFit="cover"
            alt="image"
          />
          <div className="p-2 mb-3 font-normal text-gray-700">
            <h2 className="font-bold text-4xl">
              DSWD CENTRAL VISAYAS AIDS STRANDED INDIVIDUALS DUE TO TS KABAYAN</h2>
            <p className="text-sm my-4 text-gray-500 font-semibold font-sans mx-4">Posted on December 19, 2023 by Social Marketing</p>
          <p className="my-4 mx-4">  Despite the downgrading of Tropical Storm TS Kabayan into a low pressure area, the Department of Social Welfare and Development DSWD, through its Field Offices, continues to assist individuals and families affected by the weather disturbance.</p>

            <p className="my-4 mx-4">In Central Visayas, the DSWD Field Office VII assisted the locally stranded individuals LSIs from Cebu City and from Dumaguete City, San Jose and Sibulan in Negros Oriental. The DSWD aid were in the form of ready-to-eat packs, family food packs, and bottled water.</p>
            <p className="my-4 mx-4">DSWD Assistant Secretary for Legislative Affairs and co-spokesperson Irene B. Dumlao assured all affected local government units LGUs that the agency will continue to monitor their situation.</p>
            <p className="my-4 mx-4">“Despite the downgrading of TS Kabayan, concerned DSWD FOs, through their SWAD team leaders, are maintaining close coordination with their local disaster counterparts to monitor their areas of responsibility and provide the necessary assistance such as request for augmentation, technical assistance, or deployment of equipment and Quick Response Team QRT members,” Asst. Sec. Dumlao said.</p>
            <p className="my-4 mx-4">As of December 18,  some 18,266 families or 59,493 persons in 152 barangays in Central Visayas Region, Northern Mindanao Region, Davao Region, and Caraga Region have been affected by the tropical storm.</p>
            <p className="my-4 mx-4">Of the total number, 15,754 families or 51,557 individuals are seeking refuge in 286 evacuation centers set up by the local government units LGUs in the said regions.</p>
            <p className="my-4 mx-4">Asst. Sec. Dumlao also assured the public that the DSWD has sufficient resources ready for augmentation to LGUs.</p>
            <p className="my-4 mx-4">“The Department has over Php95 million Quick Response Fund QRF at the DSWD Central Office and more than Php70 million available in all DSWD Field Offices.  Aside from funds, we also maintain more than 999,000 FFPs in strategic locations around the country. These resources can easily be tapped for augmentation to LGUs if the need arises,” the DSWD official said.#</p>
          </div>

        </Link>
      </div>
    </div>


    <div className=" bg-white shadow-lg rounded-lg mt-12 md:mt-2">
      <div className="relative" >
        <Link href="#">
          <Image
            src={correct}
            width={200}
            height={200}
            objectFit="cover"
            alt="image"
          />
          <div className="p-2 mb-3 font-normal text-gray-700">
            <h2 className="font-bold text-4xl uppercase">
            DSWD’s Oplan Pag-Abot keeps over 1.4K individuals safe from street hazards</h2>
            <p className="text-sm my-4 text-gray-500 font-semibold font-sans mx-4">Posted on December 19, 2023 by Social Marketing</p>
          <p className="my-4 mx-4"> The Department of Social Welfare and Development DSWD has so far reached out to some 1,461 individuals who are living and staying in the streets of Metro Manila through its Oplan Pag-Abot which was launched in July this year.</p>

            <p className="my-4 mx-4">As of December 18, the DSWD was able to reach out to 871 family members and 590 unattached individuals, including children and senior citizens, from different areas in the National Capital Region NCR, according to DSWD Asst. Secretary for Legislative Affairs Irene B. Dumlao.</p>
            <p className="my-4 mx-4">Of these individuals, 189 were given aid through the Assistance to Individuals in Crisis Situation AICS program, while 446 were assisted through the Balik Probinsya, Bagong Pag-Asa Program BP2.</p>
            <p className="my-4 mx-4">Some 878 reached-out individuals were referred to their respective local government units LGUs for appropriate interventions while some 583 are currently being provided with temporary residential care in DSWD-run Centers and Residential Care Facilities.</p>
            <p className="my-4 mx-4">“The social workers continue to roam around Metro Manila to ensure that the families and individuals in the streets will be convinced to come with us,” Asst. Sec. Dumlao, who is also the data privacy officer and the agency’s co-spokesperson, said.</p>
            <p className="my-4 mx-4">Asst. Sec. Dumlao noted that more than 1,500 individuals were profiled through the environment scanning activities conducted by the social workers before the actual reach-out operations.</p>
            <p className="my-4 mx-4">“Profiling is important to identify the areas that these families are seen more frequently,” the DSWD official said.</p>

            <p className="my-4 mx-4">For this holiday season, the DSWD strengthened the implementation of the project through the Oplan Pag-Abot sa Pasko to reach out to more families and individuals who flock to the streets to beg during this time.</p>
            <p className="my-4 mx-4">Oplan Pag-Abot is among the flagship programs of the DSWD, under the leadership of Secretary Rex Gatchalian, to help, support, and protect individuals and families living in the streets by providing them with appropriate interventions.#</p>
          </div>

        </Link>
      </div>
    </div>

    </>
      
    
  );
}
