import React from "react";
import tempImg from '../../../assets/circle.png'
const TrdFund = () => {
  return (
    <div >
      <div className="m-10 ">
      <h1 className="lg:text-4xl text-2xl my-3 lg:my-0 font-extrabold text-center leading-normal"><span className="text-teal-400">Trending </span> Fundraisers</h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi vero amet minima harum pariatur!</p>
      </div>
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Very easy this was to integrate
          </h3>
          <p className="my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img className="rounded-full w-9 h-9" src={tempImg} alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Bonnie Green</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Developer at Open AI
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Solid foundation for any project
          </h3>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas ullam nam nihil recusandae quae.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"
            src={tempImg}
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Roberta Casas</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Lead designer at Dropbox
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Mindblowing workflow
          </h3>
          <p className="my-4">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, asperiores dolore!
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"src={tempImg}
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Software Engineer at Facebook
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Efficient Collaborating
          </h3>
          <p className="my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt recusandae impedit ad voluptate?
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"
            src={tempImg}
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Joseph McFall</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              CTO at Google
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
    </div>
  );
};

export default TrdFund;
