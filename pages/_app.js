import '../styles/globals.css'
import wrapper from "../src/store/Store";
import ToastNotifications from '../src/components/toast/ToastNotifications';
import { Box } from "@mui/material";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <Box>
      <ToastNotifications />
      <Component {...pageProps} />
    </Box>
  );
}

// export default MyApp
export default wrapper.withRedux(MyApp);
