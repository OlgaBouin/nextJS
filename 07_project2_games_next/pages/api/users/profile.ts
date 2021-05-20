import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    response.statusCode = 201;
    response.setHeader("Content-Type", "application/json");
    response.send(
      JSON.stringify({ name: "John Doe", email: "j@getDomainLocale.com" })
    );
  } else {
    response.statusCode = 405;
    response.end();
  }
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log("-------------QUERY--------------", context.query);
//   console.log("-------------PARAMS--------------", context.params);
//   return { props: { route: context.params.id, params: context.query } };
// };
