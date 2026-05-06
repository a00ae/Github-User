import { memo } from "react";
import avater from "../assets/profile.avif";

const BoxProfile = () => {
  return (
    <section className="box-profile">
      <div className="box-profile_avater">
        <img src={avater} alt="" />
      </div>

      <div className="box-profile_descraption">
        <span data-title>Hassan Alkhalaf</span>
        <span data-descraption>Bachelor of Computer Science student</span>
        <div className="flowers">
          <a href="">
            <span>9</span>followers
          </a>
          <div>.</div>
          <a href="">
            <span>10</span> following
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(BoxProfile);
