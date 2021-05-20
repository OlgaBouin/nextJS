import GenericPage from "../components/genericPage";
import Layout from "../components/layout";
import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'

// const HomeAfterLogin: React.FC<string> = (props: any) => {
//   const { count, increment, decrement, reset } = useCounter();
//   return (
//     <Layout>
//       <h1>Games :</h1>{" "}
//       <UserInfo />
//     </Layout>
//   );
// };

// export default HomeAfterLogin;
export default function home() {

  const dispatch = useDispatch()

  // Tick the time every second
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)
  return (<Layout><GenericPage /></Layout>);
}

export function getStaticProps() {
  // Note that in this case we're returning the state directly, without creating
  // the store first (like in /pages/ssr.js), this approach can be better and easier
  return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        light: false,
      },
    },
  };
}