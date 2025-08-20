import { cardData, cardOption, cards, flushCards } from "./UICardData";
import UnderlineTabs from "./UnderlineTabs";
import ButtonTabs from "./ButtonTabs";
import UIOptionTable from "../UIOptionTable";
function UICard() {
  return (
    <>
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Sink
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="rounded-lg shadow">
              <img src={card.image} alt={card.title} className="w-full" />

              <div className="p-6">
                <h3 className="text-[#253f4a] text-[17px] mb-2 font-bold">
                  {card.title}
                </h3>
                <p className="text-[#4b5675] text-sm">{card.description}</p>
              </div>

              <ul>
                {card.items.map((item, i) => (
                  <li
                    key={i}
                    className="px-6 py-4 text-[#4b5675] text-sm border-b border-gray-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="p-6 flex gap-4">
                {card.links.map((link, i) => (
                  <button
                    key={i}
                    className={`text-sm font-semibold py-2 px-5 transition-all duration-300 hover:rounded-full`}
                    style={{
                      color: link.color,
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.backgroundColor =
                        link.hoverBg)
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.backgroundColor =
                        "transparent")
                    }
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Navigation
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
          <UnderlineTabs />
          <ButtonTabs />
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Overlay
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            className="p-4 rounded-lg min-h-72"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(188, 26, 78) 0%, rgb(0, 79, 230) 100%)",
            }}
          >
            <h3 className="text-white text-[17px] mb-2">
              Gradient overlay card
            </h3>
            <p className="text-white text-sm mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="text-white text-sm mb-4">Last updated 3 mins ago</p>
          </div>
          <div className="p-4 rounded-lg min-h-72 bg-[url(/images/bg-card.jpg)] bg-no-repeat bg-cover bg-center">
            <h3 className="text-white text-[17px] mb-2">Image overlay card</h3>
            <p className="text-white text-sm mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="text-white text-sm mb-4">Last updated 3 mins ago</p>
          </div>
          <div className="relative p-4 rounded-lg min-h-72 bg-[url('/images/bg-card-1.jpg')] bg-no-repeat bg-cover">
            <div
              className="absolute inset-0 rounded-lg "
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 255, 0.75), rgba(255, 255, 0, 0.75))",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-white text-[17px] mb-2">
                Image with gradient card
              </h3>
              <p className="text-white text-sm mb-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-white text-sm mb-4">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Background
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="text-white rounded-lg"
              style={{ backgroundColor: card.bg }}
            >
              <div
                className="p-6 border-b"
                style={{ borderColor: card.border }}
              >
                Header
              </div>

              <div
                className="p-6 border-b"
                style={{ borderColor: card.border }}
              >
                <h3 className="text-[17px] mb-2">{card.title}</h3>
                <p className="text-sm">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>

              <div className="p-6">Footer</div>
            </div>
          ))}
        </div>
      </div>

        <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Flush
        </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
             {flushCards.map((card) => (
          <div key={card.id} className="shadow rounded-lg">
            <h3 className="p-6 text-[17px] text-[#252f4a] font-bold">
              {card.title}
            </h3>
            <p className="p-6 text-[#4B5675] text-sm">{card.description}</p>
            <div className="p-6 flex gap-4">
              <button className="text-sm font-semibold py-2 px-5 transition-all duration-300 hover:rounded-full text-[#3e97ff] hover:bg-[#3e97ff1a]">
                Card Link
              </button>
              <button className="text-sm font-semibold py-2 px-5 transition-all duration-300 hover:rounded-full text-[#d13b4c] hover:bg-[#d13b4c1a]">
                Card Link
              </button>
            </div>
          </div>
        ))}
          </div>
        </div>

        <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Background
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.slice(0,3).map((card) => (
            <div
              key={card.id}
              className="text-white rounded-lg hover:-translate-y-2 transition-all duration-300"
              style={{ backgroundColor: card.bg }}
            >
              <div
                className="p-6 border-b"
                style={{ borderColor: card.border }}
              >
                Header
              </div>

              <div
                className="p-6 border-b"
                style={{ borderColor: card.border }}
              >
                <h3 className="text-[17px] mb-2">{card.title}</h3>
                <p className="text-sm">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>

              <div className="p-6">Footer</div>
            </div>
          ))}
        </div>
      </div>

       <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Stretch
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="shadow rounded-lg flex flex-col justify-between">
            <div>
              <h4 className="p-6 border-b text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
            <div className="p-6">
              <h2 className="font-bold mb-2 text-[17px]">Height 100%</h2>
              <p className="text-sm text-[#4b5675]">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            </div>
             <h4 className="p-6 border-t text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
          </div>
          <div className="h-full flex flex-col">
            <div className="shadow rounded-lg flex flex-col justify-between mb-6 flex-1">
            <div>
              <h4 className="p-6 border-b text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
            <div className="p-6">
              <h2 className="font-bold mb-2 text-[17px]">Height 100%</h2>
              <p className="text-sm text-[#4b5675]">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            </div>
             <h4 className="p-6 border-t text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
          </div>
          <div className="shadow rounded-lg flex flex-col justify-between flex-1">
            <div>
              <h4 className="p-6 border-b text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
            <div className="p-6">
              <h2 className="font-bold mb-2 text-[17px]">Height 100%</h2>
              <p className="text-sm text-[#4b5675]">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            </div>
             <h4 className="p-6 border-t text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
          </div>
          </div>
          <div className="h-full flex flex-col">
            <div className="shadow rounded-lg flex flex-col justify-between mb-6 flex-1">
            <div>
              <h4 className="p-6 border-b text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
            <div className="p-6">
              <h2 className="font-bold mb-2 text-[17px]">Height 100%</h2>
              <p className="text-sm text-[#4b5675]">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            </div>
             <h4 className="p-6 border-t text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
          </div>
          <div className="shadow rounded-lg flex flex-col justify-between mb-6 flex-1">
            <div>
              <h4 className="p-6 border-b text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
            <div className="p-6">
              <h2 className="font-bold mb-2 text-[17px]">Height 100%</h2>
              <p className="text-sm text-[#4b5675]">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            </div>
             <h4 className="p-6 border-t text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
          </div>
          <div className="shadow rounded-lg flex flex-col justify-between flex-1">
            <div>
              <h4 className="p-6 border-b text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
            <div className="p-6">
              <h2 className="font-bold mb-2 text-[17px]">Height 100%</h2>
              <p className="text-sm text-[#4b5675]">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            </div>
             <h4 className="p-6 border-t text-[#252f4a] text-sm border-gray-100">Height 100%</h4>
          </div>
          </div>
          <div>
          </div>
        </div>
        </div>

        <UIOptionTable title="Options" options={cardOption} />
    </>
  );
}

export default UICard;
