import { MdOutlineMessage } from "react-icons/md";

export default function SlpCard({
  openDiv,
  onOpenDivChange,
  onItemNoChange, // assuming this is a function to update the item number in the main page
  categories = [
    {
      id: 1,
      title:
        "Description",
      content: `
      How to avail assistance from the Assistance to Individuals in
           
    `,
    },
    {
      id: 2,
      title:
        "What are the requirements?",
      content: `
      How to avail assistance from the Assistance to Individuals in
           
    `,
    },
    {
      id: 3,
      title:
        "Who can avail?",
      content: `
      How to avail assistance from the Assistance to Individuals in
           
    `,
    },
  ],
}) {
  const handleButtonClick = (categoryId) => {
    onOpenDivChange(false);
    onItemNoChange(categoryId);
  };

  return (
    <>
      {categories.map((category) => (
        <div key={category.id}>
          <div
            onClick={() => handleButtonClick(category.id)}
            className={`${
              openDiv ? "w-full" : ""
            }  mx-14 border-b-2  text-gray-600 items-center justify-between p-3 hover:cursor-pointer hover:text-red-900 font-semibold md:text-2xl  lg:flex flex-row`}
          >
            <p>{category.title}</p>
            <MdOutlineMessage
              className={`${
                openDiv ? "hidden lg:flex" : "hidden"
              } text-4xl text-red-900 `}
            />
          </div>

          <main
            className={`${
              openDiv ? "block" : "hidden"
            } description md:hidden flex flex-col lg:w-2/3 w-full mt-5 md:mt-2`}
          >
            {categories.map((item) =>
              item.id === category.id ? (
                <div
                  key={item.id}
                  className="fixed max-w-5xl flex flex-row gap-3 items-start justify-start"
                >
                  <MdOutlineMessage
                    className={`${
                      openDiv ? "hidden" : "block"
                    } ml-auto text-2xl text-red-900`}
                  />
                  <div className={`${openDiv ? "hidden" : "block"} `}>
                    <p key={item.id}>{item.content}</p>
                  </div>
                </div>
              ) : null
            )}
          </main>
        </div>
      ))}
    </>
  );
}
