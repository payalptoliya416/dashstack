import {Bell,} from "lucide-react";
import UIOptionTable from "../UIOptionTable";
import type { ButtonType} from "../../../types/UiType";
import { brandButtons, buttonData, buttonOption, buttons, IconData, sizes, socialButtons } from "./UIButtonData";

function UIButton() {
  return (
    <>
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Sizing
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            <button className="px-5 py-2 rounded text-white bg-[#3e97ff] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
              Primary
            </button>
            <button className="px-5 py-2 rounded text-white bg-[#505863] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
              Secondary
            </button>
            <button className="px-5 py-2 rounded text-white bg-[#25b865] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
              Success
            </button>
            <button className="px-5 py-2 rounded text-white bg-[#d13b4c] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
              Danger
            </button>
            <button className="px-5 py-2 rounded text-white bg-[#e49e3d] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
              Warning
            </button>
            <button className="px-5 py-2 rounded text-white bg-[#02a0e4] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
              Info
            </button>
            <button className="px-5 py-2 rounded text-white bg-[#252f4a] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
              Dark
            </button>
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            <button className="px-5 py-2 text-white bg-[#3e97ff] font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500">
              Primary
            </button>
            <button className="px-5 py-2 text-white bg-[#505863] font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500">
              Secondary
            </button>
            <button className="px-5 py-2 text-white bg-[#25b865] font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500">
              Success
            </button>
            <button className="px-5 py-2 text-white bg-[#d13b4c] font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500">
              Danger
            </button>
            <button className="px-5 py-2 text-white bg-[#e49e3d] font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500">
              Warning
            </button>
            <button className="px-5 py-2 text-white bg-[#02a0e4] font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500">
              Info
            </button>
            <button className="px-5 py-2 text-white bg-[#252f4a] font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500">
              Dark
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Outline
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 rounded text-white font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500"
                style={{ backgroundColor: btn.color }}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 text-white font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500"
                style={{ backgroundColor: btn.color }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Soft
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            <button className="px-5 py-2 rounded text-[#3e97ff] bg-[#3e97ff1a] font-semibold text-sm hover:text-white hover:bg-[#3e97ff] transition-all duration-500 cursor-pointer">
              Primary
            </button>
            <button className="px-5 py-2 rounded text-[#505863] bg-[#5058631a] font-semibold text-sm hover:text-white hover:bg-[#505863] transition-all duration-500 cursor-pointer">
              Secondary
            </button>
            <button className="px-5 py-2 rounded text-[#25b865] bg-[#25b8651a] font-semibold text-sm hover:text-white hover:bg-[#25b865] transition-all duration-500 cursor-pointer">
              Success
            </button>
            <button className="px-5 py-2 rounded text-[#d13b4c] bg-[#d13b4c1a] font-semibold text-sm hover:text-white hover:bg-[#d13b4c] transition-all duration-500 cursor-pointer">
              Danger
            </button>
            <button className="px-5 py-2 rounded text-[#e49e3d] bg-[#e49e3d1a] font-semibold text-sm hover:text-white hover:bg-[#e49e3d] transition-all duration-500 cursor-pointer">
              Warning
            </button>
            <button className="px-5 py-2 rounded text-[#02a0e4] bg-[#02a0e41a] font-semibold text-sm hover:text-white hover:bg-[#02a0e4] transition-all duration-500 cursor-pointer">
              Info
            </button>
            <button className="px-5 py-2 rounded text-[#252f4a] bg-[#252f4a1a] font-semibold text-sm hover:text-white hover:bg-[#252f4a] transition-all duration-500 cursor-pointer">
              Dark
            </button>
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            <button className="px-5 py-2 text-[#3e97ff] bg-[#3e97ff1a] font-semibold text-sm rounded-full hover:text-white hover:bg-[#3e97ff] transition-all duration-500 cursor-pointer">
              Primary
            </button>
            <button className="px-5 py-2 text-[#505863] bg-[#5058631a] font-semibold text-sm rounded-full hover:text-white hover:bg-[#505863] transition-all duration-500 cursor-pointer">
              Secondary
            </button>
            <button className="px-5 py-2 text-[#25b865] bg-[#25b8651a] font-semibold text-sm rounded-full hover:text-white hover:bg-[#25b865] transition-all duration-500 cursor-pointer">
              Success
            </button>
            <button className="px-5 py-2 text-[#d13b4c] bg-[#d13b4c1a] font-semibold text-sm rounded-full hover:text-white hover:bg-[#d13b4c] transition-all duration-500 cursor-pointer">
              Danger
            </button>
            <button className="px-5 py-2 text-[#e49e3d] bg-[#e49e3d1a] font-semibold text-sm rounded-full hover:text-white hover:bg-[#e49e3d] transition-all duration-500 cursor-pointer">
              Warning
            </button>
            <button className="px-5 py-2 text-[#02a0e4] bg-[#02a0e41a] font-semibold text-sm rounded-full hover:text-white hover:bg-[#02a0e4] transition-all duration-500 cursor-pointer">
              Info
            </button>
            <button className="px-5 py-2 text-[#252f4a] bg-[#252f4a1a] font-semibold text-sm rounded-full hover:text-white hover:bg-[#252f4a] transition-all duration-500 cursor-pointer">
              Dark
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Softline
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 rounded font-semibold text-sm transition-all duration-500 cursor-pointer hover:text-white"
                style={{
                  color: btn.color,
                  backgroundColor: `${btn.color}1a`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    btn.color;
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (
                    e.currentTarget as HTMLButtonElement
                  ).style.backgroundColor = `${btn.color}1a`;
                  (e.currentTarget as HTMLButtonElement).style.color =
                    btn.color;
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 font-semibold text-sm rounded-full transition-all duration-500 cursor-pointer hover:text-white"
                style={{
                  color: btn.color,
                  backgroundColor: `${btn.color}1a`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    btn.color;
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (
                    e.currentTarget as HTMLButtonElement
                  ).style.backgroundColor = `${btn.color}1a`;
                  (e.currentTarget as HTMLButtonElement).style.color =
                    btn.color;
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Solidtext
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 rounded font-semibold text-sm transition-all duration-500 cursor-pointer hover:text-white"
                style={{
                  color: btn.color,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = btn.color;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = btn.color;
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 font-semibold text-sm rounded-full transition-all duration-500 cursor-pointer hover:text-white"
                style={{
                  color: btn.color,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = btn.color;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = btn.color;
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Softtext
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 rounded font-semibold text-sm transition-all duration-500 cursor-pointer"
                style={{
                  color: btn.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${btn.color}1a`; // soft bg on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"; // reset
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 font-semibold text-sm rounded-full transition-all duration-500 cursor-pointer"
                style={{
                  color: btn.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${btn.color}1a`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Gradient
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 rounded text-white font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500 bg-gradient-to-b from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0)]"
                style={{ backgroundColor: btn.color }}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 text-white font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500 bg-gradient-to-b from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0)]"
                style={{ backgroundColor: btn.color }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          IconSolid
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 rounded text-white font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500 flex items-center"
                style={{ backgroundColor: btn.color }}
              >
                <Bell className="inline-block me-1" size={15} />
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {buttonData.map((btn: ButtonType, i: number) => (
              <button
                key={i}
                className="px-5 py-2 text-white font-semibold text-sm rounded-full cursor-pointer hover:opacity-85 transition-all duration-500 flex items-center"
                style={{ backgroundColor: btn.color }}
              >
                <Bell className="inline-block me-1" size={15} />
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Soft
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {buttonData.map((btn, i) => (
              <button
                key={i}
                className="px-5 py-2 rounded font-semibold text-sm cursor-pointer transition-all duration-500 flex items-center"
                style={{
                  color: btn.color,
                  backgroundColor: `${btn.color}1a`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget.style.color = "#fff"),
                    (e.currentTarget.style.backgroundColor = btn.color);
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.style.color = btn.color),
                    (e.currentTarget.style.backgroundColor = `${btn.color}1a`);
                }}
              >
                <Bell className="inline-block me-1" size={15} />
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {buttonData.map((btn, i) => (
              <button
                key={i}
                className="px-5 py-2 font-semibold text-sm rounded-full cursor-pointer transition-all duration-500 flex items-center"
                style={{
                  color: btn.color,
                  backgroundColor: `${btn.color}1a`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget.style.color = "#fff"),
                    (e.currentTarget.style.backgroundColor = btn.color);
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.style.color = btn.color),
                    (e.currentTarget.style.backgroundColor = `${btn.color}1a`);
                }}
              >
                <Bell className="inline-block me-1" size={15} />
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          withIcon
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {IconData.map((btn, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full text-white font-semibold text-sm flex justify-center items-center cursor-pointer hover:opacity-85 transition-all duration-500"
                style={{ backgroundColor: btn.color }}
              >
                <Bell size={15} />
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {IconData.map((btn, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full text-white font-semibold text-sm flex justify-center items-center cursor-pointer hover:opacity-85 transition-all duration-500"
                style={{ backgroundColor: btn.color }}
              >
                <Bell size={15} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          iconSizing
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {buttons.map((btn, i) => (
              <button
                key={i}
                className={`${btn.size} rounded text-white font-semibold text-sm flex justify-center items-center cursor-pointer hover:opacity-85 transition-all duration-500`}
                style={{ backgroundColor: btn.color }}
              >
                <Bell size={btn.iconSize} />
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {buttons.map((btn, i) => (
              <button
                key={i}
                className={`${btn.size} rounded-full text-white font-semibold text-sm flex justify-center items-center cursor-pointer hover:opacity-85 transition-all duration-500`}
                style={{ backgroundColor: btn.color }}
              >
                <Bell size={btn.iconSize} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          iconBrands
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {brandButtons.map((btn, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded text-white font-semibold text-sm flex justify-center items-center cursor-pointer hover:opacity-85 transition-all duration-500"
                style={{ backgroundColor: btn.color }}
              >
                {btn.icon}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {brandButtons.map((btn, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full text-white font-semibold text-sm flex justify-center items-center cursor-pointer hover:opacity-85 transition-all duration-500"
                style={{ backgroundColor: btn.color }}
              >
                {btn.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          socialBrands
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {socialButtons.map((btn, i) => (
              <button
                key={i}
                className="py-2 px-5 rounded text-white font-semibold text-sm flex justify-center items-center cursor-pointer hover:opacity-85 transition-all duration-500"
                style={{ backgroundColor: btn.color }}
              >
                <span className="inline-block me-2">{btn.icon}</span>
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {socialButtons.map((btn, i) => (
              <button
                key={i}
                className="py-2 px-5 rounded-full text-white font-semibold text-sm flex justify-center items-center cursor-pointer hover:opacity-85 transition-all duration-500"
                style={{ backgroundColor: btn.color }}
              >
                <span className="inline-block me-2">{btn.icon}</span>
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Sizings
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
            {sizes.map((size, i) => (
              <button
                key={i}
                className={`${size.padding} rounded text-white bg-[#3e97ff] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500`}
              >
                {size.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap pt-4 sm:pt-6">
            {sizes.map((size, i) => (
              <button
                key={i}
                className={`${size.padding} rounded-full text-white bg-[#3e97ff] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <UIOptionTable title="Options" options={buttonOption} />
    </>
  );
}

export default UIButton;
