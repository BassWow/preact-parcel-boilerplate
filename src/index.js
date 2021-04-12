import { h, render } from "preact";
import { Router } from "preact-router";
import tw, { styled } from "twin.macro";
import NavBar from "./components/NavBar";
import { Cards, Card } from "./components/Cards";
import { StopIcon, BeakerIcon } from "@heroicons/react/solid";
const BigHeading = styled.h1`
  ${tw`text-2xl font-inter subpixel-antialiased font-bold text-center text-black`}
`;
const Home = () => (
  <div class="w-screen dark:bg-gray-900 font-inter">
    <NavBar />
    <div class="container mx-auto">
      <section class="pb-20">
        <div class="container px-4 mx-auto pt-12">
          <div class="flex flex-wrap items-center mx-4">
            <div class="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <span class="font-semibold text-xs text-green-400">
                What&apos;s new at Shuffle
              </span>
              <h2 class="mt-8 mb-6 text-primary lg:mb-12 text-4xl lg:text-5xl text-gray-200 font-extrabold font-inter">
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
                  class="inline-block px-6 py-4 mb-3 text-sm font-bold leading-normal hover:text-gray-300 rounded border text-gray-200"
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
        <section class="grid grid-cols-1 lg:grid-cols-4 gap-4 px-8">
          {[...Array(4)].map(() => (
            <figure class="shadow-lg rounded-xl">
              <blockquote class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                <svg
                  width="45"
                  height="36"
                  class="mb-5 fill-current text-light-blue-100"
                >
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
                <p>
                  There's one thing that sucks about @tailwindcss - once you’ve
                  used it on a handful of projects it is a real pain in the ass
                  to write normal CSS again.
                </p>
              </blockquote>
              <figcaption class="flex items-center space-x-4 p-6 md:px-10 md:py-6 rounded-b-xl leading-6 font-semibold text-white bg-gradient-to-br from-primary to-secondary">
                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1602471615287-d733c59b79c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    alt=""
                    class="w-12 h-12 rounded-full bg-light-blue-100"
                    loading="lazy"
                  />
                </div>
                <div class="flex-auto">
                  Graeme Houston
                  <br />
                  <span class="text-light-blue-100">JavaScript Developer</span>
                </div>
                <cite class="flex">
                  <a
                    href="https://twitter.com/iamgraem_e/status/1322861404781748228?s=21"
                    class="opacity-50 hover:opacity-75 transition-opacity duration-200"
                  >
                    <span class="sr-only">
                      Original tweet by Graeme Houston
                    </span>
                    <svg width="33" height="32" fill="currentColor">
                      <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z"></path>
                    </svg>
                  </a>
                </cite>
              </figcaption>
            </figure>
          ))}
        </section>
        <section class="bg-gray-900 py-20 ">
          <div class="container mx-auto border-gray-700 border px-10 py-10 rounded-lg">
            <h2 class="mb-8 md:mb-16 text-4xl lg:text-6xl font-bold font-inter text-white">
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
          {[...Array(4)].map(() => (
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
                    temporibus? Beatae recusandae dignissimos reiciendis est
                    dolor eius excepturi quaerat, quia debitis doloribus velit
                    mollitia?
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
          ))}
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
