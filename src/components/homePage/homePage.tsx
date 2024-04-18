import { flattenAttributes } from "@/lib/utils";
import qs from "qs";
const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
        link: {
          populate: true,
        },
      },
    },
  },
});

const getStrapiData = async (path: string) => {
  const baseUrl = "http://127.0.0.1:1337";
  const url = new URL(path, baseUrl);
  url.search = homePageQuery;
  console.log(url.href, "urlSearch");
  try {
    const response = await fetch(url.href);
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    console.log(flattenedData, "datadatadata");
    return flattenedData;
  } catch (error) {
    console.log(error);
  }
};
const HomePage = async () => {
  const getData = await getStrapiData("/api/home-page");
  const { title, description, blocks } = getData;
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default HomePage;
