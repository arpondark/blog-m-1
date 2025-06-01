import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <div className="bg-gradient-to-r from-[#53c28b20] to-[#53c28b05] dark:from-[#53c28b15] dark:to-[#53c28b03] p-8 rounded-2xl mb-10 backdrop-blur-sm border border-gray-100 dark:border-gray-800 shadow-sm">
        <h1 className={styles.catTitle}>{params.category}</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Explore our collection of {params.category} projects
        </p>
      </div>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <div className="mt-6">
              <Button text="See More" url="#" />
            </div>
          </div>
          <div className={`${styles.imgContainer} group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#53c28b30] to-transparent dark:from-[#64d59c30] dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl"></div>
            <Image
              className={styles.img}
              fill={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={item.image}
              alt={item.title}
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
