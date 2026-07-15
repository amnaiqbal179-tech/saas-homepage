"use client";

import { Button } from "../ui/Button";

export const JournalSection = () => {
  const posts = [
    {
      title: "How to Build a Climate-Ready Data Stack",
      tag: "Insights",
      time: "4 min",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    },
    {
      title: "Sustainability Isn't a Side Project: Making Impact Operational",
      tag: "Strategy",
      time: "7 min",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
    },
    {
      title: "Inside the Aetherfield Model: How We Turn Data Into Action",
      tag: "Insights",
      time: "5 min",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-24 px-4 flex flex-col items-center">

      <h2 className="text-5xl font-semibold tracking-tighter mb-16">
        From the journal
      </h2>

      <div className="w-full space-y-8 mb-12">
        {posts.map((post, i) => (
          <div
            key={i}
            className="flex gap-8 border-b border-gray-200 pb-8 last:border-0"
          >
            <div className="w-40 h-24 shrink-0">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-2">
                {post.title}
              </h4>

              <p className="text-xs text-gray-500 uppercase">
                {post.tag} • {post.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button variant="primary">
        View all articles
      </Button>

    </section>
  );
};