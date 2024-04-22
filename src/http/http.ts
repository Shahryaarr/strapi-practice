import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import qs from "qs";

const baseUrl = getStrapiURL();

const fetchData = async (url: string) => {
  //   const authToken = null;
  //   const headers = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${authToken}`,
  //     },
  //   };
  try {
    const response = await fetch(url);
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.log(error);
  }
};

export const getHomePageData = async () => {
  const url = new URL("/api/home-page", baseUrl);
  url.search = qs.stringify({
    // populate: {
    //   blocks: {
    //     populate: {
    //       image: {
    //         fields: ["url", "alternativeText"],
    //       },
    //       link: {
    //         populate: true,
    //       },
    //       Feature: {
    //         populate: true,
    //       },
    //       product: {
    //         populate: ["image", "button"],
    //       },
    //       partner: {
    //         populate: true,
    //       },
    //     },
    //   },
    // },
    populate: {
      blocks: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          link: {
            populate: true,
          },
          Feature: {
            populate: true,
          },
          product: {
            populate: ["image", "button"],
          },
          logos: {
            populate: true,
          },
        },
      },
    },
  });
  return await fetchData(url.href);
};

export const getGlobalPageData = async () => {
  const url = new URL("/api/global", baseUrl);
  url.search = qs.stringify({
    populate: [
      "layouts.image",
      "layouts.button",
      "layouts.link",
      "layouts.copyRightText",
      "layouts.logo",
      "layouts.links",
      "layouts.links.navigationLink",
    ],
  });
  return await fetchData(url.href);
};
