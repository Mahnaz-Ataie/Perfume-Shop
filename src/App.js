import React from "react";
import coverImage from "./assets/images/cover.png";
import { perfumes } from "./Perfumes";
import Header from "./Header";
import PerfumesCards from "./PerfumesCards";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import Filter from "./Filtering-System";
function App() {
  return (
    <div>
      <Header coverImage={coverImage}></Header>
      <Filter perfumes={perfumes}></Filter>
      <PerfumesCards perfumes={perfumes}></PerfumesCards>
      <SocialMedia></SocialMedia>
      <Footer></Footer>
    </div>
  );
}

export default App;
