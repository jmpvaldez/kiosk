import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/image.png";

export default function PagAbotCard() {
  return (
    <div className=" bg-white rounded-lg mt-12 md:mt-2">
      <div className="flex flex-row ">
        {/* <Link href="#">
          <Image
            src={correct}
            width={400}
            height={200}
            objectFit="cover"
            alt="image"
          />
        </Link> */}
        <div className=" p-1 mb-0 font-normal text-black  bottom-0 w-full">
          <h1 className="text-orange text-amber-800 font-bold text-4xl mb-12">O-PLAN Pag-abot Project (REACH OUT) to Individuals and Families in Street Situations</h1>
          <p className="font-bold text-xl">
          "Pag-Abot," in the English language is to "reach out". From the name of the project itself, the project will reach out to vulnerable and disadvantaged individuals, children and families in street situations and welcome them either to: <br /><br />
          a. Place of origin or residences in provinces, municipalities, or cities near Metro Manila;<br />
          b. Temporary shelter or placement to long-term residential facilities and;<br />
          c. Permanent placement to a foster family or adoption for those children who may have been abandoned. <br /><br />

          The reach out operation is considered as the start of holistic intervention using a multidisciplinary approach on case management to keep off the streets the children, individuals and families in street situations.<br /><br />
          The project hopes that children, individuals and families will be protected from risks and vulnerabilities through regular conduct of planned reach-out operations and provision of services in transition homes and other community-based processing centers. Through these services/activities, children, individuals and families in street situations can access their rights to food, health, education, life skills, recreational activities, employment opportunities, housing among others towards the attainment of decent and dignified life.

          </p>
        </div>
      </div>
    </div>
  );
}

