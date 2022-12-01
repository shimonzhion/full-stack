
  import { Routes, Route } from "react-router-dom";

  
  export default function Router() {
    return (
      <TextProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </TextProvider>
    );
  }