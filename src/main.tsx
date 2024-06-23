import ReactDOM from "react-dom/client";

import { AppProviders } from "app/AppPrividers";
import "app/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<AppProviders />);
