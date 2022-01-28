import type { NextPage } from "next";
import tw from "tailwind-styled-components";
import { pipe, map, each, toArray } from "@fxts/core";

type CardProps = {
  $isPadding?: boolean;
};

const CardComponent = tw.div<CardProps>`
  ${(p) => (p.$isPadding ? "p-6" : "")}

  bg-white
  rounded-3xl
  shadow-xl
`;

type OptionButtonProps = {
  $color: string;
};

const OptionButton = tw.button<OptionButtonProps>`
  ${(p) => {
    switch (p.$color) {
      case "yellow":
        return "bg-yellow-500 ring-yellow-500";
      case "indigo":
        return "bg-indigo-500 ring-indigo-500";
      case "teal":
        return "bg-teal-500 ring-teal-500";
    }
  }}
  h-5 
  w-5 
  rounded-full
  focus:ring-2
  ring-offset-2
  transition
`;

const CartItem = tw.div`
  flex 
  justify-between 
  my-2
  dark:bg-black
  dark:odd:bg-black
  dark:even:bg-black
  dark:first:bg-black
  dark:last:bg-black

  odd:bg-blue-50 
  even:bg-yellow-50 
  first:bg-teal-50 
  last:bg-amber-50
`;

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 bg-slate-400 py-20 px-20 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
      <CardComponent
        $isPadding={true}
        className="flex flex-col justify-between dark:bg-black"
        // className="sm:bg-red-400 sm:hover:bg-pink-800 md:bg-teal-400 lg:bg-indigo-400 xl:bg-yellow-400 2xl:bg-pink-500"
      >
        <span className="text-2xl font-semibold dark:text-white">
          Select Item
        </span>
        <ul>
          {pipe(
            [1, 2, 3, 4],
            map((i) => (
              <CartItem key={i}>
                <span className="text-gray-500 dark:text-gray-100">
                  Grey Chair
                </span>
                <span className="font-semibold dark:text-white">$19</span>
              </CartItem>
            )),
            toArray,
          )}
        </ul>
        {/* <ul>
          {pipe(
            ["a", "b", "c", ""],
            map((i) => (
              <li key={i} className="bg-red-500 py-2 empty:hidden">
                {i}
              </li>
            )),
            toArray,
          )}
        </ul> */}
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button className="mx-auto mt-5 block w-3/4 rounded-xl bg-blue-500 p-3 text-center text-white hover:bg-teal-500 hover:text-black focus:bg-red-500 active:bg-yellow-500 dark:border dark:border-white dark:bg-black dark:hover:bg-white">
          Checkout
        </button>
      </CardComponent>
      <CardComponent className="group overflow-hidden" $isPadding={false}>
        <div className="bg-blue-500 p-6 pb-14 xl:pb-40 portrait:bg-indigo-600 landscape:bg-teal-500">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-zinc-300" />
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative -mt-14 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molly</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </CardComponent>
      <CardComponent $isPadding={true} className="lg:col-span-2 xl:col-span-1">
        <div className="mb-5 flex items-center justify-between">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">💖</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="text-xl font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="space-x-5">
              <OptionButton $color="yellow" />
              <OptionButton $color="indigo" />
              <OptionButton $color="teal" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">$450</span>
            <button className="rounded-lg bg-blue-500 py-2 px-8 text-center text-xs text-white">
              Add to cart
            </button>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default Home;
