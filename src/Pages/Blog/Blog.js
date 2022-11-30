import React from "react";

const Blog = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const posts = [
    {
      title:
        "What are the different ways to manage a state in a React application?",
      desc: "There are four main types of state you need to properly manage in your React apps (1)Local state (2)Global state (3)Server state (4)URL state",
      date: `Publish Date: ${date} `,
      href: "javascript:void(0)",
    },
    {
      title: "How does prototypical inheritance work?",
      desc: "The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.",
      date: `Publish Date: ${date} `,
      href: "javascript:void(0)",
    },
    {
      title: "What is a unit test? Why should we write unit tests?",
      desc: "The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages",
      date: `Publish Date: ${date} `,
      href: "javascript:void(0)",
    },
    {
      title: "React vs. Angular vs. Vue?",
      desc: "Angular, React, and Vue are all under very active development. They regularly release new versions and maintain the existing ones. As the current level of support is high in each case, you can safely use any of these frameworks.It’s important to note that Angular is not growing as fast as before, while Vue — even though it started more recently — seems to be growing a lot.As previously stated, we can’t predict which frameworks will remain relevant in the long term, but each project has a great community behind it and is constantly evolving.My goal with this article was to explain the architectural differences, break down each framework’s strengths and weaknesses, and compare them wherever it’s applicable.",
      date: `Publish Date: ${date} `,
      href: "javascript:void(0)",
    },
  ];

  return (
    <div>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8 pt-28 pb-10">
        <div className="max-w-lg">
          <h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community. Updated every hour. The
            powerful gravity waves resulting from the impact of the planets,
            were finally resolved in 2021
          </p>
        </div>
        <div className="mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
          {posts.map((item, idx) => (
            <article className="mt-5 pt-8 md:pt-0" key={idx}>
              <a href={item.href}>
                <span className="block text-gray-400 text-sm">{item.date}</span>
                <div className="mt-2">
                  <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
