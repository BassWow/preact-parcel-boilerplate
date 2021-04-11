import { h, render } from "preact";
import { Router } from "preact-router";
import tw, { styled } from "twin.macro";
import { Cards, Card } from "./components/Cards";
import { StopIcon, BeakerIcon } from "@heroicons/react/solid";
const BigHeading = styled.h1`
  ${tw`text-2xl font-sans subpixel-antialiased font-bold text-center text-black`}
`;

const Home = () => (
  <div class="w-screen dark:bg-gray-900">
    <div class="container mx-auto">
      <section class="pb-20">
        <nav class="flex justify-between items-center py-8 px-4 xl:px-10 text-gray-200">
          <a class="text-lg font-semibold" href="#">
            <img
              class="h-7"
              src="zeus-assets/logo/logo-zeus-red.svg"
              alt=""
              width="auto"
            />
          </a>
          <div class="lg:hidden">
            <button class="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
              <svg
                class="block h-4 w-4"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul class="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
            <li>
              <a class="text-sm font-medium" href="#">
                <BeakerIcon />
                About
              </a>
            </li>
            <li>
              <a class="text-sm font-medium" href="#">
                Company
              </a>
            </li>
            <li>
              <a class="text-sm font-medium" href="#">
                Services
              </a>
            </li>
            <li>
              <a class="text-sm font-medium" href="#">
                Testimonials
              </a>
            </li>
          </ul>
          <div class="hidden lg:block">
            <a
              class="inline-block py-3 px-8 text-sm leading-normal font-medium bg-red-50 hover:bg-green-100 text-green-500 rounded transition duration-200"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </nav>
        <div class="container px-4 mx-auto pt-12">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <span class="font-semibold text-xs text-green-400">
                What&apos;s new at Shuffle
              </span>
              <h2 class="mt-8 mb-6 lg:mb-12 text-4xl lg:text-5xl text-gray-200 font-semibold">
                Take care of your performance every day.
              </h2>
              <div class="max-w-lg mb-6 lg:mb-12">
                <p class="text-xl text-gray-500">
                  Build a well-presented brand that everyone will love. Take
                  care to develop resources continually and integrity them with
                  previous projects.
                </p>
              </div>
              <div class="flex flex-wrap">
                <a
                  class="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-green-400 hover:bg-green-300 text-white rounded transition duration-200"
                  href="#"
                >
                  Track your performance
                </a>
                <a
                  class="inline-block px-6 py-4 mb-3 text-sm font-medium leading-normal hover:text-gray-300 rounded border text-gray-200"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div class="relative w-full md:w-1/2 px-4">
              <img
                class="hidden lg:block lg:absolute top-0 right-0 z-10 lg:mt-28"
                src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
                alt=""
              />
              <img
                class="relative"
                src="https://tailwindcomponents.com/svg/website-designer-bro.svg"
                alt=""
              />
              <img
                class="hidden lg:block lg:absolute bottom-0 lg:left-0 lg:ml-6 lg:mb-20"
                src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="hidden navbar-menu relative z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
              <a class="mr-auto text-lg font-semibold leading-none" href="#">
                <img
                  class="h-7"
                  src="zeus-assets/logo/logo-zeus-red.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button class="navbar-close">
                <svg
                  class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewbox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Company
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-auto">
              <div class="pt-6">
                <a
                  class="block py-3 text-center text-sm leading-normal bg-green-50 hover:bg-green-100 text-red-300 font-semibold rounded transition duration-200"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
              <p class="mt-6 mb-4 text-sm text-center text-gray-500">
                <span>&copy; 2021 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
        <section class="bg-gray-900 py-20 ">
          <div class="container mx-auto border-gray-700 border px-10 py-10 rounded-lg">
            <h2 class="mb-8 md:mb-16 text-4xl lg:text-6xl font-semibold font-heading text-white">
              Let's start something completely new together
            </h2>
            <div class="flex flex-wrap items-center">
              <div class="inline-block max-w-xl mb-6 md:mb-0">
                <p class="text-xl text-gray-300">
                  Drop us a line, and we'll get in touch.
                </p>
                <p class="text-xl text-gray-300">
                  'll see if we're a match and how we can help each other.
                </p>
              </div>
              <a
                class="inline-block ml-auto w-full md:w-auto px-12 py-4 text-center text-sm text-white font-medium leading-normal bg-green-400 hover:bg-green-300 rounded transition duration-200"
                href="#"
              >
                Sign up
              </a>
            </div>
          </div>
        </section>
      </section>
      <section>
        <Cards>
          <Card>
            <div class="card__image">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            </div>
            <div class="card__content_container">
              <div class="card__content_image">
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </div>
              <div class="card__content_copy">
                <h2>Card title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, culpa asperiores voluptatem delectus eveniet adipisci
                  temporibus? Beatae recusandae dignissimos reiciendis est dolor
                  eius excepturi quaerat, quia debitis doloribus velit mollitia?
                </p>
              </div>
            </div>
            <div class="card__links">
              <ul>
                <li>
                  <StopIcon class="h-10 w-10 text-black text-center bg" />
                </li>

                <li>
                  <StopIcon class="h-10 w-10 text-black" />
                </li>

                <li>
                  <StopIcon class="h-10 w-10 text-black" />
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <div class="card__image">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            </div>
            <div class="card__content_container">
              <div class="card__content_image">
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </div>
              <div class="card__content_copy">
                <h2>Card title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, culpa asperiores voluptatem delectus eveniet adipisci
                  temporibus? Beatae recusandae dignissimos reiciendis est dolor
                  eius excepturi quaerat, quia debitis doloribus velit mollitia?
                </p>
              </div>
            </div>
            <div class="card__links">
              <ul>
                <li>
                  <StopIcon class="h-10 w-10 text-black text-center bg" />
                </li>

                <li>
                  <StopIcon class="h-10 w-10 text-black" />
                </li>

                <li>
                  <StopIcon class="h-10 w-10 text-black" />
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <div class="card__image">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            </div>
            <div class="card__content_container">
              <div class="card__content_image">
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </div>
              <div class="card__content_copy">
                <h2>Card title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, culpa asperiores voluptatem delectus eveniet adipisci
                  temporibus? Beatae recusandae dignissimos reiciendis est dolor
                  eius excepturi quaerat, quia debitis doloribus velit mollitia?
                </p>
              </div>
            </div>
            <div class="card__links">
              <ul>
                <li>
                  <StopIcon class="h-10 w-10 text-black text-center bg" />
                </li>

                <li>
                  <StopIcon class="h-10 w-10 text-black" />
                </li>

                <li>
                  <StopIcon class="h-10 w-10 text-black" />
                </li>
              </ul>
            </div>
          </Card>
        </Cards>
      </section>
    </div>
  </div>
);

const Error = () => (
  <section class="error">
    <h2>Error </h2>
    <p>It looks like we hit a snag.</p>
  </section>
);

export const App = () => (
  <Router>
    <Home path="/" />
    <Error type="404" default />
  </Router>
);

render(<App />, document.querySelector("#app"));
