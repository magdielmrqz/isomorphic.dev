import { useStaticQuery, graphql } from "gatsby";

export const useMenu = lang => {
  const { contentJson } = useStaticQuery(
    graphql`
      query {
        contentJson {
          Menu {
            en {
              label
              sort
              url
              id
            }
            es {
              label
              sort
              url
              id
            }
          }
        }
      }
    `
  );
  return lang === "es" ? contentJson.Menu.es : contentJson.Menu.en;
};
