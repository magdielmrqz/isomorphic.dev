import { useStaticQuery, graphql } from "gatsby";

export const useGeneral = lang => {
  const { allContentJson } = useStaticQuery(
    graphql`
      query {
        allContentJson(
          filter: {
            General: {
              en: { whatsapp: { eq: 3222488957 } }
              es: { whatsapp: { eq: 3222488957 } }
            }
          }
        ) {
          nodes {
            General {
              en {
                email
                facebook
                instagram
                twitter
                whatsapp
              }
              es {
                email
                facebook
                instagram
                twitter
                whatsapp
              }
            }
          }
        }
      }
    `
  );
  return allContentJson.nodes.General.es;
};

//lang === "es" ? contentJson.General.es : contentJson.General.en;
